import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import {
  PostSnippetFragment,
  PostsQuery,
  useVoteMutation,
} from '../generated/graphql';

interface UpdootSectionProps {
  post: PostSnippetFragment;
}

const UpdootSection = ({ post }: UpdootSectionProps) => {
  const [loadingState, setLoadingState] = useState<
    'updoot-loading' | 'downdoot-loading' | 'not-loading'
  >('not-loading');
  const [, vote] = useVoteMutation();

  return (
    <Flex
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      mr={4}
    >
      <IconButton
        aria-label="updoot"
        onClick={async () => {
          setLoadingState('updoot-loading');
          await vote({
            postId: post.id,
            value: 1,
          });
          setLoadingState('not-loading');
        }}
        isLoading={loadingState === 'updoot-loading'}
        icon={<ChevronUpIcon h={6} w={6} />}
      ></IconButton>
      {post.points}
      <IconButton
        aria-label="downdoot"
        onClick={async () => {
          setLoadingState('downdoot-loading');
          await vote({
            postId: post.id,
            value: -1,
          });
          setLoadingState('not-loading');
        }}
        isLoading={loadingState === 'downdoot-loading'}
        icon={<ChevronDownIcon h={6} w={6} />}
      ></IconButton>
    </Flex>
  );
};
export default UpdootSection;
