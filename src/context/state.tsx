'use client';
import { ICartItem, IProduct } from '@/interfaces/interfaces';
import { createContext, useContext, useState } from 'react';

type Props = {
  children?: JSX.Element;
};

interface ICartContext {
  cart: ICartItem[];
  setCart: React.Dispatch<React.SetStateAction<ICartItem[]>>;
}
interface IProdutsContext {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

const CartContext = createContext<ICartContext | null>(null);
const ProdutsContext = createContext<IProdutsContext | null>(null);

export function CartWrapper({ children }: Props) {
  const [cart, setCart] = useState<ICartItem[]>([]);
  let sharedState = {
    cart,
    setCart,
  };

  return (
    <CartContext.Provider value={sharedState}>{children}</CartContext.Provider>
  );
}

export function ProductsWrapper({ children }: Props) {
  const [products, setProducts] = useState<IProduct[]>([]);
  let sharedState = {
    products,
    setProducts,
  };

  return (
    <ProdutsContext.Provider value={sharedState}>{children}</ProdutsContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      'useCartContext has to be used within <useCartContext.Provider>'
    );
  }
  return context;
}

export function useProductsContext() {
  const context = useContext(ProdutsContext);
  if (!context) {
    throw new Error(
      'useProductsContext has to be used within <useProductsContext.Provider>'
    );
  }
  return context;
}
