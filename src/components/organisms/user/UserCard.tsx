import { Box, Stack, Image, Text } from '@chakra-ui/react';
import React, { memo, VFC } from 'react';

type Props = {
  imageUrl: string;
  userName: string;
  fullName: string;
  id: number;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, fullName, userName, id, onClick } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={imageUrl}
          alt={userName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
