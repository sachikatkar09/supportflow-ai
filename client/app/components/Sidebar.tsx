import Link from "next/link";

const navigationItems = [
  { name: "Dashboard", icon: "▦" },
  { name: "Tickets", icon: "🎫" },
  { name: "Customers", icon: "♙" },
  { name: "Team", icon: "♧" },
  { name: "Analytics", icon: "▥" },
  { name: "AI Assistant", icon: "✧" },
];

export default function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-gray-200 bg-white p-5">
      <div className="mb-10">
        <h1 className="text-xl font-bold text-blue-600">SupportFlow AI</h1>
        <p className="mt-1 text-xs text-gray-500">Customer Support Platform</p>
      </div>

      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
        Workspace
      </p>

      <nav className="flex flex-col gap-2">
        {navigationItems.map((item, index) => (
          <Link
            key={item.name}
            href={
              item.name === "Dashboard"
                ? "/"
                : `/${item.name.toLowerCase().replace(" ", "-")}`
            }
            className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium ${
              index === 0
                ? "bg-blue-50 text-blue-700"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto border-t border-gray-200 pt-5">
        <p className="text-sm font-semibold text-gray-800">
          SupportFlow Workspace
        </p>
        <p className="mt-1 text-xs text-gray-500">Free plan</p>
      </div>
    </aside>
  );
}
