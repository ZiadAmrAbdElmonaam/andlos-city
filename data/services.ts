import { ServiceCategory } from '@/types/services';

export const servicesData: ServiceCategory[] = [
  {
    id: 'pharmacies',
    name: 'صيدليات',
    services: [
      {
        id: 1,
        name: 'صيدلية السلطان',
        phones: ['01145184139', '01091096528', '01552292939'],
        category: 'pharmacies',
        hasDelivery: true
      },
      {
        id: 2,
        name: 'صيدلية دوس',
        phones: ['01277772592'],
        category: 'pharmacies',
        hasDelivery: true
      },
      {
        id: 3,
        name: 'صيدلية Marieliez',
        phones: ['01121111602', '01121111601', '01121111600'],
        category: 'pharmacies',
        hasDelivery: true
      }
    ]
  },
  {
    id: 'supermarkets',
    name: 'سوبر ماركت',
    services: [
      {
        id: 13,
        name: 'سوبر ماركت وشحن كهرباء أنوار المحمدية',
        phones: ['01095875269'],
        category: 'supermarkets',
        hasDelivery: true
      },
      {
        id: 14,
        name: 'سوبر ماركت وشحن كهرباء الأندلس',
        phones: ['01153223544'],
        category: 'supermarkets',
        hasDelivery: true
      },
      {
        id: 15,
        name: 'سوبر ماركت كارفور',
        phones: ['عن طريق التطبيق'],
        category: 'supermarkets',
        hasDelivery: true
      },
      {
        id: 16,
        name: 'سوبر ماركت سبينيس',
        phones: ['عن طريق التطبيق'],
        category: 'supermarkets',
        hasDelivery: true
      },
      {
        id: 17,
        name: 'سوبر ماركت محمود الفار',
        phones: ['16778'],
        category: 'supermarkets',
        hasDelivery: true
      },
      {
        id: 18,
        name: 'سوبر ماركت Smart',
        phones: ['01276624130'],
        category: 'supermarkets',
        hasDelivery: true
      }
    ]
  },
  {
    id: 'restaurants',
    name: 'مطاعم',
    services: [
      {
        id: 1,
        name: 'طعم الرايق',
        phones: ['01149508512', '0102204131225'],
        category: 'restaurants',
        hasDelivery: true
      },
      {
        id: 24,
        name: 'مطعم مأكولات شعبية (دار مصر) العاصمة',
        phones: ['01111233397'],
        category: 'restaurants',
        hasDelivery: true
      },
      {
        id: 27,
        name: 'مطعم مأكولات شعبية (الأندلس) بيانكي',
        phones: ['01098973440'],
        category: 'restaurants',
        hasDelivery: true
      },
      {
        id: 28,
        name: 'مطعم مأكولات شعبية (الفيدا مول) البازار',
        phones: ['01008444166', '01222754030', '01006889991', '01222756040'],
        category: 'restaurants',
        hasDelivery: true
      },
      {
        id: 29,
        name: 'كشري سيد حنفي',
        phones: ['16920'],
        category: 'restaurants',
        hasDelivery: true
      },
      {
        id: 30,
        name: 'مطعم أبو علي السوري',
        phones: ['01140018119'],
        category: 'restaurants',
        hasDelivery: true
      },
      {
        id: 31,
        name: 'مطعم ابن الشام',
        phones: ['15155'],
        category: 'restaurants',
        hasDelivery: true
      }
    ]
  },
  {
    id: 'vegetables',
    name: 'خضار وفاكهة',
    services: [
      {
        id: 9,
        name: 'خضار وفاكهة أولاد الحاج رجب',
        phones: ['01279125522', '011564886000', '01019035866'],
        category: 'vegetables',
        hasDelivery: true
      },
      // Add all vegetable stores...
    ]
  },
  {
    id: 'plumbing',
    name: 'أنابيب',
    services: [
      {
        id: 40,
        name: 'أنابيب علاء',
        phones: ['01127566092'],
        category: 'plumbing',
        hasDelivery: true
      },
      {
        id: 41,
        name: 'أنابيب أبو حسن',
        phones: ['01091558275'],
        category: 'plumbing',
        hasDelivery: true
      },
      {
        id: 42,
        name: 'أنابيب محمد',
        phones: ['01061218331', '01008886742'],
        category: 'plumbing',
        hasDelivery: true
      },
      {
        id: 43,
        name: 'أنابيب أبو لؤي',
        phones: ['01128226376'],
        category: 'plumbing',
        hasDelivery: true
      },
      {
        id: 44,
        name: 'أنابيب أبو يوسف',
        phones: ['01066719941'],
        category: 'plumbing',
        hasDelivery: true,
      },
      {
        id: 45,
        name: 'أنابيب رمضان',
        phones: ['01125702123'],
        category: 'plumbing',
        hasDelivery: true
      }
    ]
  }
  // Add more categories here
]; 