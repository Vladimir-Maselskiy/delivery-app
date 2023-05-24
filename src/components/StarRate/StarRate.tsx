import React from 'react';
import { ReactComponent as StarSVG } from '../../../public/star-rate.svg';
import { Box } from '../Box/Box';
type TProps = {
  rate: number;
};

export const StarRate = ({ rate }: TProps) => {
  const starsItems = new Array(5).fill(null);
  return (
    <Box display="flex" marginTop={20}>
      {starsItems.map((_, index) => {
        const gradientID =
          rate - index > 0.75 ? 3 : rate - index > 0.25 ? 2 : 1;
        return (
          <StarSVG
            key={index}
            fill={`url(#Gradient${gradientID})`}
            width={26}
            height={26}
          />
        );
      })}
    </Box>
  );
};
