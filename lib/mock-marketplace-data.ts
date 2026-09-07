import { Product } from "@/types/marketplace"

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "iphone-17-pro",
    name: "iPhone 17 Pro",
    brand: "Apple",
    variants: [
      {
        id: "v1",
        label: "256GB - Orange",
        mrp: 134900,
        price: 127400,
        image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=200&h=200&fit=crop",
        emiPlans: [
          { id: "e1", monthlyAmount: 44967, tenureMonths: 3, interestRate: 0, cashback: 7500 },
          { id: "e2", monthlyAmount: 22483, tenureMonths: 6, interestRate: 0, cashback: 7500 },
          { id: "e3", monthlyAmount: 11242, tenureMonths: 12, interestRate: 0, cashback: 7500 },
          { id: "e4", monthlyAmount: 5621, tenureMonths: 24, interestRate: 0, cashback: 7500 },
          { id: "e5", monthlyAmount: 4297, tenureMonths: 36, interestRate: 10.5, cashback: 7500 },
        ],
      },
      {
        id: "v2",
        label: "256GB - Blue",
        mrp: 134900,
        price: 127400,
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=200&h=200&fit=crop",
        emiPlans: [
          { id: "e6", monthlyAmount: 44967, tenureMonths: 3, interestRate: 0, cashback: 7500 },
          { id: "e7", monthlyAmount: 22483, tenureMonths: 6, interestRate: 0, cashback: 7500 },
        ],
      },
    ],
  },
  {
    id: "2",
    slug: "samsung-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    variants: [
      {
        id: "v3",
        label: "256GB - Titanium Black",
        mrp: 129999,
        price: 119999,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=200&h=200&fit=crop",
        emiPlans: [
          { id: "e8", monthlyAmount: 39999, tenureMonths: 3, interestRate: 0, cashback: 5000 },
          { id: "e9", monthlyAmount: 19999, tenureMonths: 6, interestRate: 0, cashback: 5000 },
          { id: "e10", monthlyAmount: 10999, tenureMonths: 12, interestRate: 5, cashback: 5000 },
        ],
      },
    ],
  },
  {
    id: "3",
    slug: "macbook-air-m3",
    name: "MacBook Air M3",
    brand: "Apple",
    variants: [
      {
        id: "v4",
        label: "13-inch, 256GB - Midnight",
        mrp: 114900,
        price: 109900,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&h=200&fit=crop",
        emiPlans: [
          { id: "e11", monthlyAmount: 36633, tenureMonths: 3, interestRate: 0, cashback: 3000 },
          { id: "e12", monthlyAmount: 18317, tenureMonths: 6, interestRate: 0, cashback: 3000 },
        ],
      },
    ],
  },
]