'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Banner, Title } from './ThankPage.styled';
import { Button } from 'antd';

export const ThankPage = () => {
  const router = useRouter();
  const onGetOrdersButtonClick = () => {
    router.push('/orders');
  };
  return (
    <>
      <Banner className="thank-page__banner">
        <Title>Thank you for your order</Title>
        <Button
          type="primary"
          style={{
            margin: '0 auto',
            position: 'absolute',
            right: 40,
            bottom: 40,
          }}
          onClick={onGetOrdersButtonClick}
        >
          Get Orders
        </Button>
      </Banner>
    </>
  );
};
