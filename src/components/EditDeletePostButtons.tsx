import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, IconButton, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { useDeletePostMutation, useMeQuery } from '../generated/graphql';

interface EditDeletePostButtonsProps {
  id: number;
  creatorId: number;
}

const EditDeletePostButtons = ({
  id,
  creatorId,
}: EditDeletePostButtonsProps) => {
  const [{ data: meData }] = useMeQuery();
  const [, deletePost] = useDeletePostMutation();

  if (meData?.me?.id !== creatorId) {
    return null;
  }

  return (
    <Box>
      <NextLink href={'/post/edit/[id]'} as={`/post/edit/${id}`}>
        <IconButton
          as={Link}
          mr={2}
          aria-label="Edit Post"
          icon={<EditIcon />}
        ></IconButton>
      </NextLink>
      <IconButton
        aria-label="Delete Post"
        icon={<DeleteIcon />}
        onClick={() => {
          deletePost({ id: id });
        }}
      ></IconButton>
    </Box>
  );
};
export default EditDeletePostButtons;
