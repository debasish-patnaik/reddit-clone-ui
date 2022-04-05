import { Box } from '@chakra-ui/react';
import React from 'react';

export type WrapperVariant = 'regular' | 'small';

interface WrapperProps {
  children: React.ReactNode;
  variant?: WrapperVariant;
}

const Wrapper = ({ children, variant = 'regular' }: WrapperProps) => {
  return (
    <Box
      mt={8}
      mx="auto"
      maxW={variant === 'regular' ? '800px' : '400px'}
      w="100%"
    >
      {children}
    </Box>
  );
};

export default Wrapper;
