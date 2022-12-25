import { useState } from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const { logout, currentUser } = useAuth();
  return (
    <div className="sticky top-0 w-full left-0 bg-slate-50 p-4 flex items-center justify-between border-b border-solid border-white-200">
      <Link href="/">
        <h1 className="text-3xl sm:text-2xl font-semibold">Projects</h1>
      </Link>
      <div className="z-10">
        {currentUser && (
          <i
            className="fa-solid fa-user text-xl sm:text-3xl duration-300 hover:opacity-40 cursor-pointer"
            onClick={() => setShowUserDetails(!showUserDetails)}
          ></i>
        )}
        {showUserDetails && (
          <ul className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
            <li className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
              <div className="mx-1">
                <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200"></h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {currentUser.email}
                </p>
              </div>
            </li>

            {/* <hr class="border-gray-200 dark:border-gray-700 " />
            
            <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                view profile
            </a>
            
            <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Settings
            </a>

            <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Keyboard shortcuts
            </a> */}

            <hr className="border-gray-200 dark:border-gray-700 " />
            <Link href="/userprofile">
              <li
                onClick={() => setShowUserDetails(false)}
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                view profile
              </li>
            </Link>

            <li className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
              Help
            </li>
            <li
              onClick={() => {
                logout();
                setShowUserDetails(false);
              }}
              className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Logout
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
