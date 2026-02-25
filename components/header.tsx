"use client";

import { useState } from "react";
import AddProductModal from "./product-modal";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between px-6 py-4 bg-white border-gray-200 border-b-2 border-r-2 border-t-2 rounded-tr-lg">
        <div>
          <h2 className="text-2xl font-bold">Product management</h2>
          <span className="text-black/70">Manage your store inventory</span>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-purple-700 px-4 my-2 text-white font-semibold rounded-md hover:bg-purple-800 active:bg-purple-900 flex gap-4"
        >
          <span className="text-2xl">+</span>
          <span className="pt-1.5">Add product</span>
        </button>
      </header>

      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
