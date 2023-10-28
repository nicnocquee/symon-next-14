import { logout } from '@/app/login/action-authenticate';

export async function GET(request: Request) {
  console.log(`logging out`);
  await logout();
}
