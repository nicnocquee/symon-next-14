'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AlertDestructive } from '@/components/ui/alert';
import { saveProbe } from '@/usecases/probes';

interface SaveProbeFormProps extends React.HTMLAttributes<HTMLDivElement> {
  initial?: {
    name: string;
    description?: string;
    id?: string;
  };
  formId?: string;
  onFinishSaving?: () => void;
}

export const saveProbeSchema = z.object({
  id: z.optional(z.string()),
  name: z.string().min(1),
  description: z.optional(z.string())
});

export function SaveProbForm({
  className,
  initial,
  formId,
  onFinishSaving,
  ...props
}: SaveProbeFormProps) {
  const form = useForm<z.infer<typeof saveProbeSchema>>({
    resolver: zodResolver(saveProbeSchema),
    defaultValues: initial
  });

  const { isSubmitting } = form.formState;

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form
          id={formId}
          onSubmit={form.handleSubmit(async (data) => {
            const result = await saveProbe(data);
            if (result && result.error) {
              form.setError('root', {
                type: 'custom',
                message: result.error.message
              });
            } else {
              if (onFinishSaving) {
                onFinishSaving();
              }
            }
          })}
          className="space-y-4">
          {form.formState.errors.root ? (
            <AlertDestructive
              title="Error"
              message={form.formState.errors.root?.message || 'Something wrong'}
            />
          ) : null}
          {initial?.id ? (
            <input type="hidden" name="id" value={initial.id} />
          ) : null}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input disabled={isSubmitting} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input disabled={isSubmitting} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isSubmitting} form="save-edit-probe" type="submit">
            Save
          </Button>
        </form>
      </Form>
    </div>
  );
}
