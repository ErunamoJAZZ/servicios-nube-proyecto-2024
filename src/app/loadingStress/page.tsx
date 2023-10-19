'use client'
import { useState } from 'react';
import { Icon, WarningTwoIcon } from '@chakra-ui/icons';
import { Center, Button, Input, InputGroup, InputRightAddon } from '@chakra-ui/react';


const DestructionButtonPage: React.FC = () => {
  const [isLoading, setLoading] = useState(false)
  const [duration, setDuration] = useState(10);

  const fetchData = async (seconds: number) => {
    setLoading(true);
    const res = await fetch(
      `/api/performHighServerLoad?duration=${seconds}`,
      {
        method: 'GET',
      },
    );
    setLoading(false);
    window.alert('Finalizó!');
    return;
  };
  return (
    <Center height="100vh">
      <div style={{ textAlign: 'center' }}>
        <InputGroup>
          <Input
            type="number"
            min="1"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            width="5em"
            placeholder="Seconds"
            mr="2"
          />
          <InputRightAddon>
            Seconds
          </InputRightAddon>
        </InputGroup>
        {isLoading ? (
          <Button
            disabled
            isLoading
            loadingText="Loading"
            colorScheme="red"
            size="lg"
          />
        ) : (
          <Button
            colorScheme="red"
            size="lg"
            onClick={() => {
              fetchData(duration);
            }}
            >
              Prueba de stress
              <Icon as={WarningTwoIcon} boxSize={6} />
          </Button>
        )}
      </div>
    </Center>
  );
};

export default DestructionButtonPage;
