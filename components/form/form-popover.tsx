'use client';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { createBoard } from '@/actions/create-board';
import { Button } from '@/components/ui/button';
import { useAction } from '@/hooks/use-action';
import { X } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { ElementRef, FC, useRef } from 'react';
import { toast } from 'sonner';
import { FormInput } from './form-input';
import { FormPicker } from './form-picker';
import { FormSubmit } from './form-submit';
import { useSearchParams } from 'next/navigation';

interface FormPopoverProps {
  children: React.ReactNode;
  side?: 'left' | 'right' | 'top' | 'bottom';
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
}

const FormPopover: FC<FormPopoverProps> = ({
  children,
  align,
  side = 'bottom',
  sideOffset = 0,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const projectId = searchParams?.get('projectId') as string;

  const closeRef = useRef<ElementRef<'button'>>(null);
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess(data) {
      toast.success('Board created!');
      closeRef.current?.click();
      router.push(`/boards/${data.id}?projectId=${projectId}`);
    },
    onError(error) {
      toast.error(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;
    const image = formData.get('image') as string;
    execute({ title, image, projectId });
  };
  return (
    <Popover>
      <PopoverTrigger
        className="text-center rounded-md p-2 bg-slate-100"
        asChild
      >
        {children}
      </PopoverTrigger>
      <PopoverContent
        align={align}
        className="w-80 p-5"
        side={side}
        sideOffset={sideOffset}
      >
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          Create Board
        </div>
        <PopoverClose asChild ref={closeRef}>
          <Button
            className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
            variant="ghost"
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
        <form action={onSubmit} className="space-y-4">
          <div className="space-y-4">
            <FormPicker id="image" errors={fieldErrors} />
            <FormInput
              id="title"
              label="Board title"
              type="text"
              errors={fieldErrors}
              className="w-full h-auto"
            />
          </div>
          <FormSubmit variant="default" className="w-full">
            Create
          </FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default FormPopover;
