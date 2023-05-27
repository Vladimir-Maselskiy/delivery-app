'use client';
import { useState } from 'react';
import { Box } from '@/components/Box/Box';
import { HistoryContent } from '@/components/HistoryContent/HistoryContent';
import { UserEmailInputForm } from '@/components/UserEmailInputForm/UserEmailInputForm';
import { Divider } from 'antd';
import { ICartItem, IUser } from '@/interfaces/interfaces';

export type THistoryContent = {
  user: IUser;
  order: ICartItem[];
};

export default function Orders() {
  const [historyContent, setHistoryContent] = useState<THistoryContent[]>([]);
  return (
    <Box padding="120px 40px 20px">
      <Box display="flex" justifyContent="center">
        <UserEmailInputForm setHistoryContent={setHistoryContent} />
      </Box>
      <Divider style={{ backgroundColor: 'var(--accent-color)' }} />
      <Box>
        <HistoryContent historyContent={historyContent} />
      </Box>
    </Box>
  );
}
