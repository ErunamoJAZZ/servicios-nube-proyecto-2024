import { Box, Heading } from '@chakra-ui/react';
import ImageGallery from './gallery';

async function loadImages() {

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'x-api-key': process.env.AWS_S3_LAMBDA_APIKEY || '',
  }

  const res = await fetch(process.env.AWS_S3_LAMBDA_URL || '', {
    method: 'GET',
    headers,
    cache: 'no-store',
  });

  console.log(JSON.stringify(headers));
  console.log(JSON.stringify(res));

  const { images }: { images: string[]} = await res.json();

  return { images };
}

export const fetchCache = 'force-no-store'


const YourImagePage: React.FC = async () => {
  const {images} = await loadImages();
  console.log('imagesnes:', images);
  return (
    <Box>
      <Heading as="h1" size="xl" textAlign="center" my={4}>
        Galería de Imágenes
      </Heading>
      {images ? (
        <ImageGallery images={images} />
      ):(
        <Heading>No images found :(</Heading>
      )}
    </Box>
  );
};


export default YourImagePage;
