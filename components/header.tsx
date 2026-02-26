'use client';

import { useState } from 'react';
import AddProductModal from './product-modal-add';
import { Plus } from 'lucide-react';

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
          className="bg-[#764994] text-white rounded-md hover:cursor-pointer hover:bg-[#764994e0] active:bg-[#764994] px-4 my-2 font-semibold  flex gap-3"
        >
          <Plus className="mt-2 w-5" />
          <span className="pt-2">Add product</span>
        </button>
      </header>

      <AddProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
