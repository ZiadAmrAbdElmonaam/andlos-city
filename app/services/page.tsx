import ServicesList from '@/components/ServicesList';

export default function ServicesPage() {
  return (
    <main className="min-h-screen p-4 container mx-auto max-w-4xl bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100 font-amiri">
        خدمات الأندلس
      </h1>
      <ServicesList />
    </main>
  );
} 