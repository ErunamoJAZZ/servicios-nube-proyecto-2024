import { Box, Center, Heading } from '@chakra-ui/react';

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const companyName = process.env.COMPANY_NAME;
  return (
    <Box height="100vh">
      <Center height="80%">
        <Heading as="h1" size="4xl">
          {companyName}
        </Heading>
      </Center>
      <Heading as='h5' size='sm' padding='2em'>
        Una excelente empresa!
      </Heading>
    </Box>
  );
};
