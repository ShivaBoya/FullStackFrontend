export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto p-8 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p>
        At ResumeBuilder Pro, we take your privacy seriously. This policy outlines what personal data we collect, how we use it, and your rights regarding your data.
      </p>
      <h2 className="text-xl font-semibold">Information We Collect</h2>
      <ul className="list-disc ml-6">
        <li>Account details like email and name</li>
        <li>Resume data you input manually</li>
        <li>Usage data like device type, location, browser, etc.</li>
      </ul>
      <h2 className="text-xl font-semibold">How We Use Data</h2>
      <p>
        We use your data to provide and improve our resume building services. This includes saving drafts, generating templates, personalizing your dashboard, and ensuring system security.
      </p>
      <h2 className="text-xl font-semibold">Data Protection</h2>
      <p>
        All data is encrypted in transit (HTTPS) and at rest. We never sell your data to third parties.
      </p>
      <h2 className="text-xl font-semibold">Your Rights</h2>
      <ul className="list-disc ml-6">
        <li>Access or update your data</li>
        <li>Request deletion of your data</li>
        <li>Opt-out of marketing communication</li>
      </ul>
      <p className="mt-4">Contact us at <a href="mailto:support@resumebuilderpro.com" className="text-blue-600 underline">support@resumebuilderpro.com</a> for privacy-related concerns.</p>
    </div>
  );
}
