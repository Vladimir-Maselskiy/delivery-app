'use client';
import React, { useRef } from 'react';
import { useCartContext } from '@/context/state';
import { useRouter } from 'next/navigation';
import {
  FieldWrapper,
  Label,
  StyledForm,
  StyledInput,
} from './UserForm.styled';
import { Button } from 'antd';
import { IUser } from '@/interfaces/interfaces';
import { getTotalCost } from '@/utils/getTotalCost';

export const UserForm = () => {
  const { cart, setCart } = useCartContext();
  const ref = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const onOrderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLFormElement)) {
      return;
    }
    let user: IUser = {
      email: '',
      address: '',
      name: '',
      phone: '',
    };
    const data = new FormData(e.target);
    const entries = data.entries();
    for (let entry of Array.from(entries)) {
      const key = entry[0] as 'phone' | 'email' | 'address' | 'name';
      const val = entry[1] as string;
      user[key] = val;
    }

    const totalCost = getTotalCost(cart);
    // fetchNewOrderToDB(user, orderItems, totalCost, discount);
    if (ref.current) ref.current.style.backgroundColor = '#EFD372';
    setTimeout(() => {
      router.push('/thank-page');
    }, 1000);
  };
  return (
    <StyledForm onSubmit={onOrderSubmit} className="cart-content__user-form">
      <FieldWrapper className="user-form__name-box">
        <Label htmlFor="user-name"> Full Name*</Label>
        <StyledInput
          id="user-name"
          name="name"
          type="text"
          pattern="^[A-Z][a-z]+(\s[A-Z][a-z]+)*$"
          placeholder="Your Full Name"
          required
        ></StyledInput>
      </FieldWrapper>
      <FieldWrapper className="user-form__email-box">
        <Label htmlFor="user-email"> Your Email*</Label>
        <StyledInput
          id="user-email"
          name="email"
          type="email"
          placeholder="example@yourmail.com"
          required
        ></StyledInput>
      </FieldWrapper>
      <FieldWrapper className="user-form__company-address-box">
        <Label htmlFor="user-company-address">Address*</Label>
        <StyledInput
          id="user-company-address"
          name="address"
          type="text"
          placeholder="your company  address"
          required
        ></StyledInput>
      </FieldWrapper>
      <FieldWrapper className="user-form__phone-box">
        <Label htmlFor="user-phone">Phone number*</Label>
        <StyledInput
          id="user-phone"
          name="phone"
          type="tel"
          pattern="[+]380\d{9}"
          placeholder="Enter your phone"
          required
        ></StyledInput>
      </FieldWrapper>

      <Button type="primary" ref={ref}>
        Comfirm
      </Button>
    </StyledForm>
  );
};
