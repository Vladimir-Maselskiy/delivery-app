'use-client';
import React, { useState, useEffect } from 'react';
import { Box } from '../Box/Box';
import { StyledList, Title } from './ShopList.styled';
import type { RadioChangeEvent } from 'antd';
import { Button } from 'antd';
import { TShop } from '@/interfaces/interfaces';

type TProps = {
  setFilter: React.Dispatch<React.SetStateAction<TShop | null>>;
};

type TShopList = { label: string; value: TShop | null; active?: boolean }[];

export const ShopList = ({ setFilter }: TProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [shopList, setShopList] = useState<TShopList>([]);
  const [shopValue, setShopValue] = useState<TShop | null>(null);

  useEffect(() => {
    const dataShopList = localStorage.getItem('shopList');
    const dataShopValue = sessionStorage.getItem('shopValue');
    const shopList: TShopList = dataShopList
      ? JSON.parse(dataShopList)
      : [
          { label: 'All Shops', value: null, active: true },
          { label: 'Mc Donn', value: 'mcDonn' },
          { label: 'CFK', value: 'cfk' },
          { label: 'Potato House', value: 'potatoHouse' },
          { label: 'Smachno', value: 'smachno' },
        ];
    const shopValue = dataShopValue ? JSON.parse(dataShopValue) : null;
    setShopList(shopList);
    setShopValue(shopValue);
    setTimeout(() => setIsLoading(false), 0);
  }, []);

  const onShopButtonClick = (value: TShop | null) => {
    setShopValue(value);
  };

  useEffect(() => {
    setFilter(shopValue);
    sessionStorage.setItem('shopValue', JSON.stringify(shopValue));
    if (shopList.length > 0)
      setShopList(
        shopList.map(shop => {
          if (shop.value !== shopValue) return { ...shop, active: false };
          return { ...shop, active: true };
        })
      );
  }, [shopValue]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gridGap={25}>
      <Title>Shops</Title>

      {isLoading ? null : (
        <StyledList>
          {shopList.map(({ label, value, active }) => (
            <li key={label}>
              <Button
                type={active ? 'primary' : 'default'}
                style={{ width: 120 }}
                onClick={() => onShopButtonClick(value as TShop | null)}
              >
                {label}
              </Button>
            </li>
          ))}
        </StyledList>
      )}
    </Box>
  );
};
