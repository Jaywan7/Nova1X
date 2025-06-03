import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Button,
  Text,
  useColorModeValue,
  HStack,
  Progress,
  Badge,
  useToast
} from '@chakra-ui/react';

const VoiceInput: React.FC = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const [isRecording, setIsRecording] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const toast = useToast();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setAudioLevel(Math.random() * 100);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const handleStartRecording = async () => {
    try {
      // In a real implementation, this would request microphone access
      // and start recording
      setIsRecording(true);
      toast({
        title: 'Recording started',
        status: 'info',
        duration: 2000,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to start recording',
        status: 'error',
        duration: 3000,
      });
    }
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setAudioLevel(0);
    toast({
      title: 'Recording stopped',
      description: 'Processing voice input...',
      status: 'info',
      duration: 2000,
    });
  };

  return (
    <Box bg={bgColor} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
      <VStack spacing={6} align="stretch">
        <HStack justify="space-between">
          <Text fontSize="xl" fontWeight="bold">Voice Input</Text>
          <Badge
            colorScheme={isRecording ? 'red' : 'gray'}
            variant="subtle"
            fontSize="sm"
          >
            {isRecording ? 'Recording' : 'Ready'}
          </Badge>
        </HStack>

        <Box>
          <Text mb={2}>Audio Level</Text>
          <Progress
            value={audioLevel}
            size="sm"
            colorScheme={audioLevel > 80 ? 'red' : 'blue'}
            isAnimated
          />
        </Box>

        <Button
          colorScheme={isRecording ? 'red' : 'blue'}
          onClick={isRecording ? handleStopRecording : handleStartRecording}
        >
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </Button>

        <Box p={4} bg="gray.50" borderRadius="md">
          <Text color="gray.600" fontSize="sm">
            Voice processing is handled by the Nova core system.
            Speak clearly and naturally for best results.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default VoiceInput;