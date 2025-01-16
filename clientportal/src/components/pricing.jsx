import React from "react";

const Pricing = () => {
  const checkIcon = (
    <svg
      className="w-5 h-5 text-green-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  return (
    <section className="py-20 px-4 bg-[#BBE6FF] bg-opacity-30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Super Simple Pricing</h2>
          <p className="text-gray-600">
            Pricing shouldn't be complicated. Straightforward plans, no hidden
            fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8">
            <div className="absolute -top-3 left-8 bg-[#2D2F45] text-white text-sm px-4 py-1 rounded-full">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-semibold mb-6">Single site license</h3>
            <div className="mb-6">
              <span className="text-3xl font-bold">$</span>
              <span className="text-6xl font-bold">199</span>
            </div>
            <p className="mb-6 text-gray-600">
              As many portals as you like on{" "}
              <span className="font-semibold">one</span> website.
            </p>
            <button className="w-full bg-[#E31B54] text-white py-3 rounded-full font-medium hover:bg-opacity-90 mb-6">
              Buy It Now →
            </button>
            <p className="text-sm text-center text-gray-600 mb-8">
              You're covered by our 30-day money back guarantee.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                {checkIcon}
                <span>Use on 1 site</span>
              </div>
              <div className="flex items-center gap-3">
                {checkIcon}
                <span>Unlimited portals</span>
              </div>
              <div className="flex items-center gap-3">
                {checkIcon}
                <span>Unlimited clients</span>
              </div>
              <div className="flex items-center gap-3">
                {checkIcon}
                <span>Annual renewal</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">Multi site license</h3>
            <div className="mb-6">
              <span className="text-3xl font-bold">$</span>
              <span className="text-6xl font-bold">399</span>
            </div>
            <p className="mb-6 text-gray-600">
              As many portals as you like on{" "}
              <span className="font-semibold">unlimited</span> websites.
            </p>
            <button className="w-full bg-[#E31B54] text-white py-3 rounded-full font-medium hover:bg-opacity-90 mb-6">
              Buy It Now →
            </button>
            <p className="text-sm text-center text-gray-600 mb-8">
              You're covered by our 30-day money back guarantee.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                {checkIcon}
                <span>Use on unlimited sites</span>
              </div>
              <div className="flex items-center gap-3">
                {checkIcon}
                <span>Unlimited portals</span>
              </div>
              <div className="flex items-center gap-3">
                {checkIcon}
                <span>Unlimited clients</span>
              </div>
              <div className="flex items-center gap-3">
                {checkIcon}
                <span>Annual renewal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
