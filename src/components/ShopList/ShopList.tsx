import React, { useState, useEffect } from 'react';
import { Box } from '../Box/Box';
import { StyledList } from './ShopList.styled';
import type { RadioChangeEvent } from 'antd';
import { Button } from 'antd';
import { TShop } from '@/interfaces/interfaces';

type TProps = {
  setFilter: React.Dispatch<React.SetStateAction<TShop | null>>;
};

type TOptions = { label: string; value: TShop | null; active?: boolean }[];

export const ShopList = ({ setFilter }: TProps) => {
  const data = localStorage.getItem('shopOptiopns');
  const initialOptions: TOptions | null = data
    ? JSON.parse(data)
    : [
        { label: 'All Shops', value: null, active: true },
        { label: 'Mc Donn', value: 'mcDonn' },
        { label: 'CFK', value: 'cfk' },
        { label: 'Potato House', value: 'potatoHouse' },
        { label: 'Smachno', value: 'smachno' },
      ];

  const [shopValue, setShopValue] = useState<TShop | null>(null);
  const [options, setOptions] = useState(initialOptions);

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
      <p>ShopList</p>

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
