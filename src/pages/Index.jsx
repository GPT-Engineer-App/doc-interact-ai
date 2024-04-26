import { useState } from "react";
import { Box, Button, Container, Input, Text, VStack, useToast, Textarea, Heading, Image } from "@chakra-ui/react";
import { FaUpload, FaRobot } from "react-icons/fa";

const Index = () => {
  const [document, setDocument] = useState("");
  const [response, setResponse] = useState("");
  const toast = useToast();

  const handleDocumentChange = (event) => {
    setDocument(event.target.value);
  };

  const handleUpload = () => {
    if (!document) {
      toast({
        title: "No document provided",
        description: "Please paste your document in the text area.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    // Simulate AI processing
    setResponse("This is a simulated response based on the uploaded document.");
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={5}>
        <Heading as="h1" size="xl">
          AI Document Assistant
        </Heading>
        <Text>Upload your document and interact with an AI to get insights, summaries, or answers.</Text>
        <Image src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzE0MTQxNzcxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Technology" />
        <Textarea placeholder="Paste your document here..." value={document} onChange={handleDocumentChange} size="lg" />
        <Button leftIcon={<FaUpload />} colorScheme="blue" onClick={handleUpload}>
          Upload Document
        </Button>
        {response && (
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Text fontWeight="bold">AI Response:</Text>
            <Text mt={2}>{response}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
