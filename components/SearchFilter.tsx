'use client';

import { ServiceCategory } from '@/types/services';
import { useCallback } from 'react';

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
  categories: ServiceCategory[];
}

export default function SearchFilter({ onSearch, onCategoryChange, categories }: SearchFilterProps) {
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  }, [onSearch]);

  const handleCategoryChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(e.target.value);
  }, [onCategoryChange]);

  return (
    <div className="mb-6 w-full max-w-2xl mx-auto space-y-4">
      <input
        type="text"
        placeholder="ابحث عن خدمة..."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                   focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                   placeholder-gray-500 dark:placeholder-gray-400 font-amiri"
        onChange={handleSearchChange}
        dir="rtl"
      />
      <select
        onChange={handleCategoryChange}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                   focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                   font-amiri"
        dir="rtl"
      >
        <option value="all">كل الخدمات</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
} 