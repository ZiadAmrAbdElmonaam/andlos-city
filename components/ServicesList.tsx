'use client';

import { useState, useEffect } from 'react';
import { servicesData } from '@/data/services';
import SearchFilter from './SearchFilter';
import { ServiceCategory, Service } from '@/types/services';
import { FaPhone } from 'react-icons/fa6';

export default function ServicesList() {
  const [filteredData, setFilteredData] = useState<ServiceCategory[]>(servicesData);
  const [uncategorizedServices, setUncategorizedServices] = useState<Service[]>([]);
  
  const handleSearch = (searchTerm: string, category: string) => {
    let filtered = [...servicesData];
    let uncategorized: Service[] = [];
    
    // Filter by category
    if (category !== 'all') {
      filtered = filtered.filter(cat => cat.id === category);
    } else {
      // Check for services that don't match any category
      const allCategoryIds = servicesData.map(cat => cat.id);
      uncategorized = servicesData
        .flatMap(cat => cat.services)
        .filter(service => !allCategoryIds.includes(service.category));
    }
    
    // Filter by search term
    if (searchTerm) {
      const normalizedSearchTerm = searchTerm
        .toLowerCase()
        .replace(/\s+/g, '')
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      filtered = filtered.map(cat => ({
        ...cat,
        services: cat.services.filter(service => {
          const normalizedName = service.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          
          const normalizedPhones = service.phones.join(' ')
            .toLowerCase()
            .replace(/\s+/g, '');

          return normalizedName.includes(normalizedSearchTerm) ||
                 normalizedPhones.includes(normalizedSearchTerm);
        })
      })).filter(cat => cat.services.length > 0);

      // Also filter uncategorized services
      uncategorized = uncategorized.filter(service => {
        const normalizedName = service.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        
        const normalizedPhones = service.phones.join(' ')
          .toLowerCase()
          .replace(/\s+/g, '');

        return normalizedName.includes(normalizedSearchTerm) ||
               normalizedPhones.includes(normalizedSearchTerm);
      });
    }
    
    setFilteredData(filtered);
    setUncategorizedServices(uncategorized);
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone.replace(/\s+/g, '')}`;
  };

  const renderPhoneNumbers = (phones: string[]) => {
    return (
      <div className="flex flex-col gap-1">
        {phones.map((phone, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="font-mono">{phone}</span>
            {phone !== 'عن طريق التطبيق' && (
              <button 
                onClick={() => handleCall(phone)}
                className="p-1.5 text-green-600 hover:text-green-700 rounded-full hover:bg-green-50"
                aria-label="اتصل الآن"
              >
                <FaPhone className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <SearchFilter onSearch={handleSearch} />
      <div className="max-w-6xl mx-auto">
        {filteredData.map((category) => (
          <div key={category.id} className="mb-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-3 text-right">الاسم</th>
                    <th className="p-3 text-right">رقم الهاتف</th>
                    <th className="p-3 text-right">خدمة التوصيل</th>
                  </tr>
                </thead>
                <tbody>
                  {category.services.map((service) => (
                    <tr key={service.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">{service.name}</td>
                      <td className="p-3">{renderPhoneNumbers(service.phones)}</td>
                      <td className="p-3">{service.hasDelivery ? 'نعم' : 'لا'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* Uncategorized Services Section */}
        {uncategorizedServices.length > 0 && (
          <div className="mb-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">خدمات بلا نوع</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-3 text-right">الاسم</th>
                    <th className="p-3 text-right">رقم الهاتف</th>
                    <th className="p-3 text-right">خدمة التوصيل</th>
                  </tr>
                </thead>
                <tbody>
                  {uncategorizedServices.map((service) => (
                    <tr key={service.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">{service.name}</td>
                      <td className="p-3">{renderPhoneNumbers(service.phones)}</td>
                      <td className="p-3">{service.hasDelivery ? 'نعم' : 'لا'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 