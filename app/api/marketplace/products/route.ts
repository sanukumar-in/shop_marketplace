import { NextResponse } from "next/server"
import { MOCK_PRODUCTS } from "@/lib/mock-marketplace-data"

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 600))

  return NextResponse.json({ products: MOCK_PRODUCTS })
}