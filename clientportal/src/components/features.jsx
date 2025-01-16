import React from "react";

const Features = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-[#E31B54]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      ),
      title: "Custom branding",
      description:
        "Brand your portals to match either your or your clients' websites. Change colours and fonts easily.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-[#E31B54]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      title: "Flexible modules",
      description:
        "Each module can either link to a URL, open a content page, host files, or allow clients to upload files.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-[#E31B54]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      title: "Public and private portals",
      description:
        "By default all portals are private. But if you want some that can be accessed by anyone, easily create a public portal.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-[#E31B54]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
      title: "Completely whitelabel",
      description:
        "Easily remove Client Portal branding and replace with your own. Nobody will know you didn't build this yourself.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-[#E31B54] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90">
            See pricing options
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
