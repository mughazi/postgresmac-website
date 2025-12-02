import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-8 px-6 mt-auto">
      <div className="max-w-3xl mx-auto border-t border-gray-200 dark:border-gray-800 pt-8">
        <div className="flex flex-col items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; 2025 PostgresMac</p>
          <Link
            href="/privacy"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors underline underline-offset-4"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
