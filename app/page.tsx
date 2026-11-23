"use client";

import { useState } from "react";

const vehicles = [
  {
    id: 1,
    name: "2024 Mercedes-Benz GLE 450",
    type: "SUV",
    price: "₦185,000,000",
    year: "2024",
    mileage: "8,200 km",
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Lagos, Nigeria",
    featured: true,
    emoji: "🚙",
  },
  {
    id: 2,
    name: "2023 Toyota Land Cruiser",
    type: "SUV",
    price: "₦145,000,000",
    year: "2023",
    mileage: "15,400 km",
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Abuja, Nigeria",
    featured: true,
    emoji: "🚘",
  },
  {
    id: 3,
    name: "2022 Lexus RX 350",
    type: "SUV",
    price: "₦72,000,000",
    year: "2022",
    mileage: "24,800 km",
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Lagos, Nigeria",
    featured: false,
    emoji: "🚗",
  },
  {
    id: 4,
    name: "2021 Toyota Camry XSE",
    type: "Sedan",
    price: "₦48,500,000",
    year: "2021",
    mileage: "31,200 km",
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Port Harcourt, Nigeria",
    featured: false,
    emoji: "🚗",
  },
];

const categories = [
  { name: "SUV", icon: "🚙", count: "240+ vehicles" },
  { name: "Sedan", icon: "🚘", count: "180+ vehicles" },
  { name: "Sports Cars", icon: "🏎️", count: "75+ vehicles" },
  { name: "Pickup", icon: "🛻", count: "90+ vehicles" },
  { name: "Luxury", icon: "✨", count: "120+ vehicles" },
  { name: "Electric", icon: "⚡", count: "45+ vehicles" },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredVehicles = vehicles.filter((vehicle) =>
    `${vehicle.name} ${vehicle.type} ${vehicle.location}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#f6f7f9] text-zinc-900">
      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <div className="flex items-center gap-10">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
                🚘
              </div>

              <div>
                <h1 className="text-xl font-black tracking-tight">
                  Auto<span className="text-blue-600">Vault</span>
                </h1>

                <p className="text-[10px] font-medium uppercase tracking-widest text-zinc-400">
                  Discover • Buy • Sell
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-7 lg:flex">
              <a
                href="#inventory"
                className="text-sm font-semibold text-zinc-600 hover:text-blue-600"
              >
                Buy a Car
              </a>

              <a
                href="#categories"
                className="text-sm font-semibold text-zinc-600 hover:text-blue-600"
              >
                Discover
              </a>

              <a
                href="#inventory"
                className="text-sm font-semibold text-zinc-600 hover:text-blue-600"
              >
                Inventory
              </a>

              <a
                href="#sell"
                className="text-sm font-semibold text-zinc-600 hover:text-blue-600"
              >
                Sell Your Car
              </a>

              <a
                href="#dealers"
                className="text-sm font-semibold text-zinc-600 hover:text-blue-600"
              >
                Dealers
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-zinc-600 hover:bg-zinc-100 sm:block">
              Sign In
            </button>

            <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700">
              List a Vehicle
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-[#0b1220]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.25),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-300">
              Nigeria's vehicle marketplace
            </span>

            <h2 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl">
              Find the car that
              <span className="text-blue-500"> moves you.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Discover thousands of verified vehicles from trusted dealers and
              private sellers. Search, compare and find your next car.
            </p>
          </div>

          {/* SEARCH BOX */}

          <div className="mt-10 max-w-5xl rounded-2xl bg-white p-3 shadow-2xl">
            <div className="grid gap-3 md:grid-cols-[1fr_auto_auto]">
              <div className="flex items-center rounded-xl bg-zinc-100 px-4">
                <span className="mr-3 text-xl">🔎</span>

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search make, model, location..."
                  className="h-14 w-full bg-transparent text-sm font-medium outline-none"
                />
              </div>

              <select className="h-14 rounded-xl bg-zinc-100 px-5 text-sm font-semibold outline-none">
                <option>All Vehicle Types</option>
                <option>SUV</option>
                <option>Sedan</option>
                <option>Sports Car</option>
                <option>Pickup</option>
                <option>Electric</option>
              </select>

              <button className="h-14 rounded-xl bg-blue-600 px-8 font-bold text-white hover:bg-blue-700">
                Search Vehicles
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-400">
            <span>✓ Verified listings</span>
            <span>✓ Dealer & private sellers</span>
            <span>✓ Nationwide inventory</span>
            <span>✓ Secure transactions</span>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-zinc-200 lg:grid-cols-4">
          <div className="px-6 py-7 text-center">
            <p className="text-3xl font-black">5,000+</p>
            <p className="mt-1 text-sm text-zinc-500">Vehicles listed</p>
          </div>

          <div className="px-6 py-7 text-center">
            <p className="text-3xl font-black">850+</p>
            <p className="mt-1 text-sm text-zinc-500">Verified dealers</p>
          </div>

          <div className="px-6 py-7 text-center">
            <p className="text-3xl font-black">36</p>
            <p className="mt-1 text-sm text-zinc-500">States covered</p>
          </div>

          <div className="px-6 py-7 text-center">
            <p className="text-3xl font-black">12k+</p>
            <p className="mt-1 text-sm text-zinc-500">Happy customers</p>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}

      <section id="categories" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Explore vehicles
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
              Browse by category
            </h2>

            <p className="mt-3 max-w-xl text-zinc-500">
              Find the perfect vehicle based on your lifestyle, needs and
              budget.
            </p>
          </div>

          <button className="font-bold text-blue-600 hover:text-blue-700">
            View all categories →
          </button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <button
              key={category.name}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 text-left transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-100 text-3xl transition group-hover:bg-blue-50">
                {category.icon}
              </div>

              <h3 className="mt-5 font-bold">{category.name}</h3>

              <p className="mt-1 text-xs text-zinc-500">
                {category.count}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* ================= FEATURED INVENTORY ================= */}

      <section id="inventory" className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Featured inventory
              </p>

              <h2 className="mt-2 text-3xl font-black md:text-4xl">
                Vehicles you&apos;ll love
              </h2>

              <p className="mt-3 text-zinc-500">
                Explore some of the latest vehicles available on AutoVault.
              </p>
            </div>

            <button className="font-bold text-blue-600">
              Browse full inventory →
            </button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                {/* VEHICLE IMAGE PLACEHOLDER */}

                <div className="relative flex h-52 items-center justify-center overflow-hidden bg-zinc-100">
                  <div className="text-8xl transition duration-500 group-hover:scale-110">
                    {vehicle.emoji}
                  </div>

                  {vehicle.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white">
                      Featured
                    </span>
                  )}

                  <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg shadow-sm">
                    ♡
                  </button>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-md bg-zinc-100 px-2 py-1 text-[10px] font-bold uppercase text-zinc-500">
                      {vehicle.type}
                    </span>

                    <span className="text-xs text-zinc-400">
                      {vehicle.location}
                    </span>
                  </div>

                  <h3 className="mt-4 line-clamp-2 min-h-[48px] font-bold">
                    {vehicle.name}
                  </h3>

                  <p className="mt-2 text-xl font-black text-blue-600">
                    {vehicle.price}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-y-2 border-t border-zinc-100 pt-4 text-xs text-zinc-500">
                    <span>📅 {vehicle.year}</span>
                    <span>🛣️ {vehicle.mileage}</span>
                    <span>⛽ {vehicle.fuel}</span>
                    <span>⚙️ {vehicle.transmission}</span>
                  </div>

                  <button className="mt-5 w-full rounded-lg bg-zinc-900 py-3 text-sm font-bold text-white hover:bg-blue-600">
                    View Vehicle
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredVehicles.length === 0 && (
            <div className="mt-10 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 py-16 text-center">
              <div className="text-5xl">🔎</div>

              <h3 className="mt-4 text-lg font-bold">
                No vehicles found
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Try searching for another make, model or location.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ================= SELL YOUR CAR ================= */}

      <section id="sell" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl bg-blue-600 lg:grid-cols-2">
          <div className="p-8 text-white md:p-14">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
              Sell your vehicle
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Turn your car into cash.
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-blue-100">
              List your vehicle in front of thousands of potential buyers.
              Create your listing, set your price and connect with interested
              buyers.
            </p>

            <button className="mt-8 rounded-lg bg-white px-7 py-3.5 font-bold text-blue-600 hover:bg-blue-50">
              List My Vehicle →
            </button>
          </div>

          <div className="flex min-h-[320px] items-center justify-center bg-blue-700 text-9xl">
            🚘
          </div>
        </div>
      </section>

      {/* ================= DISCOVERY ================= */}

      <section className="bg-[#0b1220] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
              Automotive discovery
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              More than a marketplace.
            </h2>

            <p className="mt-4 leading-7 text-zinc-400">
              Discover cars, compare models, explore automotive trends and
              make smarter decisions before you buy.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="text-4xl">🔍</div>

              <h3 className="mt-5 text-xl font-bold">
                Vehicle Discovery
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Search thousands of cars using make, model, price, location,
                fuel type and more.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="text-4xl">⚖️</div>

              <h3 className="mt-5 text-xl font-bold">
                Compare Vehicles
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Compare prices, mileage, specifications and features before
                making your decision.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="text-4xl">📊</div>

              <h3 className="mt-5 text-xl font-bold">
                Market Intelligence
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Track vehicle prices and discover what&apos;s trending in the
                automotive market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DEALERS ================= */}

      <section id="dealers" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                For dealerships
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Manage your inventory in one place.
              </h2>

              <p className="mt-4 leading-7 text-zinc-500">
                Give your dealership a powerful digital storefront. Add
                vehicles, manage inventory, track leads and connect with
                buyers.
              </p>

              <button className="mt-7 rounded-lg bg-zinc-900 px-6 py-3 font-bold text-white hover:bg-blue-600">
                Become a Dealer
              </button>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-6">
              <div className="rounded-xl bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase text-zinc-400">
                      Inventory dashboard
                    </p>

                    <p className="mt-1 text-2xl font-black">
                      248 Vehicles
                    </p>
                  </div>

                  <div className="rounded-lg bg-green-100 px-3 py-2 text-xs font-bold text-green-700">
                    ● Active
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-zinc-100 p-3">
                    <p className="text-xs text-zinc-500">Available</p>
                    <p className="mt-1 font-black">182</p>
                  </div>

                  <div className="rounded-lg bg-zinc-100 p-3">
                    <p className="text-xs text-zinc-500">Reserved</p>
                    <p className="mt-1 font-black">34</p>
                  </div>

                  <div className="rounded-lg bg-zinc-100 p-3">
                    <p className="text-xs text-zinc-500">Sold</p>
                    <p className="mt-1 font-black">32</p>
                  </div>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-zinc-200">
                  <div className="h-full w-[75%] rounded-full bg-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center">
          <div className="text-5xl">🚗</div>

          <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
            Your next car is waiting.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-zinc-500">
            Start exploring our growing inventory and find a vehicle that
            matches your lifestyle and budget.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button className="rounded-lg bg-blue-600 px-8 py-3.5 font-bold text-white hover:bg-blue-700">
              Explore Inventory
            </button>

            <button className="rounded-lg border border-zinc-300 px-8 py-3.5 font-bold hover:bg-zinc-100">
              Sell Your Car
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 lg:px-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
                🚘
              </div>

              <span className="text-xl font-black">
                Auto<span className="text-blue-500">Vault</span>
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              A modern automotive marketplace for discovering, buying,
              selling and managing vehicles.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Marketplace</h3>

            <div className="mt-4 space-y-3 text-sm text-zinc-500">
              <p>Browse Cars</p>
              <p>Featured Vehicles</p>
              <p>Compare Cars</p>
              <p>Sell Your Car</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Dealers</h3>

            <div className="mt-4 space-y-3 text-sm text-zinc-500">
              <p>Dealer Registration</p>
              <p>Inventory Management</p>
              <p>Dealer Dashboard</p>
              <p>Dealer Support</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Contact</h3>

            <div className="mt-4 space-y-3 text-sm text-zinc-500">
              <p>📞 +234 800 000 0000</p>
              <p>✉️ hello@autovault.com</p>
              <p>📍 Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 px-5 py-6 text-center text-xs text-zinc-600">
          © 2026 AutoVault. All rights reserved.
        </div>
      </footer>
    </div>
  );
}