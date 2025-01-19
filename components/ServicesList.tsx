'use client';

import { useState } from 'react';
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

  const renderPhoneNumbers = (phones: string[], serviceId: number) => {
    return (
      <div className="flex flex-col gap-1">
        {phones.map((phone, index) => (
          <div key={`${serviceId}-${index}`} className="flex items-center gap-2">
            <span className="font-mono text-sm sm:text-base dark:text-gray-200">{phone}</span>
            {phone !== 'عن طريق التطبيق' && (
              <button 
                onClick={() => handleCall(phone)}
                className="p-1.5 text-green-600 dark:text-green-400 hover:text-green-700 
                         dark:hover:text-green-300 rounded-full hover:bg-green-50 
                         dark:hover:bg-green-900/30"
                aria-label="اتصل الآن"
              >
                <FaPhone className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderServiceCard = (service: Service) => (
    <div key={service.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4 sm:hidden">
      <h3 className="font-bold mb-2 dark:text-gray-100">{service.name}</h3>
      <div className="space-y-2">
        <div>
          <span className="text-gray-600 dark:text-gray-400 text-sm">رقم الهاتف:</span>
          <div className="mt-1">{renderPhoneNumbers(service.phones, service.id)}</div>
        </div>
        <div>
          <span className="text-gray-600 dark:text-gray-400 text-sm">خدمة التوصيل:</span>
          <div className="mt-1 dark:text-gray-200">{service.hasDelivery ? 'نعم' : 'لا'}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SearchFilter onSearch={handleSearch} />
      <div className="max-w-6xl mx-auto px-4">
        {filteredData.map((category) => (
          <div key={category.id} className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              {category.name}
            </h2>
            
            {/* Mobile View */}
            <div className="sm:hidden">
              {category.services.map((service) => (
                <div key={service.id}>
                  {renderServiceCard(service)}
                </div>
              ))}
            </div>

            {/* Desktop View */}
            <div className="hidden sm:block bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <th className="p-3 text-right text-gray-900 dark:text-gray-100">الاسم</th>
                      <th className="p-3 text-right text-gray-900 dark:text-gray-100">رقم الهاتف</th>
                      <th className="p-3 text-right text-gray-900 dark:text-gray-100">خدمة التوصيل</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.services.map((service) => (
                      <tr key={service.id} className="border-b dark:border-gray-700 hover:bg-gray-50 
                                                    dark:hover:bg-gray-700/50">
                        <td className="p-3 dark:text-gray-200">{service.name}</td>
                        <td className="p-3">{renderPhoneNumbers(service.phones, service.id)}</td>
                        <td className="p-3 dark:text-gray-200">{service.hasDelivery ? 'نعم' : 'لا'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}

        {/* Uncategorized Services */}
        {uncategorizedServices.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              خدمات بلا نوع
            </h2>
            
            {/* Mobile View */}
            <div className="sm:hidden">
              {uncategorizedServices.map((service) => (
                <div key={service.id}>
                  {renderServiceCard(service)}
                </div>
              ))}
            </div>

            {/* Desktop View */}
            <div className="hidden sm:block bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <th className="p-3 text-right text-gray-900 dark:text-gray-100">الاسم</th>
                      <th className="p-3 text-right text-gray-900 dark:text-gray-100">رقم الهاتف</th>
                      <th className="p-3 text-right text-gray-900 dark:text-gray-100">خدمة التوصيل</th>
                    </tr>
                  </thead>
                  <tbody>
                    {uncategorizedServices.map((service) => (
                      <tr key={service.id} className="border-b dark:border-gray-700 hover:bg-gray-50 
                                                    dark:hover:bg-gray-700/50">
                        <td className="p-3 dark:text-gray-200">{service.name}</td>
                        <td className="p-3">{renderPhoneNumbers(service.phones, service.id)}</td>
                        <td className="p-3 dark:text-gray-200">{service.hasDelivery ? 'نعم' : 'لا'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 