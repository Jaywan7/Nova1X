import React, { useState } from 'react';
import {
  Box,
  VStack,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Switch,
  Badge,
  useColorModeValue,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

interface Module {
  id: string;
  name: string;
  type: 'ReflexModule' | 'Ethics' | 'SemFlag';
  status: boolean;
  lastUpdated: string;
}

const ModuleControl: React.FC = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  const [modules] = useState<Module[]>([
    {
      id: 'reflex_001',
      name: 'Core Reflex Engine',
      type: 'ReflexModule',
      status: true,
      lastUpdated: '2025-01-15'
    },
    {
      id: 'ethics_001',
      name: 'Ethics Gate Alpha',
      type: 'Ethics',
      status: true,
      lastUpdated: '2025-01-14'
    },
    {
      id: 'semflag_001',
      name: 'Semantic Flag Processor',
      type: 'SemFlag',
      status: true,
      lastUpdated: '2025-01-13'
    }
  ]);

  const handleToggle = (moduleId: string) => {
    // In a real implementation, this would interact with the Nova core system
    console.log(`Toggling module ${moduleId}`);
  };

  const viewSource = (module: Module) => {
    setSelectedModule(module);
    onOpen();
  };

  return (
    <Box bg={bgColor} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
      <VStack spacing={6} align="stretch">
        <Heading size="md">Module Control Panel</Heading>
        
        <Box overflowX="auto">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Module ID</Th>
                <Th>Name</Th>
                <Th>Type</Th>
                <Th>Status</Th>
                <Th>Last Updated</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {modules.map((module) => (
                <Tr key={module.id}>
                  <Td>
                    <Text fontFamily="mono">{module.id}</Text>
                  </Td>
                  <Td>{module.name}</Td>
                  <Td>
                    <Badge
                      colorScheme={
                        module.type === 'ReflexModule'
                          ? 'blue'
                          : module.type === 'Ethics'
                          ? 'green'
                          : 'purple'
                      }
                    >
                      {module.type}
                    </Badge>
                  </Td>
                  <Td>
                    <Switch
                      isChecked={module.status}
                      onChange={() => handleToggle(module.id)}
                      colorScheme="green"
                    />
                  </Td>
                  <Td>{module.lastUpdated}</Td>
                  <Td>
                    <Button size="sm" onClick={() => viewSource(module)}>
                      View Source
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedModule?.name} Source</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              bg="gray.50"
              p={4}
              borderRadius="md"
              fontFamily="mono"
              fontSize="sm"
              whiteSpace="pre-wrap"
            >
              {/* Placeholder for actual source code */}
              <Text color="gray.600">
                Source code viewing is restricted in this environment.
                Please contact system administrator for access.
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ModuleControl;