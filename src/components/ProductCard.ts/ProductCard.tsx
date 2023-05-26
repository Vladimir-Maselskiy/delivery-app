import { useState, useEffect } from 'react';
import { ICartItem, IProduct } from '../../interfaces/interfaces';
import { Button } from 'antd';
import { Box } from '../Box/Box';
import { CardWrapper, StyledGroupName } from './ProductCard.styled';
import { useCartContext } from '@/context/state';

type TProps = {
  product: IProduct;
};

export const ProductCard = ({ product }: TProps) => {
  const { group, image, name, price, _id } = product;
  const { cart, setCart } = useCartContext();

  const onAddToCartButtonClick = (id: string) => {
    const index = cart.findIndex(item => item.product._id === id);
    if (index === -1) {
      setCart(prev => [...prev, { product, quantity: 1 }]);
      return;
    }
    setCart(prev => {
      const newArr = [...prev];
      newArr[index].quantity += 1;
      return newArr;
    });
  };
  return (
    <CardWrapper>
      <StyledGroupName>{group}</StyledGroupName>
      <img
        className="product-card__image"
        src={`/products${image}`}
        alt={name}
        width={250}
        height={250}
      />
      <p>{name}</p>
      <p style={{ marginTop: 10 }}>Price:{price.toFixed(2)}xp</p>
      <Button
        type="primary"
        style={{ marginTop: 15, marginLeft: 'auto' }}
        onClick={() => onAddToCartButtonClick(_id)}
      >
        Add to cart
      </Button>
    </CardWrapper>
  );
};
