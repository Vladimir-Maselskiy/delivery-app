'use-client';
import React, { useState, useEffect } from 'react';
import { Box } from '../Box/Box';
import { StyledList, Title } from './ShopList.styled';
import { Button } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { TShop, TShopList } from '@/interfaces/interfaces';
import { getShopList } from '@/utils/getShopList';

type TProps = {
  setFilter: React.Dispatch<React.SetStateAction<TShop | null>>;
};

export const ShopList = ({ setFilter }: TProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [shopList, setShopList] = useState<TShopList>([]);
  const [shopValue, setShopValue] = useState<TShop | null>(null);

  useEffect(() => {
    const dataShopList = localStorage.getItem('shopList');
    const dataShopValue = sessionStorage.getItem('shopValue');
    const shopList: TShopList = dataShopList
      ? JSON.parse(dataShopList)
      : getShopList();
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
      setShopList(prev =>
        prev.map(shop => {
          if (shop.value !== shopValue) return { ...shop, active: false };
          return { ...shop, active: true };
        })
      );
  }, [shopValue, setFilter, shopList.length]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gridGap={25}>
      <Title>Shops</Title>

      {isLoading ? null : (
        <StyledList>
          {shopList.map(({ label, value, active, geodata, origin }) => (
            <li key={label}>
              <Button
                type={active ? 'primary' : 'default'}
                style={{ width: 120, height: 60 }}
                onClick={() => onShopButtonClick(value as TShop | null)}
              >
                <Box>
                  <span>{label}</span>
                  {origin && (
                    <Box>
                      <EnvironmentOutlined />
                      <span style={{ marginLeft: 10 }}>{geodata}</span>
                    </Box>
                  )}
                </Box>
              </Button>
            </li>
          ))}
        </StyledList>
      )}
    </Box>
  );
};
