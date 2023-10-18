'use client'
import { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from '@chakra-ui/react';
import Estudiante from './model';

const EstudianteForm: React.FC = () => {
  const initFormData: Estudiante = {
    nombre: '',
    apellido: '',
    fecha_nacimiento: new Date(),
    direccion: '',
    correo_electronico: '',
    carrera: '',
  }
  const [isLoading, setLoading] = useState(false)
  const [formData, setFormData] = useState(initFormData);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const [alert, setAlert] = useState<{ status: 'success'|'error'|'info'|'warning'|'loading'|undefined, message: string}>({
    status: undefined,
    message: '',
  });
  const closeAlert = () => {
    setAlert({ status: undefined, message: '' });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true)

    try {
      const response = await fetch('/api/sendForm2Db', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // console.log(response)

      if (response.ok) {
        setAlert({
          status: 'success',
          message: 'Datos enviados con éxito',
        });
        setFormData(initFormData);
      } else {
        setAlert({
          status: 'error',
          message: 'Error al enviar datos',
        });
      }
    } catch (error) {
      console.error('Error al enviar datos:', error);
      setAlert({
        status: 'error',
        message: 'Error al enviar datos',
      });
    } finally {
      setLoading(false)
    }
  };


  return (
    <Box maxWidth="400px" margin="auto">
      <form onSubmit={handleSubmit}>
        <VStack spacing="4">
          <FormControl id="nombre" isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input
              required
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id="apellido" isRequired>
            <FormLabel>Apellido</FormLabel>
            <Input
              required
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id="fecha_nacimiento" isRequired>
            <FormLabel>Fecha de Nacimiento</FormLabel>
            <Input
              required
              type="date"
              name="fecha_nacimiento"
              value={formData.fecha_nacimiento.toLocaleString()}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id="direccion" isRequired>
            <FormLabel>Dirección</FormLabel>
            <Input
              required
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id="correo_electronico" isRequired>
            <FormLabel>Correo Electrónico</FormLabel>
            <Input
              required
              type="email"
              name="correo_electronico"
              value={formData.correo_electronico}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id="carrera" isRequired>
            <FormLabel>Carrera</FormLabel>
            <Input
              required
              type="text"
              name="carrera"
              value={formData.carrera}
              onChange={handleInputChange}
            />
          </FormControl>

          {isLoading ? (
            <Button isLoading disabled colorScheme="blue">
              Enviar
            </Button>
          ) : (
            <Button
              colorScheme="blue"
              type="submit"
            >
              Enviar
            </Button>
          )
        }
        </VStack>
      </form>
      {alert.status && (
        <Alert status={alert.status} mt="4">
          <AlertIcon />
          <AlertTitle mr={2}>{alert.message}</AlertTitle>
          <CloseButton onClick={closeAlert} position="absolute" right="8px" top="8px" />
        </Alert>
      )}
    </Box>
  );
};

export default EstudianteForm;
