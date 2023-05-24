import { IProduct } from '../../interfaces/interfaces';
import { StarRate } from '../StarRate/StarRate';

type TProps = {
  className: string;
  product: IProduct;
  setIsShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentProduct?: React.Dispatch<React.SetStateAction<IProduct | null>>;
};

export const ProductCard = ({
  className,
  product,
  setIsShowModal = () => {},
  setCurrentProduct = () => {},
}: TProps) => {
  const { group, image, name, price, discount, rate } = product;
  const priceWithDiscount =
    discount > 0 ? (price * (1 - discount / 100)).toFixed(2) : null;
  return (
    <div
      onClick={() => {
        setIsShowModal(true);
        setCurrentProduct(product);
      }}
      className={`${className}__product-card`}
    >
      <p className="product-card__group">{group}</p>
      <img
        className="product-card__image"
        src={`../products${image}`}
        alt={name}
      />
      <p className="product-card__name">{name}</p>
      <div className="product-card__divider"></div>
      <div className="product-card__footer">
        <div className="product-card__price-box">
          {priceWithDiscount && (
            <p className="product-card__full-price">{price.toFixed(2)}</p>
          )}
          <p className="product-card__sales-price">
            {priceWithDiscount || price}
          </p>
        </div>
        <StarRate rate={rate} />
      </div>
    </div>
  );
};
