import { useState } from 'react';
import Head from 'next/head';
import {
  Box,
  Container,
  Flex,
  Grid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from '@chakra-ui/react';

// Components
import Chat from '../components/Chat';
import AuditViewer from '../components/AuditViewer';
import MaxBench from '../components/MaxBench';
import ModuleControl from '../components/ModuleControl';
import ApiKeyVault from '../components/ApiKeyVault';
import VoiceInput from '../components/VoiceInput';
import ZonenExplorer from '../components/ZonenExplorer';
import BuildPanel from '../components/BuildPanel';
import ReflexVisualizer from '../components/ReflexVisualizer';

export default function WebHub() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box minH="100vh" bg={bgColor}>
      <Head>
        <title>NOVA WebHub</title>
        <meta name="description" content="NOVA System Interface" />
      </Head>

      <Container maxW="container.xl" py={6}>
        <Tabs 
          isFitted 
          variant="enclosed" 
          onChange={(index) => setActiveTab(index)}
          colorScheme="blue"
        >
          <TabList mb="1em">
            <Tab>Chat</Tab>
            <Tab>Audit</Tab>
            <Tab>Benchmarks</Tab>
            <Tab>Modules</Tab>
            <Tab>API Keys</Tab>
            <Tab>Voice</Tab>
            <Tab>Zonen</Tab>
            <Tab>Build</Tab>
            <Tab>Reflex</Tab>
          </TabList>

          <TabPanels>
            <TabPanel><Chat /></TabPanel>
            <TabPanel><AuditViewer /></TabPanel>
            <TabPanel><MaxBench /></TabPanel>
            <TabPanel><ModuleControl /></TabPanel>
            <TabPanel><ApiKeyVault /></TabPanel>
            <TabPanel><VoiceInput /></TabPanel>
            <TabPanel><ZonenExplorer /></TabPanel>
            <TabPanel><BuildPanel /></TabPanel>
            <TabPanel><ReflexVisualizer /></TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
}