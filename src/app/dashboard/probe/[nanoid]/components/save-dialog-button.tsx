'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { SaveProbForm } from './save-probe-form';
import { useState } from 'react';

export function EditProbeDialogButton({
  initialData,
  onFinishSaving
}: {
  initialData?: { name: string; description?: string; id?: string };
  onFinishSaving?: () => {};
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} variant="outline">
          Edit Monitor
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Monitor</DialogTitle>
          <DialogDescription>
            {`Make changes to your monitor here. Click save when you're done.`}
          </DialogDescription>
        </DialogHeader>
        <SaveProbForm
          formId="save-edit-probe"
          initial={initialData}
          onFinishSaving={() => {
            setOpen(false);
            if (onFinishSaving) {
              onFinishSaving();
            }
          }}
        />
        <DialogFooter>
          <Button form="save-edit-probe" type="submit">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
