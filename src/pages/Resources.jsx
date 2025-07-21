export default function Resources() {
  const resources = [
    { title: "Resume Writing Guide", link: "/resume-tips" },
    { title: "Career Advice Blog", link: "/career-advice" },
    { title: "Interview Prep", link: "/interview-guide" },
    { title: "Template Examples", link: "/examples" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Resources</h1>
      <ul className="space-y-3">
        {resources.map(r => (
          <li key={r.title}>
            <Link to={r.link} className="text-blue-600 hover:underline">{r.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
