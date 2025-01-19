'use client';

import { useState } from 'react';

export default function SearchFilter({ 
  onSearch 
}: { 
  onSearch?: (search: string, category: string) => void 
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    onSearch?.(value, category);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    onSearch?.(searchTerm, value);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm mb-6 p-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 justify-center items-center">
        <input
          type="text"
          placeholder="ابحث عن خدمة..."
          className="p-2 border dark:border-gray-600 rounded-md w-full sm:w-64 text-sm sm:text-base
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                     placeholder-gray-500 dark:placeholder-gray-400"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <select
          className="p-2 border dark:border-gray-600 rounded-md w-full sm:w-48 text-sm sm:text-base
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="all">كل الخدمات</option>
          <option value="pharmacies">صيدليات</option>
          <option value="restaurants">مطاعم</option>
          <option value="supermarkets">سوبر ماركت</option>
          <option value="vegetables">خضار وفاكهة</option>
          <option value="butcher">جزارة</option>
          <option value="birds">طيور</option>
          <option value="plumbing">أنابيب</option>
          <option value="laundry">مكوى ومغسلة</option>
          <option value="maintenance">صيانة</option>
          <option value="electrician">كهرباء</option>
          <option value="cleaning">تنظيف</option>
          <option value="carwash">غسيل سيارات</option>
          <option value="landscaping">لاند سكيب</option>
          <option value="moving">ورش عفش</option>
          <option value="emergency">طوارئ</option>
        </select>
      </div>
    </div>
  );
} 