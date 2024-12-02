import {
  Box,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <Grid
      mt={10}
      px={40}
      columnGap={4}
      rowGap={8}
      templateColumns={"repeat(5, 1fr)"}
    >
      <VStack alignItems={"flex-start"}>
        <Box overflow={"hidden"} mb={2} rounded={"3xl"}>
          <Image
            h="280"
            src="https://a0.muscache.com/im/ml/photo_enhancement/pictures/e5d8daff-4593-4572-8ab1-9f3ceb325b0d.jpg?im_w=720"
          />
        </Box>
        <Box>
          <Grid gap={2} templateColumns={"6fr 1fr"}>
            <Text as={"b"} fontSize={"md"} noOfLines={1}>
              조천읍, 제주시, 한국의 타운하우스 전체
            </Text>
            <HStack spacing={1}>
              <FaStar size={"15px"} />
              <Text>5.0</Text>
            </HStack>
          </Grid>
          <Text fontSize={"sm"} color={"gray.600"}>
            Jeju, S. Korea
          </Text>
        </Box>
        <Text fontSize={"sm"} color={"gray.600"}>
          <Text as={"b"}>$72</Text> /night
        </Text>
      </VStack>
    </Grid>
  );
}
