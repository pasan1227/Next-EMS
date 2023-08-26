'use client';
import { useUpdateEmployeeMutation } from '@/app/redux/services/employeeApi';
import { useGetUsersQuery } from '@/app/redux/services/userApi';
import ActionButton from '@/components/buttons/action-button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { employeeTypeOptions } from '@/constants/employees';
import { toast } from '@/hooks/use-toast';
import { useUploadThing } from '@/lib/uploadthing';
import {
  HRSettingsFormSchema,
  HRSettingsFormValues,
} from '@/lib/validation/hr-settings-form-validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangeEvent, FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import LoadingState from '../../components/loading-state';

interface HRSettingsFormProps {
  employeeId: string;
}

const HRSettingsForm: FC<HRSettingsFormProps> = ({employeeId}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { startUpload } = useUploadThing('pdfUploader');

  const {data:users, isLoading:isUsersLoading} =useGetUsersQuery();
  const [updateEmployee, { isLoading: loading }] = useUpdateEmployeeMutation();
  
  const form = useForm<HRSettingsFormValues>({
    resolver: zodResolver(HRSettingsFormSchema),
    defaultValues: {
      employeeType: 'fullTime',
      relatedUser: '',
      idCopy: '',
      resumeCopy: '',
      passbookCopy: '',
    },
  });

 const handleFileUpload = (
   e: ChangeEvent<HTMLInputElement>,
   fieldChange: (value: string) => void
 ) => {
   e.preventDefault();

   if (e.target.files && e.target.files.length > 0) {
     const newFiles = Array.from(e.target.files);

     const validFiles = newFiles.filter((file) => file.type.includes('pdf'));

     if (validFiles.length === 0) return; // No valid PDF files

     setFiles((prevFiles) => [...prevFiles, ...validFiles]);

     const fileDataUrls: string[] = [];

     validFiles.forEach((file) => {
       const fileReader = new FileReader();
       fileReader.onload = (event) => {
         const fileDataUrl = event.target?.result?.toString() || '';
         fileDataUrls.push(fileDataUrl);

         if (fileDataUrls.length === validFiles.length) {
           fieldChange(fileDataUrls.join(','));
         }
       };
       fileReader.readAsDataURL(file);
     });
   }
 };


  const onSubmit = async (values: HRSettingsFormValues) => {
    // Perform save action here using data
    setIsLoading(true);
    try {
      const hasFileChanged = files.length > 0;

      if (hasFileChanged) {
        const uploadRes = await startUpload(files);
        console.log(uploadRes);
        if (uploadRes && uploadRes[0].fileUrl) {
          values.idCopy = uploadRes[0].fileUrl;
        }
        if (uploadRes && uploadRes[1].fileUrl) {
          values.resumeCopy = uploadRes[1].fileUrl;
        }
        if (uploadRes && uploadRes[2].fileUrl) {
          values.passbookCopy = uploadRes[2].fileUrl;
        }
      }
      setIsLoading(false);
      const response = updateEmployee({
        employeeId, // Pass the employeeId to the mutation
        body: {
          employeeType: values.employeeType,
          userId: values.relatedUser,
          idCopy: values.idCopy,
          resumeCopy: values.resumeCopy,
          passbookCopy: values.passbookCopy,
        },
      });
      const updatedEmployee = response; // Access the nested data
      console.log(updatedEmployee);
      toast({
        title: 'Success',
        description: 'Employee details updated successfully',
      });
      form.reset();
    } catch (error) {
      setIsLoading(false);
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
      });
    }
  };

  if (isUsersLoading) return <LoadingState/>
    return (
      <>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='flex justify-between'>
              {/* Status */}
              <div className='w-1/2'>
                <h2 className='text-lg font-semibold'>Status</h2>
                <Separator className='mt-1 mb-3' />
                <div className='flex flex-col gap-y-4'>
                  <FormField
                    control={form.control}
                    name='employeeType'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employee Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='Select an employee type to display' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {employeeTypeOptions.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='relatedUser'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Related User</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='Select an user email to display' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {users?.map((user) => (
                              <SelectItem key={user.id} value={user.id}>
                                {user.email}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className='flex flex-col gap-y-3'>
                <h2 className='text-lg font-semibold'>Upload Documents</h2>
                <Separator className='mt-1 mb-3' />
                <FormLabel>ID Card Copy</FormLabel>
                <FormField
                  control={form.control}
                  name='idCopy'
                  render={({ field }) => (
                    <FormItem className='flex items-center gap-4'>
                      <FormControl className='text-base-semibold text-gray-400'>
                        <Input
                          type='file'
                          accept='.pdf'
                          placeholder='Upload ID Card'
                          onChange={(e) => handleFileUpload(e, field.onChange)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormLabel>Resume Copy</FormLabel>
                <FormField
                  control={form.control}
                  name='resumeCopy'
                  render={({ field }) => (
                    <FormItem className='flex items-center gap-4'>
                      <FormControl className='text-base-semibold text-gray-400'>
                        <Input
                          type='file'
                          accept='.pdf'
                          placeholder='Upload Resume'
                          onChange={(e) => handleFileUpload(e, field.onChange)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormLabel>Passbook Copy</FormLabel>

                <FormField
                  control={form.control}
                  name='passbookCopy'
                  render={({ field }) => (
                    <FormItem className='flex items-center gap-4'>
                      <FormControl className='text-base-semibold text-gray-400'>
                        <Input
                          type='file'
                          accept='.pdf'
                          placeholder='Upload Bank Passbook'
                          onChange={(e) => handleFileUpload(e, field.onChange)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className='mt-4'>
              <ActionButton
                isLoading={isLoading || loading}
                type='submit'
                onClick={() => onSubmit}
                label='Save'
              />
            </div>
          </form>
        </Form>
      </>
    );
};

export default HRSettingsForm;
