export interface EMIPlan {
  id: string
  monthlyAmount: number
  tenureMonths: number
  interestRate: number
  cashback: number
}

export interface ProductVariant {
  id: string
  label: string
  mrp: number
  price: number
  image: string
  emiPlans: EMIPlan[]
}

export interface Product {
  id: string
  slug: string
  name: string
  brand: string
  variants: ProductVariant[]
}