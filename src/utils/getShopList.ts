import { TShopList } from '@/interfaces/interfaces';

export const getShopList = (): TShopList => {
  return [
    {
      label: 'All Shops',
      value: null,
      active: true,
      origin: null,
      geodata: null,
    },
    {
      label: 'Mc Donn',
      value: 'mcDonn',
      origin: { lat: 50.40220710556353, lng: 30.65400100679501 },
      geodata: 'Kyiv',
    },
    {
      label: 'CFK',
      value: 'cfk',
      origin: { lat: 49.22785161750497, lng: 28.46489886389058 },
      geodata: 'Vinnitsa',
    },
    {
      label: 'Potato House',
      value: 'potatoHouse',
      origin: { lat: 48.40759694110582, lng: 35.000572002784374 },
      geodata: 'Dnipro',
    },
    {
      label: 'Smachno',
      value: 'smachno',
      origin: { lat: 48.424873917304794, lng: 35.06339122528815 },
      geodata: 'Odesa',
    },
  ];
};
