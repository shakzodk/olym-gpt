import { Box, Avatar, Wrap, WrapItem, Flex, Text } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
/*
message: {
    text: "Hello",
    role: "system", // system, user
}
*/
const Message = ({message, role}) => {
    return (
        <Flex alignItems="center" mb="3" w="100%" justify="center" bgColor={role=="assistant"?"#1D283D":"inherit"} py="3">
            <Wrap mr="8" alignSelf="start">
                <WrapItem>
                    <Avatar name={role==="assistant"?"Bot":"Vaibhav Sachdeva"}/>
                </WrapItem>
            </Wrap>
            <Box w="40%">
                <Text>
                    <ReactMarkdown>
                        {message}
                    </ReactMarkdown>
                </Text>
            </Box>
        </Flex>
    );
}

export default Message;