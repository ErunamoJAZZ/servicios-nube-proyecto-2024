import { Box, SimpleGrid, Image } from '@chakra-ui/react';

const ImageGallery: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
      {images.map((imageUrl, index) => (
        <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={imageUrl} alt={`Image ${index}`} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ImageGallery;
