import { Sparkles, Eye, Brain, Linkedin, Users, FileDown, ShieldCheck, Clock, Palette } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-600" />,
      title: "Professional Templates",
      desc: "ATS‑friendly templates designed by industry experts to suit any profession.",
    },
    {
      icon: <Eye className="w-6 h-6 text-teal-600" />,
      title: "Real‑Time Preview",
      desc: "Instantly see how your resume looks as you type. No waiting, no surprises.",
    },
    {
      icon: <Brain className="w-6 h-6 text-yellow-600" />,
      title: "AI Suggestions",
      desc: "Get smart keyword recommendations and phrasing tips to improve visibility.",
    },
    {
      icon: <Linkedin className="w-6 h-6 text-blue-600" />,
      title: "LinkedIn Import",
      desc: "Auto-fill your resume using your LinkedIn profile in a single click.",
    },
    {
      icon: <Users className="w-6 h-6 text-pink-600" />,
      title: "Collaboration",
      desc: "Invite mentors or peers to edit or leave suggestions in real-time.",
    },
    {
      icon: <FileDown className="w-6 h-6 text-green-600" />,
      title: "Download in Multiple Formats",
      desc: "Export your resume as PDF, DOCX, or plain TXT — ready for any use.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Secure Cloud Storage",
      desc: "Your resume is autosaved and securely stored for access anytime.",
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      title: "Version History",
      desc: "Access previous versions and restore with one click.",
    },
    {
      icon: <Palette className="w-6 h-6 text-purple-600" />,
      title: "Customization Options",
      desc: "Fine-tune fonts, colors, margins, and layout to match your style.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">🚀 Powerful Features</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              {f.icon}
              <h2 className="text-xl font-semibold text-gray-800 ml-3">{f.title}</h2>
            </div>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
