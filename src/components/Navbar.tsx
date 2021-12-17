import type { NextComponentType } from 'next';

const Navbar: NextComponentType = () => {
  return (
    <div>
      <nav aria-label="Breadcrumb" className="flex justify-between px-16">
        <div className="py-4">
          <div className="text-lg font-medium text-white">Music Body</div>
        </div>
        <div className='hidden md:flex'>
          <ol
            role="list"
            className="max-w-2xl py-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8 divide-x"
          >
            <li>
              <div className="flex items-center">
                <a href="#" className="mr-6 text-lg font-medium text-white">
                  Home
                </a>
              </div>
            </li>

            <li className="pl-8">
              <div className="flex items-center">
                <a href="#" className="mr-6 text-lg font-medium text-white">
                  Profile
                </a>
              </div>
            </li>

            <li className="text-sm pl-8">
              <a
                href="#"
                aria-current="page"
                className="text-lg text-white hover:text-gray-200"
              >
                Nearby
              </a>
            </li>
          </ol>
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" id="toggleB" className="sr-only" />
              <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
            <div className="ml-3 text-white font-medium">Dark theme</div>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
