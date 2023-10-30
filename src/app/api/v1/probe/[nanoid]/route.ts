import { getProbe } from '@/usecases/probes';
import { NextResponse } from 'next/server';

export async function GET(_request: Request, context: { params: any }) {
  const nanoid = context?.params?.nanoid;

  if (!nanoid) {
    return NextResponse.json({ result: {} });
  }

  const probe = await getProbe(nanoid);

  return NextResponse.json({ result: probe });
}
