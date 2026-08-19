import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14">
          {/* --- MAIN FOOTER CONTENT GRID --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {/* Brand & Platform Description */}
            <div className="space-y-4 text-center sm:text-left">
              <Link
                href="/"
                className="text-2xl font-black tracking-tight text-indigo-600 dark:text-indigo-400"
              >
                IdeaVault
                <span className="text-gray-900 dark:text-white">.</span>
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm mx-auto sm:mx-0">
                A secure community platform built for entrepreneurs and
                developers to share, validate, and scale innovative startup
                concepts together.
              </p>
            </div>

            {/* Platform Links (Ideas, Discover) */}
            <div className="space-y-3 text-center sm:text-left">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">
                Platform Links
              </h4>
              <ul className="space-y-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                <li>
                  <Link
                    href="/ideas"
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Explore All Ideas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/add-idea"
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Submit an Idea
                  </Link>
                </li>
                <li>
                  <Link
                    href="/my-ideas"
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    My Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories Section */}
            <div className="space-y-3 text-center sm:text-left">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">
                Categories
              </h4>
              <ul className="space-y-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                <li>
                  <Link
                    href="/ideas?category=Tech"
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Artificial Intelligence
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ideas?category=Health"
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Health & Medical
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ideas?category=Education"
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    EdTech Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info Section */}
            <div className="space-y-3 text-center sm:text-left">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">
                Contact Info
              </h4>
              <ul className="space-y-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 flex flex-col items-center sm:items-start">
                <li className="flex items-center gap-2.5">
                  <span className="text-base">📍</span> Dhaka, Bangladesh
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-base">✉️</span>{" "}
                  mdasadofficial1@gamil.com
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-base">📞</span> +880 1787-987687
                </li>
              </ul>
            </div>
          </div>

          {/* --- BOTTOM BAR: COPYRIGHT & SOCIAL LINKS --- */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            {/* Copyright Text */}
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium order-2 sm:order-1">
              © {new Date().getFullYear()} IdeaVault Platform. All rights
              reserved. By <span className="font-bold text-gray-700 dark:text-gray-200">Asad Bhai</span> . Designed & Developed with ❤️ in Bangladesh.
            </p>

            {/* Social Links (Premium SVG Icons including new X logo) */}
            <div className="flex items-center gap-5 order-1 sm:order-2">
              {/* New X (Twitter) Logo */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* GitHub Logo */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.48V18.06c-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.061.069-.061 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.024A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.024 2.747-1.024.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>

              {/* LinkedIn Logo */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
