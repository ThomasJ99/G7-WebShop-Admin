export default function Sidebar() {
  return (
    <>
      <div className="bg-pink-300 fixed top-0 left-0 z-40 w-64 h-full">
        <aside
          id="default-sidebar"
          className=" bg-blue-300"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto border-e">
            <ul className="space-y-2 font-medium">
              <li>
                <a href="#" className="px-2 py-1.5">
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
        <div className="">
          {/* IMAGE */}
          <div className="">dwdawdasddwad</div>
        </div>
      </div>
    </>
  );
}
