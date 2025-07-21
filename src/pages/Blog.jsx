const posts = [
  {
    title: "Top 10 Resume Mistakes",
    summary: "Common pitfalls job seekers make — and how to fix them before sending your resume.",
    tags: ["Resume", "Tips"],
    date: "July 18, 2025",
  },
  {
    title: "Job Market Trends 2025",
    summary: "What employers are looking for this year and how you can stay ahead.",
    tags: ["Career", "Trends"],
    date: "July 10, 2025",
  },
  {
    title: "How to Write a Cover Letter That Gets Noticed",
    summary: "Craft personalized cover letters that make you stand out from the pile.",
    tags: ["Cover Letter", "Writing"],
    date: "June 30, 2025",
  },
  {
    title: "Remote Work Resume Tips",
    summary: "Highlight the right experience to land remote-friendly roles.",
    tags: ["Remote", "Resume"],
    date: "June 20, 2025",
  },
];

export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">📝 Career Blog</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Insightful articles to guide your professional journey — from resumes to market trends.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {posts.map((p, idx) => (
          <div
            key={idx}
            className="bg-white shadow-sm border hover:shadow-lg transition rounded-lg p-6 space-y-3"
          >
            <p className="text-sm text-gray-400">{p.date}</p>
            <h2 className="text-xl font-semibold text-gray-800">{p.title}</h2>
            <p className="text-gray-600">{p.summary}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {p.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="#"
              className="text-indigo-600 text-sm font-medium inline-block mt-2 hover:underline"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
