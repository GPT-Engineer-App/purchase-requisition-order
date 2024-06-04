import { useState } from "react";
import { Container, VStack, HStack, Box, Button, Text, Progress, FormControl, FormLabel, Input, Textarea, Select, SimpleGrid } from "@chakra-ui/react";
import { FaCheckCircle, FaClipboardList, FaFileInvoice, FaTruck, FaDollarSign } from "react-icons/fa";

const steps = [
  { label: "Purchase Requisition", icon: FaClipboardList },
  { label: "Purchase Order", icon: FaFileInvoice },
  { label: "Goods Receipt", icon: FaTruck },
  { label: "Invoice", icon: FaDollarSign },
];

const StepContent = ({ step }) => {
  switch (step) {
    case 0:
      return (
        <VStack spacing={4} width="100%">
          <FormControl>
            <FormLabel>PR Number</FormLabel>
            <Input placeholder="Enter PR number" />
          </FormControl>
          <FormControl>
            <FormLabel>Request By</FormLabel>
            <Input placeholder="Enter requester's name" />
          </FormControl>
          <FormControl>
            <FormLabel>Request Date</FormLabel>
            <Input type="date" />
          </FormControl>
          <FormControl>
            <FormLabel>Status</FormLabel>
            <Select placeholder="Select status">
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Department</FormLabel>
            <Input placeholder="Enter department" />
          </FormControl>
          <FormControl>
            <FormLabel>Items</FormLabel>
            <Textarea placeholder="Enter items" />
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
        <HStack spacing={4} width="100%" justifyContent="space-between">
          {steps.map(({ label, icon: Icon }, index) => (
            <Box key={index} flex="1" textAlign="center">
              <Text fontSize="sm">{label}</Text>
              <Icon color={index <= activeStep ? "teal.500" : "gray.300"} boxSize={6} />
              {index <= activeStep ? <FaCheckCircle color="teal.500" boxSize={4} /> : <Box height="24px" />}
            </Box>
          ))}
        </HStack>
        <Progress value={(activeStep / (steps.length - 1)) * 100} width="100%" />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} width="100%">
          <StepContent step={activeStep} />
        </SimpleGrid>
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
