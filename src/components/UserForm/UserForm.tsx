'use client';
import React, { useRef, useState, useEffect } from 'react';
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
import { Autocomplete, LoadScript } from '@react-google-maps/api';
import { fetchNewOrderToDB } from '@/utils/api';
import { TMarkerPosition } from '../Cart/Cart';

type TProps = {
  markerAddress: string;
  setMarkerPosition: React.Dispatch<
    React.SetStateAction<TMarkerPosition | null>
  >;
};

export const UserForm = ({ markerAddress, setMarkerPosition }: TProps) => {
  const { cart, setCart } = useCartContext();
  const ref = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const [inputValue, setInputValue] = useState(markerAddress);

  const autocompleteRef = React.useRef<google.maps.places.Autocomplete | null>(
    null
  );

  useEffect(() => {
    setInputValue(markerAddress);
  }, [markerAddress]);

  const onChangeAddressInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onPlaceChanged = () => {
    if (autocompleteRef.current !== null) {
      const { geometry, formatted_address } =
        autocompleteRef.current.getPlace();
      if (formatted_address) setInputValue(formatted_address);
      console.log(
        'autocompleteRef.current.getPlace()',
        autocompleteRef.current.getPlace()
      );
      const lat = geometry?.location?.lat();
      const lng = geometry?.location?.lng();
      if (lat && lng) setMarkerPosition({ lat, lng });
    }
  };

  const onOrderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cart.length === 0) return;
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

    fetchNewOrderToDB(user, cart).then(_ => {
      setCart([]);
      localStorage.setItem('cart', JSON.stringify([]));
    });
    if (ref.current) ref.current.style.backgroundColor = 'var(--accent-color)';

    setTimeout(() => {
      router.push('/thank-page');
    }, 1000);
  };
  return (
    <StyledForm onSubmit={onOrderSubmit}>
      <FieldWrapper>
        <Label htmlFor="user-company-address">Address*</Label>
        <Autocomplete
          onLoad={autocomplete => {
            autocompleteRef.current = autocomplete;
          }}
          onPlaceChanged={onPlaceChanged}
        >
          <StyledInput
            id="user-company-address"
            name="address"
            type="text"
            placeholder="your company  address"
            required
            value={inputValue}
            onChange={onChangeAddressInput}
          ></StyledInput>
        </Autocomplete>
      </FieldWrapper>
      <FieldWrapper>
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
      <FieldWrapper>
        <Label htmlFor="user-email"> Your Email*</Label>
        <StyledInput
          id="user-email"
          name="email"
          type="email"
          placeholder="example@yourmail.com"
          required
        ></StyledInput>
      </FieldWrapper>

      <FieldWrapper>
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

      <Button type="primary" htmlType="submit" ref={ref}>
        Comfirm
      </Button>
    </StyledForm>
  );
};
