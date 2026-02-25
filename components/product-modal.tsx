'use client';

import { useState, useEffect } from 'react';
import type { Category, Product } from '../app/types';
import { useRouter } from 'next/navigation';

const API_URL = 'http://localhost:4000';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product;
}

export default function ProductModal({ isOpen, onClose, product }: AddProductModalProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    brand: '',
    price: '',
    stock: '',
    categoryId: '',
    description: '',
    thumbnail: '',
  });

  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      fetch(`${API_URL}/categories`)
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }
  }, [isOpen]);

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title ?? '',
        brand: product.brand ?? '',
        price: String(product.price ?? ''),
        stock: String(product.stock ?? ''),
        categoryId: String(product.categoryId ?? ''),
        description: product.description ?? '',
        thumbnail: product.thumbnail ?? '',
      });
    }
  }, [product]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    const body = {
      title: formData.title,
      brand: formData.brand,
      price: Number(formData.price),
      stock: Number(formData.stock),
      categoryId: Number(formData.categoryId),
      description: formData.description,
      thumbnail: formData.thumbnail,
    };

    const res = await fetch(`${API_URL}/products/${product?.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      onClose();
      router.refresh();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={handleBackdropClick}>
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 p-6">
        <h2 className="text-2xl font-bold mb-4 border-b pb-3">{product ? 'Edit Product' : 'Add Product'}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center">
            <label className="w-32 font-semibold">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              maxLength={40}
              className="flex-1 border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="flex items-center">
            <label className="w-32 font-semibold">Brand</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
              className="flex-1 border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="flex items-center">
            <label className="w-32 font-semibold">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
              maxLength={10}
              className="flex-1 border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="flex items-center">
            <label className="w-32 font-semibold">Stock</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              required
              min="0"
              maxLength={5}
              className="flex-1 border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="flex items-center">
            <label className="w-32 font-semibold">Category ID</label>
            <select
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              required
              className="flex-1 border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-start">
            <label className="w-32 font-semibold pt-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={3}
              className="flex-1 border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="flex items-center">
            <label className="w-32 font-semibold">Thumbnail</label>
            <input
              type="text"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              required
              className="flex-1 border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-1.5 text-sm bg-red-600 text-white rounded hover:bg-red-700">
              {product ? 'Update' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
