"use client";

import { useState } from "react";
import AddProductModal from "./AddProductModal";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between px-6 py-4 bg-white border-gray-200 border-2 rounded-tr-lg">
        <div>
          <h2 className="text-2xl font-bold">Product management</h2>
          <span className="text-black/70">Manage your store inventory</span>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-purple-700 px-5 my-2 text-white rounded-sm hover:bg-purple-800 active:bg-purple-900"
        >
          + Add product
        </button>
      </header>

      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
