"use client"

import { useState } from "react"
import Image from "next/image"
import { Product } from "@/types/marketplace"

function formatRupees(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount)
}

export default function ProductCard({ product }: { product: Product }) {
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0].id)
  const [selectedEmiId, setSelectedEmiId] = useState<string | null>(null)
  const [imgError, setImgError] = useState(false)

  const selectedVariant =
    product.variants.find((v) => v.id === selectedVariantId) ?? product.variants[0]

  const selectedEmi = selectedVariant.emiPlans.find((e) => e.id === selectedEmiId)

  return (
    <div className="rounded-[18px] border border-zinc-200 bg-white p-3.5 shadow-[0_2px_6px_rgba(20,14,50,0.04)]">
      {/* Image + name + price */}
      <div className="flex gap-3">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-zinc-100 flex items-center justify-center">
          {!imgError ? (
            <Image
              src={selectedVariant.image}
              alt={product.name}
              width={64}
              height={64}
              className="h-full w-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-[10px] text-gray-400">No image</span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm text-gray-500">{product.brand}</p>
          <p className="font-semibold text-gray-900 truncate">{product.name}</p>
          <div className="mt-0.5 flex items-baseline gap-1.5">
            <span className="font-bold text-gray-900">{formatRupees(selectedVariant.price)}</span>
            {selectedVariant.mrp > selectedVariant.price && (
              <span className="text-xs text-gray-400 line-through">
                {formatRupees(selectedVariant.mrp)}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Variant selector */}
      {product.variants.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {product.variants.map((variant) => (
            <button
              key={variant.id}
              type="button"
              onClick={() => {
                setSelectedVariantId(variant.id)
                setSelectedEmiId(null) // reset EMI choice — old plan may not exist on new variant
                setImgError(false)
              }}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                variant.id === selectedVariantId
                  ? "border-[#712CDC] bg-[#f5f0ff] text-[#712CDC]"
                  : "border-zinc-200 text-gray-600"
              }`}
            >
              {variant.label}
            </button>
          ))}
        </div>
      )}

      {/* EMI plan selector */}
      <div className="mt-3 flex flex-col gap-2">
        <p className="text-xs font-semibold text-gray-700">Choose an EMI plan</p>
        {selectedVariant.emiPlans.map((plan) => (
          <button
            key={plan.id}
            type="button"
            onClick={() => setSelectedEmiId(plan.id)}
            className={`flex items-center justify-between rounded-xl border px-3 py-2.5 text-left transition-all ${
              plan.id === selectedEmiId
                ? "border-[#712CDC] bg-[#f5f0ff]"
                : "border-zinc-200 bg-white"
            }`}
          >
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {formatRupees(plan.monthlyAmount)}/mo
              </p>
              <p className="text-xs text-gray-500">
                {plan.tenureMonths} months · {plan.interestRate === 0 ? "No-cost EMI" : `${plan.interestRate}% interest`}
              </p>
            </div>
            {plan.cashback > 0 && (
              <span className="text-xs font-medium text-green-600">
                ₹{plan.cashback} cashback
              </span>
            )}
          </button>
        ))}
      </div>

      {/* CTA */}
      <button
        type="button"
        disabled={!selectedEmi}
        className={`mt-3.5 w-full rounded-full py-3 text-sm font-semibold transition-all ${
          selectedEmi
            ? "bg-[#712CDC] text-white hover:bg-[#5b24b5]"
            : "cursor-not-allowed bg-zinc-100 text-gray-400"
        }`}
      >
        {selectedEmi ? "Proceed with this plan" : "Select an EMI plan to continue"}
      </button>
    </div>
  )
}