export default function Pricing() {
  const plans = [
    { name: "Free", price: "₹0", perks: ["3 templates", "PDF downloads", "Basic AI tips"] },
    { name: "Pro", price: "₹499/month", perks: ["Unlimited templates", "AI suggestions", "Priority support"] },
    { name: "Business", price: "₹1199/month", perks: ["Team collaboration", "Analytics", "Custom templates"] },
  ];

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-4">Pricing Plans</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div key={p.name} className="border rounded p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">{p.name}</h2>
            <p className="text-3xl font-bold mb-4">{p.price}</p>
            <ul className="mb-6 space-y-1">
              {p.perks.map((perk) => <li key={perk}>• {perk}</li>)}
            </ul>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Select</button>
          </div>
        ))}
      </div>
    </div>
  );
}
