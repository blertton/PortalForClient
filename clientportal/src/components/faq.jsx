import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Will this replace my project management software?",
      answer:
        "No, Client Portal is designed to complement your existing project management software by providing a clean, professional interface for client deliverables and communication. You can continue using your preferred project management tools internally.",
    },
    {
      question:
        "This sounds so good, but my site is not built on WordPress. Can I still use this?",
      answer:
        "Yes! Client Portal is a standalone solution that works independently of your website platform. Whether you use WordPress, Wix, Squarespace, or any other platform, you can easily integrate Client Portal into your workflow.",
    },
    {
      question: "What if I don't like it? What's your refund policy?",
      answer:
        "We offer a hassle-free refund policy. If you're not satisfied with Client Portal within 30 days of purchase, we'll provide a full refund - no questions asked.",
    },
    {
      question: "Do I have to know how to code to use this?",
      answer:
        "Not at all! Client Portal is designed to be user-friendly with no coding knowledge required. Our intuitive interface allows you to set up and manage your client portal with simple point-and-click actions.",
    },
  ];

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="w-full flex justify-between items-center py-4 text-left"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span className="ml-6 flex-shrink-0">
                {openIndex === index ? (
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="pb-4 pr-12">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
