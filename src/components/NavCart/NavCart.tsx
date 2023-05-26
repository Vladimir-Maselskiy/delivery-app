import Link from 'next/link';
import React from 'react';
import { Button, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useCartContext } from '@/context/state';

export const NavCart = () => {
  const { cart } = useCartContext();
  const count = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Link href="/cart" style={{ marginLeft: 'auto' }}>
      <Badge count={count} offset={[-5, 5]}>
        <Button
          type="primary"
          icon={<ShoppingCartOutlined style={{ fontSize: 30 }} />}
          style={{
            width: 60,
            height: 60,
            backgroundColor: 'var(--accent-color)',
            borderRadius: '50%',
          }}
        />
      </Badge>
    </Link>
  );
};
