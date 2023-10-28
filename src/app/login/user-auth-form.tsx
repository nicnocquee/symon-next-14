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
import { authenticate } from './action-authenticate';
import { AlertDestructive } from '@/components/ui/alert';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: 'Password is required' })
});

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  initialEmail?: string;
}

export function UserAuthForm({
  className,
  initialEmail,
  ...props
}: UserAuthFormProps) {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: initialEmail ?? '',
      password: ''
    }
  });

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(async (data) => {
            const result = await authenticate(data);
            if (result && result.error) {
              form.setError('root', {
                type: 'custom',
                message: result.error.message
              });
            }
          })}
          className="space-y-4">
          {form.formState.errors.root ? (
            <AlertDestructive
              title="Error"
              message={form.formState.errors.root?.message || 'Something wrong'}
            />
          ) : null}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail address</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Login</Button>
        </form>
      </Form>
    </div>
  );
}
