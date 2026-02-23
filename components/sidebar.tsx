import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="bg-white z-99 w-70 h-screen flex flex-col border-e border-gray-200">
      <aside id="default-sidebar" className="" aria-label="Sidebar">
        <div className="h-full my-10">
          <ul className="space-y-2 font-medium">
            <li className="mt-2 mb-5 ps-5">
              <Link href="#" className="">
                <h1 className="text-2xl font-bold text-pretty leading-none px-3">
                  Webbutiken
                </h1>
                <span className="px-3 text-black/50 text-sm">Admin panel</span>
              </Link>
            </li>

            <nav className="border-t-2 pt-4 border-gray-200">
              <ul className="ps-5 me-4 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="flex items-center p-2.5 gap-4 bg-purple-700 rounded-md text-white hover:bg-purple-800 active:bg-purple-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3v6" />
                      <path d="M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z" />
                      <path d="M3.054 9.013h17.893" />
                    </svg>
                    <span className="">Products</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="flex items-center p-2.5 gap-4 rounded-md hover:text-white hover:bg-purple-700 active:bg-purple-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                    <span className="">Analytics</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="flex items-center p-2.5 gap-4 rounded-md hover:text-white hover:bg-purple-700 active:bg-purple-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="8" cy="21" r="1" />
                      <circle cx="19" cy="21" r="1" />
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                    <span className="">Orders</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="flex items-center p-2.5 gap-4 rounded-md hover:text-white hover:bg-purple-700 active:bg-purple-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>{" "}
                    <span className="">Customers</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="flex items-center p-2.5 gap-4 rounded-md hover:text-white hover:bg-purple-700 active:bg-purple-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>{" "}
                    <span className="">Settings</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </ul>
        </div>
      </aside>

      {/* Login bar */}
      <section className="border-t-2 border-gray-200 mt-auto">
        {/* IMAGE */}
        <div className="flex gap-4 ms-4 me-4 align-items my-4">
          <Image
            src="https://i.pravatar.cc/54"
            alt="User profile picture"
            className="rounded-4xl"
            width={50}
            height={50}
          />
          <div
            aria-label="User Information"
            className="flex flex-col leading-none pt-2"
          >
            <span className="">Admin user</span>
            <span className="opacity-60 text-sm">admin@webbutiken.se</span>
          </div>
        </div>
      </section>
    </div>
  );
}
