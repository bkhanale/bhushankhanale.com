import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-600">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center max-w-5xl">
          <a
            href="/"
            className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            Bhushan Khanale
          </a>
          <div className="flex items-center gap-6">
            <a
              href="https://blog.bhushankhanale.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Blog
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-5xl">{children}</div>
      </main>

      <footer className="py-8 text-center text-sm text-gray-500 border-t border-gray-100">
        <p>© {new Date().getFullYear()} Bhushan Khanale. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
