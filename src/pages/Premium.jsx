import { Button } from "../components/ui/button"

const plans = [
  {
    title: "Monthly Plan",
    price: "₹299",
    duration: "1 Month",
    benefits: [
      "Access all templates",
      "AI resume suggestions",
      "Unlimited resume downloads",
    ],
  },
  {
    title: "Quarterly Plan",
    price: "₹699",
    duration: "3 Months",
    benefits: [
      "All monthly features",
      "Free cover letter builder",
      "Priority support",
    ],
  },
  {
    title: "Annual Plan",
    price: "₹1299",
    duration: "12 Months",
    benefits: [
      "All quarterly features",
      "Real-time collaboration",
      "AI career analyzer",
    ],
  },
]

export default function Premium() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Go Premium</h1>
      <p className="text-center text-gray-600 mb-12">
        Unlock exclusive features to supercharge your resume!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="border rounded-lg shadow-sm p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2">{plan.title}</h2>
            <p className="text-2xl font-bold text-blue-600 mb-1">{plan.price}</p>
            <p className="text-sm text-gray-500 mb-4">{plan.duration}</p>
            <ul className="text-sm text-gray-700 space-y-2 mb-4">
              {plan.benefits.map((benefit, idx) => (
                <li key={idx}>• {benefit}</li>
              ))}
            </ul>
            <Button className="w-full">Upgrade</Button>
          </div>
        ))}
      </div>
    </div>
  )
}
