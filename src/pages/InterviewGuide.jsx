import { Search, MessageSquare, ClipboardList, Send } from "lucide-react";

export default function InterviewGuide() {
  const steps = [
    {
      icon: <Search className="w-5 h-5 text-blue-600" />,
      title: "1. Research the Company & Role",
      details: [
        "Understand the company's mission, recent news, and key products.",
        "Study the job description and match it with your strengths.",
        "Check LinkedIn for your interviewer or team insights.",
      ],
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-purple-600" />,
      title: "2. Practice Your Answers",
      details: [
        "Use the STAR method (Situation, Task, Action, Result) for behavioral questions.",
        "Practice aloud — record or mirror your responses.",
        "Be ready to explain resume gaps or career changes confidently.",
      ],
    },
    {
      icon: <ClipboardList className="w-5 h-5 text-green-600" />,
      title: "3. Ask Thoughtful Questions",
      details: [
        "Prepare 2–3 questions about the team, role, or growth path.",
        "Avoid asking about salary in early rounds unless prompted.",
        "Show curiosity — ask about recent challenges or goals.",
      ],
    },
    {
      icon: <Send className="w-5 h-5 text-yellow-600" />,
      title: "4. Follow Up Professionally",
      details: [
        "Send a thank-you email within 24 hours.",
        "Mention a specific part of the conversation you enjoyed.",
        "Reaffirm your interest and fit for the role.",
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">🎯 Interview Guide</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Prepare confidently for interviews with our step-by-step guide — from pre-interview research to post-interview etiquette.
      </p>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
            <div className="flex items-center mb-3">
              {step.icon}
              <h2 className="ml-3 text-xl font-semibold text-gray-800">{step.title}</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 pl-1">
              {step.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
