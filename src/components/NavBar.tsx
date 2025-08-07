import ModeToggle from "./themToggler";
import Link from "next/link";

export const AdminHeader = () => {
  return (
    <header className="w-full h-14 border-b border-gray-300 dark:border-gray-800/30 flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <Link href="/dashboard">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Landowner</span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/" className="text-gray-900 dark:text-gray-300 hover:text-gray-200">
          Profile
        </Link>
        <Link href="/" className="text-gray-900 dark:text-gray-300 hover:text-gray-200">
          Logout
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};
