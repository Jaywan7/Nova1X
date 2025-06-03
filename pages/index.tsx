import { useState } from 'react';
import Head from 'next/head';
import {
  Box,
  Container,
  useColorModeValue,
  extendTheme,
  ChakraProvider,
} from '@chakra-ui/react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

// Components
import Chat from '../components/Chat';
import AuditViewer from '../components/AuditViewer';
import MaxBench from '../components/MaxBench';
import ModuleControl from '../components/ModuleControl';
import VoiceInput from '../components/VoiceInput';
import ZonenExplorer from '../components/ZonenExplorer';
import BuildPanel from '../components/BuildPanel';
import ReflexVisualizer from '../components/ReflexVisualizer';

// Custom theme
const theme = extendTheme({
  colors: {
    brand: {
      50: '#E6F6FF',
      100: '#BAE3FF',
      200: '#7CC4FA',
      300: '#47A3F3',
      400: '#2186EB',
      500: '#0967D2',
      600: '#0552B5',
      700: '#03449E',
      800: '#01337D',
      900: '#002159',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
      },
    }),
  },
});

export default function WebHub() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const componentBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  // Default layout configuration
  const layout = [
    { i: 'chat', x: 0, y: 0, w: 8, h: 12 },
    { i: 'audit', x: 8, y: 0, w: 4, h: 6 },
    { i: 'maxbench', x: 8, y: 6, w: 4, h: 6 },
    { i: 'modules', x: 0, y: 12, w: 6, h: 6 },
    { i: 'voice', x: 6, y: 12, w: 6, h: 6 },
    { i: 'zonen', x: 0, y: 18, w: 4, h: 6 },
    { i: 'build', x: 4, y: 18, w: 4, h: 6 },
    { i: 'reflex', x: 8, y: 18, w: 4, h: 6 },
  ];

  const ModuleWrapper = ({ children }) => (
    <Box
      bg={componentBg}
      p={4}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={borderColor}
      h="100%"
      overflow="auto"
      transition="all 0.2s"
      _hover={{ shadow: 'lg' }}
    >
      {children}
    </Box>
  );

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg={bgColor} py={6}>
        <Head>
          <title>NOVA WebHub</title>
          <meta name="description" content="NOVA System Interface" />
        </Head>

        <Container maxW="container.xl">
          <GridLayout
            className="layout"
            layout={layout}
            cols={12}
            rowHeight={30}
            width={1200}
            margin={[10, 10]}
            containerPadding={[0, 0]}
            isDraggable
            isResizable
          >
            <div key="chat">
              <ModuleWrapper>
                <Chat />
              </ModuleWrapper>
            </div>
            <div key="audit">
              <ModuleWrapper>
                <AuditViewer />
              </ModuleWrapper>
            </div>
            <div key="maxbench">
              <ModuleWrapper>
                <MaxBench />
              </ModuleWrapper>
            </div>
            <div key="modules">
              <ModuleWrapper>
                <ModuleControl />
              </ModuleWrapper>
            </div>
            <div key="voice">
              <ModuleWrapper>
                <VoiceInput />
              </ModuleWrapper>
            </div>
            <div key="zonen">
              <ModuleWrapper>
                <ZonenExplorer />
              </ModuleWrapper>
            </div>
            <div key="build">
              <ModuleWrapper>
                <BuildPanel />
              </ModuleWrapper>
            </div>
            <div key="reflex">
              <ModuleWrapper>
                <ReflexVisualizer />
              </ModuleWrapper>
            </div>
          </GridLayout>
        </Container>
      </Box>
    </ChakraProvider>
  );
}