import Sidebar from "../components/Sidebar";

const suggestions = [
  "How can I help a customer with a payment issue?",
  "Write a professional response for a delayed order.",
  "Summarize a customer support conversation.",
];

export default function AIAssistantPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="min-w-0 flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">AI Assistant</h1>
          <p className="mt-2 text-sm text-slate-500">
            Get AI-powered suggestions to resolve customer queries faster.
          </p>
        </div>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl">
                ✨
              </div>
              <div>
                <h2 className="font-semibold text-slate-900">SupportFlow AI</h2>
                <p className="text-xs text-green-600">AI Support Assistant</p>
              </div>
            </div>
          </div>

          <div className="min-h-96 bg-slate-50 p-6">
            <div className="max-w-xl rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">Hello! 👋</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                I&apos;m your AI support assistant. I can help you draft
                customer replies, understand support issues, and summarize
                conversations.
              </p>
              <p className="mt-3 text-xs text-slate-400">
                How can I help you today?
              </p>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-slate-700">
                Try asking
              </p>

              <div className="flex flex-col gap-3">
                {suggestions.map((suggestion) => (
                  <div
                    key={suggestion}
                    className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-600 transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white p-5">
            <div className="flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3">
              <input
                type="text"
                placeholder="Ask your AI assistant..."
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
              <button
                disabled
                className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white opacity-60"
              >
                Send
              </button>
            </div>
            <p className="mt-3 text-center text-xs text-slate-400">
              AI responses will be enabled when we connect the backend.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
