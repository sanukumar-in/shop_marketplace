"use client"

import Image from "next/image"
import { useState } from "react"
import TopBrandsPanel from "./TopBrandPanel"
import NearbyStoresPanel from "./NearbyStoresPanel"
import MarketplacePanel from "./marketplace/MarketPlacePanel"

type Tab = "topBrands" | "nearbyStores" | "marketplace"

const TABS: { id: Tab; label: string }[] = [
  { id: "topBrands", label: "Top Brands" },
  { id: "nearbyStores", label: "Nearby Stores" },
  { id: "marketplace", label: "Marketplace" },
]

export default function ShopContent() {
  const [activeTab, setActiveTab] = useState<Tab>("marketplace")

  return (
    <div className="mx-auto w-full max-w-[500px] px-4 py-4 pb-24">
    <div className="-mx-4 -mt-4 overflow-hidden">
        <Image
        src="https://cdn.1fi.in/banners/shop-page%201536x1024.webp"
        alt="Shop today, Pay later using Mutual funds"
        width={800}
        height={400}
        className="w-full object-cover"
        priority
        />
    </div>
            <div className="relative z-[2] -mt-7 px-1">
        <div className="flex gap-2 rounded-full border border-[#ece5ff] bg-[#f5f0ff] p-1.5 shadow-[0_1px_3px_rgba(113,44,220,0.06)]" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex-1 rounded-full py-[11px] text-center text-sm font-semibold tracking-[-0.005em] transition-all ${
                activeTab === tab.id
                  ? "bg-white text-[#712CDC] shadow-[0_1px_3px_rgba(20,14,50,0.10),0_0_0_1px_rgba(113,44,220,0.08)]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3.5">
        {activeTab === "topBrands" && <TopBrandsPanel />}
        {activeTab === "nearbyStores" && <NearbyStoresPanel />}
        {activeTab === "marketplace" && <MarketplacePanel />}
      </div>
    </div>
  )
}