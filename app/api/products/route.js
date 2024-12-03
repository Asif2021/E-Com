import { ProductData } from '../../../components/ProductData';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(ProductData);
}

