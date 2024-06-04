import { useState } from "react";
import { Container, VStack, HStack, Box, Button, Text, Progress, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const steps = ["Purchase Requisition", "Purchase Order", "Goods Receipt", "Invoice"];

const StepContent = ({ step }) => {
  switch (step) {
    case 0:
      return (
        <VStack spacing={4} width="100%">
          <FormControl>
            <FormLabel>Requisition Title</FormLabel>
            <Input placeholder="Enter title" />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea placeholder="Enter description" />
          </FormControl>
        </VStack>
      );
    case 1:
      return (
        <VStack spacing={4} width="100%">
          <FormControl>
            <FormLabel>Order Number</FormLabel>
            <Input placeholder="Enter order number" />
          </FormControl>
          <FormControl>
            <FormLabel>Supplier</FormLabel>
            <Input placeholder="Enter supplier name" />
          </FormControl>
        </VStack>
      );
    case 2:
      return (
        <VStack spacing={4} width="100%">
          <FormControl>
            <FormLabel>Receipt Number</FormLabel>
            <Input placeholder="Enter receipt number" />
          </FormControl>
          <FormControl>
            <FormLabel>Goods Description</FormLabel>
            <Textarea placeholder="Enter goods description" />
          </FormControl>
        </VStack>
      );
    case 3:
      return (
        <VStack spacing={4} width="100%">
          <FormControl>
            <FormLabel>Invoice Number</FormLabel>
            <Input placeholder="Enter invoice number" />
          </FormControl>
          <FormControl>
            <FormLabel>Amount</FormLabel>
            <Input placeholder="Enter amount" />
          </FormControl>
        </VStack>
      );
    default:
      return <Text>Unknown step</Text>;
  }
};

const Index = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <HStack spacing={4} width="100%">
          {steps.map((step, index) => (
            <Box key={index} flex="1" textAlign="center">
              <Text fontSize="sm">{step}</Text>
              {index <= activeStep ? <FaCheckCircle color="green" /> : <Box height="24px" />}
            </Box>
          ))}
        </HStack>
        <Progress value={(activeStep / (steps.length - 1)) * 100} width="100%" />
        <StepContent step={activeStep} />
        <HStack spacing={4}>
          <Button onClick={handleBack} isDisabled={activeStep === 0}>
            Back
          </Button>
          <Button onClick={handleNext} isDisabled={activeStep === steps.length - 1}>
            Next
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
