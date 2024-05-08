import { HStack, Heading, Text } from '@chakra-ui/react';

export default function SimplePagination(props: any) {
  const { page, setPage, maxPage } = props;
  return (
    <div className="flex mt-8 mb-16 text-black">
      <button
        onClick={() => (page >= 2 ? setPage(page - 1) : null)}
        className="btn-pagination"
      >
        Previous
      </button>
      <HStack textAlign={'center'} mx={4}>
        <Text fontSize={'md'}>Page</Text>
        <Heading as="h1" size="md">
          {page ? page : 0}
        </Heading>
        <Text fontSize={'md'}>of {maxPage ? maxPage : 0} Page</Text>
      </HStack>
      <button
        onClick={() => (page <= maxPage - 1 ? setPage(page + 1) : null)}
        className="btn-pagination"
      >
        Next
      </button>
    </div>
  );
}
