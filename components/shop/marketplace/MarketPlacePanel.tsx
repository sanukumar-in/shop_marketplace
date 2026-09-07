"use client"

import { useEffect, useState } from "react"
import { Product } from "@/types/marketplace"
import ProductCard from "./ProductCard"

export default function MarketplacePanel() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true)
        setError(null)

        const res = await fetch("/api/marketplace/products")

        if (!res.ok) {
          throw new Error("Failed to load products")
        }

        const data = await res.json()
        setProducts(data.products)
      } catch (err) {
        setError("Something went wrong while loading the marketplace. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (isLoading) {
    return (
      <div className="flex flex-col gap-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex animate-pulse gap-3 rounded-[18px] border border-zinc-200 bg-white p-3.5"
          >
            <div className="h-16 w-16 shrink-0 rounded-xl bg-zinc-100" />
            <div className="min-w-0 flex-1 py-0.5">
              <div className="h-[16px] w-3/4 rounded bg-zinc-200" />
              <div className="mt-1.5 h-3 w-1/2 rounded bg-zinc-100" />
              <div className="mt-1.5 h-3 w-2/3 rounded bg-zinc-100" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center rounded-[20px] border border-zinc-200 bg-white px-6 py-9 text-center shadow-[0_2px_6px_rgba(20,14,50,0.04)]">
        <h3 className="text-lg font-bold tracking-[-0.015em] text-gray-900">
          Couldn&apos;t load Marketplace
        </h3>
        <p className="mt-1.5 max-w-[30ch] text-[13.5px] leading-[1.45] text-gray-500">
          {error}
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
        {products.map((product) => (
        <ProductCard key={product.id} product={product} />
        ))}
    </div>
    )
}