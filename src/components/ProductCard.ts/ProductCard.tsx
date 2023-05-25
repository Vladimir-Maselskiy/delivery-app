import { IProduct } from '../../interfaces/interfaces';
import { Box } from '../Box/Box';
import { CardWrapper, StyledGroupName } from './ProductCard.styled';

type TProps = {
  product: IProduct;
};

export const ProductCard = ({ product }: TProps) => {
  const { group, image, name, price } = product;

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
      <p>{price.toFixed(2)}xp</p>
    </CardWrapper>
  );
};
