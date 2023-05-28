import React from 'react';
import { THistoryContent } from '@/app/orders/page';
import { Box } from '../Box/Box';
import { Divider as CustomDivider } from '../Divider/Divider';
import { Divider } from 'antd';
import { CartItem } from '../CartItem/CartItem';
import { backgroundColor } from 'styled-system';
import { CartPrice } from '../CartPrice/CartPrice';
import { OrderItem } from '../OrderItem/OrderItem';

type TProps = {
  historyContent: THistoryContent[];
};

export const HistoryContent = ({ historyContent }: TProps) => {
  return (
    <Box>
      {historyContent.map(
        ({ order, user: { address, email, name, phone } }, index) => {
          return (
            <>
              <Box key={index} display="flex">
                <Box>
                  <p>Name: {name}</p>
                  <p>E-mail: {email}</p>
                  <p>Contact: {phone}</p>
                  <p>Address: {address}</p>
                </Box>
                <CustomDivider />
                <Box flexGrow={1}>
                  {order.map(orderItem => (
                    <OrderItem
                      key={orderItem.product._id}
                      cartItem={orderItem}
                    />
                  ))}
                </Box>
              </Box>
              <Divider style={{ backgroundColor: 'var(--accent-color)' }} />
              <CartPrice cart={order} />
              <Divider
                style={{ backgroundColor: 'var(--accent-color)', height: 5 }}
              />
            </>
          );
        }
      )}
    </Box>
  );
};
