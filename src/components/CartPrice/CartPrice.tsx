import { ICartItem } from '@/interfaces/interfaces';
import { getTotalCost } from '../../utils/getTotalCost';

import React from 'react';
import { Box } from '../Box/Box';

type TProps = {
  cart: ICartItem[];
};

export const CartPrice = ({ cart }: TProps) => {
  const totalCost = getTotalCost(cart);
  return (
    <Box marginLeft="auto" marginTop={20} width={340} fontSize={40}>
      <p style={{ textAlign: 'end', paddingRight: 10 }}>
        Total Cost <span style={{ marginLeft: 5 }}>{`${totalCost}xp`}</span>
      </p>
    </Box>
  );
};
