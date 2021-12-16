import type { NextComponentType } from 'next';

const Navbar: NextComponentType = () => {
  return (
    <div>
      <nav aria-label="Breadcrumb" className="flex mx-auto justify-between">
        <div className="py-4">
          <div className="ml-4 text-lg font-medium text-white">Music Body</div>
        </div>
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
      </nav>
    </div>
  );
};

export default Navbar;
