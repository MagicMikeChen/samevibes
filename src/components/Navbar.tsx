import type { NextComponentType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { MenuItems } from '../../common';
import { useTheme } from 'next-themes';

const Navbar: NextComponentType = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const switchTheme = () => {
    console.log('before theme', theme);
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };
  return (
    <div>
      <nav aria-label="Breadcrumb" className="cs-navbar-style-light dark:cs-navbar-style-dark flex justify-between px-16">
        <div className="py-4">
          <div className="text-xl font-semibold cs-gradient-logo-style-light dark:cs-gradient-logo-style-dark">Music Body</div>
        </div>
        <div className="hidden lg:flex">
          <ol
            role="list"
            className="max-w-2xl py-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8 divide-x"
          >
            {MenuItems.length !== 0 &&
              MenuItems.map((item, i) => {
                return (
                  <li key={item.label} className="pl-8">
                    <div className="flex items-center">
                      <Link href={item.url}>
                        <a
                          href="#"
                          className={`mr-6 text-lg font-medium hover:text-gray-900 hover:dark:text-white ${
                            router.pathname === item.url
                              ? 'text-gray-900 dark:text-white'
                              : 'text-gray-400 dark:text-gray-400'
                          }`}
                        >
                          {item.label}
                        </a>
                      </Link>
                    </div>
                  </li>
                );
              })}
          </ol>
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" id="toggleB" className="sr-only" onClick={switchTheme} />
              <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div className="absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition dark:translate-x-full dark:bg-green-600"></div>
            </div>
            <div className="ml-3 text-gray-600 dark:text-white font-medium">
              Dark theme
            </div>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
