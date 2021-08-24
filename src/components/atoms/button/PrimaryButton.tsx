import React, { memo, ReactNode, VFC } from 'react';
import { Button } from '@chakra-ui/react';

type Props = {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
};
export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, disabled = false, loading = false } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      isLoading={loading}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
