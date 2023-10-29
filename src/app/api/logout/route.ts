import { logout } from '@/app/login/action-authenticate';
import { revalidatePath } from 'next/cache';

export async function GET(_request: Request) {
  revalidatePath(`/dashboard`);
  await logout();
}
