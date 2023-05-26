import { useCartContext } from '@/context/state';
import { ICartItem } from '@/interfaces/interfaces';
import React, { useState } from 'react';
import { Box } from '../Box/Box';
import Image from 'next/image';
import {
  StyledButton,
  StyledLabel,
  StyledNameText,
  StyledPrice,
} from './CartItem.styled';
import { InputNumber } from 'antd';

type TProps = {
  cartItem: ICartItem;
};

export const CartItem = ({ cartItem }: TProps) => {
  const { setCart } = useCartContext();
  const { product, quantity } = cartItem;
  const { image, name, price, discount, _id } = product;
  const [inputValue, setInputValue] = useState<number>(quantity);

  const onInputChange = (value: number | null) => {
    if (value) setInputValue(value);
  };

  const onInputBlur = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    setCart(prev => {
      const item = prev.find(item => item.product._id === id)!;
      let value = inputValue;
      if (value > 100) value = 100;
      if (value < 1 || isNaN(+value)) value = 1;
      item.quantity = +value;
      setInputValue(value);
      return [...prev];
    });
  };

  const onRemoveItemClick = (id: string) => {
    setCart(prev => {
      const newCart = prev.filter(item => item.product._id !== id);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  return (
    <Box display="flex" alignItems="center" marginTop={20}>
      <Image
        src={`/products${image}`}
        className="cart-item__image"
        alt={name}
        width={146}
        height={113}
      />
      <Box display="flex" alignItems="center" flexGrow={1} gridGap={20}>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <StyledNameText>{name}</StyledNameText>

          <StyledPrice className="cart-item__sales-price">
            {price.toFixed(2)}xp
          </StyledPrice>
        </Box>
        <Box marginLeft="auto" width={350} minWidth={350}>
          <StyledLabel htmlFor={`${_id}`} className="cart-item__label">
            Quantity :
          </StyledLabel>
          <InputNumber
            id={`${_id}`}
            value={inputValue}
            onChange={onInputChange}
            onBlur={e => onInputBlur(e, _id)}
            style={{
              marginTop: 10,
              marginLeft: 10,
              paddingTop: 8,
              paddingBottom: 8,
              fontSize: 20,
              border: '2px solid var(--accent-color)',
            }}
          />
          <StyledButton onClick={() => onRemoveItemClick(_id)}>X</StyledButton>
        </Box>
      </Box>
    </Box>
  );
};
