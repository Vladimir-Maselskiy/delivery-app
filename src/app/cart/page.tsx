import { Box } from '@/components/Box/Box';
import { CartContent } from '@/components/CartContent/CartContent';
import { Divider } from '@/components/Divider/Divider';
import { UserForm } from '@/components/UserForm/UserForm';

export default function Cart() {
  return (
    <Box display="flex" padding="120px 40px 20px">
      <Box width={250} minWidth={250}>
        <UserForm />
      </Box>
      <Divider />
      <Box>
        <CartContent />
      </Box>
    </Box>
  );
}
