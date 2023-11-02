'use client';

import { logout } from '@/app/login/action-authenticate';
import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

const Logout = () => {
  return (
    <form id="logoutform" action={logout}>
      <LogoutButton />
    </form>
  );
};

const LogoutButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button form="logoutform" type="submit" disabled={pending} variant="ghost">
      Logout
    </Button>
  );
};

export default Logout;
