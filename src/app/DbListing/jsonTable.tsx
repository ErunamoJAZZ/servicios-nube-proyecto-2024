import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const JsonTablePage: React.FC<{ jsonData: any }> = ({ jsonData }) => {
  // Asegúrate de que el JSON sea un arreglo de objetos
  if (!Array.isArray(jsonData) || jsonData.length === 0) {
    return <Box>JSON inválido o vacío</Box>;
  }

  // Extrae las claves (encabezados) del primer objeto para crear las columnas de la tabla
  const columns = Object.keys(jsonData[0]);

  return (
    // <p>{JSON.stringify(columns)}</p>
    <Table variant="simple">
      <Thead>
        <Tr>
          {columns.map((column, index) => (
            <Th key={index}>{column}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {jsonData.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {columns.map((column, columnIndex) => (
              <Td key={columnIndex}>
                <span>
                  {String(row[column])}
                </span>
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
      </Table>
  );
};

export default JsonTablePage;
