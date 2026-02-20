export default function Sidebar() {
  return (
    <>
      <div className="bg-pink-300 fixed top-0 left-0 z-99 w-64 h-full flex flex-col border-e">
        <aside
          id="default-sidebar"
          className=" bg-blue-300"
          aria-label="Sidebar"
        >
          <div className="h-full  py-4 overflow-y-auto ">
            <ul className="space-y-2 font-medium">
              <li className="border-b-2">
                <a href="#" className="px-2 py-1.5 pb-2">
                  <h1 className="text-2xl font-bold text-pretty leading-tight px-3">
                    Webbutiken
                  </h1>
                  <span className="px-3 text-black/70">Admin panel</span>
                </a>
              </li>

              <nav>
                <ul>
                  <li>
                    <a href="#" className="flex items-center px-2 py-1.5">
                      {/* Product icon */}
                      <span className="flex-1 ms-3">Products</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="flex items-center px-2 py-1.5 group">
                      {/* icon */}
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Analytics
                      </span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="flex items-center px-2 py-1.5">
                      {/* icon */}
                      <span className="flex-1 ms-3">Orders</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="flex items-center px-2 py-1.5">
                      {/* icon */}
                      <span className="flex-1 ms-3">Customers</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="flex items-center px-2 py-1.5">
                      {/* icon */}
                      <span className="flex-1 ms-3">Settings</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </ul>
          </div>
        </aside>

        {/* Login bar */}
        <section className="border-t-2 mt-auto bg-blue-300">
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
    </>
  );
}
