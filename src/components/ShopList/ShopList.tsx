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
  const [shopList, setShopList] = useState<TShopList>([]);
  const [shopValue, setShopValue] = useState<TShop | null>(null);
  const [options, setOptions] = useState(shopList);

  useEffect(() => {
    const data = localStorage.getItem('shopOptiopns');
    const shopList: TShopList = data
      ? JSON.parse(data)
      : [
          { label: 'All Shops', value: null, active: true },
          { label: 'Mc Donn', value: 'mcDonn' },
          { label: 'CFK', value: 'cfk' },
          { label: 'Potato House', value: 'potatoHouse' },
          { label: 'Smachno', value: 'smachno' },
        ];
    setShopList(shopList);
  }, []);

  const onShopButtonClick = (value: TShop | null) => {
    setShopValue(value);
  };

  useEffect(() => {
    if (options) {
      setFilter(shopValue);
      setOptions(
        options.map(option => {
          if (option.value !== shopValue) return { ...option, active: false };
          return { ...option, active: true };
        })
      );
    }
  }, [shopValue]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gridGap={25}>
      <Title>Shops</Title>

      <StyledList>
        {options?.map(({ label, value, active }) => (
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
    </Box>
  );
};
