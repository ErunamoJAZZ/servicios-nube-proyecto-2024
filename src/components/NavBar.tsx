'use client'
import { Box, Flex, Link, Text, IconButton, Stack, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ReactNode } from 'react';
// import NextLink from 'next/link';




const NavItem: React.FC<{ href: string; children: ReactNode; }> = ({ href, children }) => (
  <Box as="li" listStyleType="none" marginRight="4">
    <Link
      href={href}
      fontSize="lg"
      fontWeight="bold"
      color="blue.500"
      _hover={{ textDecoration: 'underline' }}
    >
      {children}
    </Link>
  </Box>
);


const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      paddingX={4}
      paddingY={2}
      boxShadow="base"
      flexWrap="wrap"
    >
      <Text fontSize="lg">Servicios en la Nube</Text>
      <IconButton
        display={{ base: 'block', md: 'none' }}
        aria-label="Abrir menú"
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={isOpen ? onClose : onOpen}
      />
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={2}
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
      >
        <NavItem href="/">Inicio</NavItem>
        <NavItem href="/CompanyName">Nombre</NavItem>
        <NavItem href="/DbListing">DB Listing</NavItem>
        <NavItem href="/imagesBucket">Imágenes</NavItem>
        <NavItem href="/lambda">Lambda</NavItem>
        <NavItem href="/loadingStress">Stress</NavItem>
        <NavItem href="/monitoring">Load Balancer</NavItem>
      </Stack>
    </Flex>
  );
};




export default Navbar;
