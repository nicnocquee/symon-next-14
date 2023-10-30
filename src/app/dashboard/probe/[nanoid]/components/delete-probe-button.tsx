'use client';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { deleteProbe } from '@/usecases/probes';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';

export function DeleteProbeDialog({ id, name }: { id: string; name: string }) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Probe</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            {`This action cannot be undone. This will permanently delete the "${name}" probe.`}
          </AlertDialogDescription>
          <form
            id="delete-probe"
            action={async (formData) => {
              await deleteProbe(formData);
              toast({
                title: 'Success',
                description: `Probe "${name}" deleted successfully`
              });
            }}>
            <input type="hidden" name="id" value={id} />
            <Buttons />
          </form>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

const Buttons = () => {
  const status = useFormStatus();

  return (
    <AlertDialogFooter>
      <AlertDialogCancel className={status.pending ? `bg-opacity-25` : ''}>
        Cancel
      </AlertDialogCancel>
      <Button
        disabled={status.pending}
        form="delete-probe"
        type="submit"
        className={status.pending ? `bg-opacity-25` : ''}
        variant={'destructive'}>
        {status.pending ? 'Deleting...' : 'Delete'}
      </Button>
    </AlertDialogFooter>
  );
};
