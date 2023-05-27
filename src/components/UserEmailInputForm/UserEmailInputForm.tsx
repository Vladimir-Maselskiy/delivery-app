import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  FieldWrapper,
  Label,
  StyledForm,
  StyledInput,
} from './UserEmailInputForm.styled';
import { Button } from 'antd';
import { fetchUsersOrders } from '@/utils/api';
import { THistoryContent } from '@/app/orders/page';

type TProps = {
  setHistoryContent: React.Dispatch<React.SetStateAction<THistoryContent[]>>;
};

export const UserEmailInputForm = ({ setHistoryContent }: TProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  const onOrderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!(e.target instanceof HTMLFormElement)) {
      return;
    }
    let user = {
      email: '',
    };
    const data = new FormData(e.target);
    const entries = data.entries();
    for (let entry of Array.from(entries)) {
      const key = entry[0] as 'email';
      const val = entry[1] as string;
      user[key] = val;
    }
    fetchUsersOrders(user).then(res => {
      if (res?.length > 0) {
        const historyContent: THistoryContent[] = res.map((item: any) => {
          const { user, order } = item;
          return { user, order };
        });
        setHistoryContent(historyContent);
      }
    });
    if (ref.current) ref.current.style.backgroundColor = 'var(--accent-color)';
  };
  return (
    <StyledForm onSubmit={onOrderSubmit}>
      <FieldWrapper>
        <Label htmlFor="user-email">
          Your Email*
          <StyledInput
            id="user-email"
            name="email"
            type="email"
            placeholder="example@yourmail.com"
            required
          ></StyledInput>
        </Label>
      </FieldWrapper>
      <Button type="primary" htmlType="submit" ref={ref}>
        Comfirm
      </Button>
    </StyledForm>
  );
};
