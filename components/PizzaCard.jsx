
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import Link from 'next/link';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';






function PizzaCard({pizza}) {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        cursor={"pointer"}
        borderWidth="1px"
       
        rounded="lg"
        shadow="lg"
        position="relative">
        {!pizza.veg && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red"
          />
        )}

        <Image
          src={pizza.image}
          alt={`Picture of ${pizza.title}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {pizza.veg?(
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            ):""}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {pizza.title}
            </Box>
            <Tooltip
              label="Add more customize"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
              <Link href={`/Product/${pizza._id}`} passHref>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                </Link>
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
           
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                $
              </Box>
              {pizza.prices[0]}
            </Box>
          </Flex>
          <Box fontSize={"lg"} fontWeight={"medium"}>
            
              {pizza.description}
              
            
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default PizzaCard;