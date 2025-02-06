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
        id: 1,
        name: 'سوبر ماركت نجمه هيليوبولس',
        phones: ['15846'],
        category: 'supermarkets',
        hasDelivery: true,
        address: 'محور الدكتور محمود فوزي من التسعين الجنوبي'
      },
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
        name: 'مطعم الرايق',
        phones: ['01022041312'],
        category: 'restaurants',
        hasDelivery: true
      },
      {
        id: 2,
        name: 'مطعم الدادة دودي',
        phones: ['01566666777'],
        category: 'restaurants',
        hasDelivery: true
      },
      {
        id: 3,
        name: 'مطعم مأكولات شعبية العاصمة',
        phones: ['01111233397'],
        category: 'restaurants',
        hasDelivery: true
      },
      {
        id: 4,
        name: 'مطعم مأكولات شعبية بياني',
        phones: ['01098973440'],
        category: 'restaurants',
        hasDelivery: true
      },
      {
        id: 5,
        name: 'مطعم مأكولات شعبية (الفيدا مول) الباز',
        phones: ['01008444166', '01222754030', '01006889991', '01222756040'],
        category: 'restaurants',
        hasDelivery: true
      },
      {
        id: 6,
        name: 'كشري سيد حنفي',
        phones: ['16920'],
        category: 'restaurants',
        hasDelivery: true
      },
      {
        id: 7,
        name: 'مطعم أبو علي السوري',
        phones: ['01140018119'],
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
        id: 1,
        name: 'خضار و فاكهة أولاد الحاج رجب',
        phones: ['01019035866'],
        category: 'vegetables',
        hasDelivery: true
      },
      {
        id: 2,
        name: 'خضار و فاكهة مكة',
        phones: ['01119111372'],
        category: 'vegetables',
        hasDelivery: true
      },
      {
        id: 3,
        name: 'خضار و فاكهة أنوار المحمدية',
        phones: ['01001827564'],
        category: 'vegetables',
        hasDelivery: true
      },
      {
        id: 4,
        name: 'خضار و فاكهة القناوي',
        phones: ['01220704633'],
        category: 'vegetables',
        hasDelivery: true
      }
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
  },
  {
    id: 'butcher',
    name: 'جزارة',
    services: [
      {
        id: 1,
        name: 'الجزار مزارع تمام',
        phones: ['01284169911'],
        category: 'butcher',
        hasDelivery: true
      },
      {
        id: 2,
        name: 'طيور و لحوم الطيبة',
        phones: ['01555896967'],
        category: 'butcher',
        hasDelivery: true
      },
      {
        id: 3,
        name: 'طيور الفرار',
        phones: ['01066230664'],
        category: 'butcher',
        hasDelivery: true
      },
      {
        id: 4,
        name: 'طيور نور الإسلام',
        phones: ['01065249585'],
        category: 'butcher',
        hasDelivery: true
      },
      {
        id: 5,
        name: 'طيور المجزر',
        phones: ['01121000054'],
        category: 'butcher',
        hasDelivery: true
      }
    ]
  },
  {
    id: 'bakeries',
    name: 'مخابز',
    services: [
      {
        id: 1,
        name: 'مخبز هايلاند',
        phones: ['01010120411'],
        category: 'bakeries',
        hasDelivery: true
      },
      {
        id: 2,
        name: 'فطاير وعيش فلاحي اميه',
        phones: ['01122898794'],
        category: 'bakeries',
        hasDelivery: true
      }
    ]
  },
  {
    id: 'beauty',
    name: 'تجميل',
    services: [
      {
        id: 1,
        name: 'بيوتي سنتر ابكر',
        phones: ['01032346533'],
        category: 'beauty',
        hasDelivery: true
      },
      {
        id: 2,
        name: 'بيوتي سنتر سمر',
        phones: ['01557157258'],
        category: 'beauty',
        hasDelivery: true
      }
    ]
  },
  {
    id: 'tailoring',
    name: 'تفصيل حريم',
    services: [
      {
        id: 1,
        name: 'أم جنة',
        phones: ['01112355754'],
        category: 'tailoring',
        hasDelivery: true
      }
    ]
  },
  {
    id: 'fish-restaurants',
    name: 'مطاعم أسماك',
    services: [
      {
        id: 1,
        name: 'أمان دار مصر الأندلس',
        phones: ['01113272038', '01200057772'],
        category: 'fish-restaurants',
        hasDelivery: true
      },
      {
        id: 2,
        name: 'شبكة وسنارة',
        phones: ['01151830530'],
        category: 'fish-restaurants',
        hasDelivery: true
      },
      {
        id: 3,
        name: 'حلقة السمك',
        phones: ['01069624422'],
        category: 'fish-restaurants',
        hasDelivery: true
      },
      {
        id: 4,
        name: 'سيوانا أسوان',
        phones: ['00201065534661'],
        category: 'fish-restaurants',
        hasDelivery: true
      },
      {
        id: 5,
        name: 'أسماك العبور',
        phones: ['01129162006'],
        category: 'fish-restaurants',
        hasDelivery: true
      },
      {
        id: 6,
        name: 'أسماك حنفي',
        phones: ['01151600515'],
        category: 'fish-restaurants',
        hasDelivery: true
      },
      {
        id: 7,
        name: 'أسماك مراسي',
        phones: ['01026447092', '01124503022', '01270365696'],
        category: 'fish-restaurants',
        hasDelivery: true
      }
    ]
  }
  // Add more categories here
]; 