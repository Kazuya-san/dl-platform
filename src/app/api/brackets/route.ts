import { NextResponse } from 'next/server';
import brackets from '@/lib/brackets.json';

export const GET = async () => {
  return NextResponse.json({
    brackets,
  });
};
