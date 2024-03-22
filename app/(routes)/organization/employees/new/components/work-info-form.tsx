'use client';
import { useUpdateEmployeeMutation } from '@/app/redux/services/employeeApi';
import ActionButton from '@/components/buttons/action-button';
import { DatePicker } from '@/components/inputs/date-picker';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';
import {
  WorkInfoFormSchema,
  WorkInfoFormValues,
} from '@/lib/validation/work-form-validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Employee } from '@prisma/client';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

interface WorkInfoFormProps {
  employee: Employee | null;
}

const WorkInfoForm: FC<WorkInfoFormProps> = ({ employee }) => {
  const employeeId = employee?.id;
  // const dispatch = useAppDispatch();
  const [updateEmployee, { isLoading }] = useUpdateEmployeeMutation();
  const form = useForm<WorkInfoFormValues>({
    resolver: zodResolver(WorkInfoFormSchema),
    defaultValues: {
      workAddress: '123, Main Street, Colombo 01',
      workLocation: 'Remote',
      workingHours: 'Standard 40 hours/week',
      startDate: new Date(),
      timeZone: 'Asia/Colombo',
    },
  });

  const onSubmit = async (data: WorkInfoFormValues) => {
    try {
      const response = await updateEmployee({
        employeeId, // Pass the employeeId to the mutation
        body: {
          workAddress: data.workAddress,
          workLocation: data.workLocation,
          workingHours: data.workingHours,
          startDate: data.startDate,
          timeZone: data.timeZone,
        },
      }).unwrap();
      const updatedEmployee = response;
      toast({
        title: 'Employee updated successfully',
        description: 'Please update the rest of the employee information',
      });
      form.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong, Please try again',
        variant: 'destructive',
      });
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='mt-5'>
          <h2 className='text-lg font-semibold'>Location</h2>
          <Separator className='mt-1 mb-3' />

          <div className='flex flex-col md:flex-row md:gap-20 gap-y-3 2xl:justify-between'>
            <span>
              <FormLabel>Work Address</FormLabel>

              <FormField
                name='workAddress'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        className='text-sm text-gray-600 bg-slate-50 w-full md:w-[400px]'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </span>
            <span>
              <FormLabel>Work Location</FormLabel>

              <FormField
                name='workLocation'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        className='text-sm text-gray-600 bg-slate-50 w-full md:w-[400px]'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </span>
          </div>
        </div>

        <div className='mt-5'>
          <h2 className='text-lg font-semibold'>Schedule</h2>
          <Separator className='mt-1 mb-3' />

          <div className='flex flex-col md:flex-row justify-between gap-4'>
            <span className='flex flex-col gap-2'>
              <FormLabel>Start Date</FormLabel>

              <Controller
                name='startDate'
                control={form.control}
                render={({ field }) => (
                  <DatePicker
                    value={field.value}
                    onChange={(date) => field.onChange(date)}
                  />
                )}
              />
            </span>

            <span>
              <FormLabel>Working hours</FormLabel>

              <FormField
                name='workingHours'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        className='text-sm text-gray-600 bg-slate-50 w-full md:w-[250px]'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </span>
            <span>
              <FormLabel>TimeZone</FormLabel>

              <FormField
                name='timeZone'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        className='text-sm text-gray-600 bg-slate-50 w-full md:w-[250px]'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </span>
          </div>
        </div>
        <div className='mt-4'>
          <ActionButton
            type='submit'
            onClick={() => onSubmit}
            isLoading={isLoading}
            label='Save'
          />
        </div>
      </form>
    </Form>
  );
};

export default WorkInfoForm;
