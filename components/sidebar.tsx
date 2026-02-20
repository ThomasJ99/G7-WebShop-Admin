export default function Sidebar() {
  return (
    <div className="bg-white fixed top-0 left-0 z-99 w-64 h-full flex flex-col border-e border-gray-200">
      <aside id="default-sidebar" className="" aria-label="Sidebar">
        <div className="h-full py-4">
          <ul className="space-y-2 font-medium">
            <li className="border-b-2 border-gray-200 mt-2 mb-5 ps-5">
              <a href="#" className="">
                <h1 className="text-2xl font-bold text-pretty leading-tight px-3">
                  Webbutiken
                </h1>
                <span className="px-3 text-black/70 font-light text-sm">
                  Admin panel
                </span>
              </a>
            </li>

            <nav>
              <ul className="ps-5 me-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center px-2 py-2 gap-4 bg-purple-700 rounded-sm text-white hover:bg-purple-800 active:bg-purple-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 3v6" />
                      <path d="M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z" />
                      <path d="M3.054 9.013h17.893" />
                    </svg>
                    <span className="">Products</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center px-2 py-2 gap-4 rounded-sm hover:text-white hover:bg-purple-700 active:bg-purple-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                    <span className="">Analytics</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center px-2 py-2 gap-4 rounded-sm hover:text-white hover:bg-purple-700 active:bg-purple-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="8" cy="21" r="1" />
                      <circle cx="19" cy="21" r="1" />
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                    <span className="">Orders</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center px-2 py-2 gap-4 rounded-sm hover:text-white hover:bg-purple-700 active:bg-purple-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>{" "}
                    <span className="">Customers</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center px-2 py-2 gap-4 rounded-md hover:text-white hover:bg-purple-700 active:bg-purple-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>{" "}
                    <span className="">Settings</span>
                  </a>
                </li>
              </ul>
            </nav>
          </ul>
        </div>
      </aside>

      {/* Login bar */}
      <section className="border-t-2 border-gray-200 mt-auto">
        {/* IMAGE */}
        <div className="flex gap align-items">
          <img src="https://i.pravatar.cc/54" alt="" />
          <div className="">
            <a href="#" aria-label="" className="flex flex-col">
              <span>Name</span>
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
