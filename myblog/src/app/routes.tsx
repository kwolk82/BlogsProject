import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <nav className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-4">
          <Link to="/" className="font-bold">myblog</Link>
          <Link to="/blog" className="text-sm text-gray-600">Blog</Link>
        </nav>
      </header>
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t text-xs text-gray-500 py-6 text-center">
        © {new Date().getFullYear()} myblog
      </footer>
    </div>
  );
}
