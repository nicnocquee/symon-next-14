import { logout } from '@/app/login/action-authenticate';

export async function GET(_request: Request) {
  console.log(`logging out`);
  await logout();
}
