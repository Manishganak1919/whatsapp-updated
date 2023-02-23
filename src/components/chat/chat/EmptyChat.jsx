import { Box, Typography,styled,Divider } from "@mui/material";
import { display } from "@mui/system";
import {emptyChatImage} from "../../../constants/data";
const Component = styled(Box)`
background:#f8f9fa;
padding:30px 0;
text-align:center;
height:86vh;
`;
const Container = styled(Box)`
padding:0 200px;

`;
const Image = styled('img')({
  width:400,
  marginTop:100
})
const Title =styled(Typography)`
font-size:32px;
margin:25px 0 10px 0;
font-family:inherit;
font-weight:300;
color:#41525d;
`;
const SunTitle= styled(Typography)`
font-size:14px;
color;#667781;
font-weight:400;
font-family:inherit;
`;
const StyledDivider = styled(Divider)`
margin:40px 0;
opacity:0.4;
`;

const EmptyChat = ()=>{
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt={display}/>
        <Title>WhatsApp web</Title>
        <SunTitle>Now send and receive messages without keeping your phone online</SunTitle>
        <SunTitle>use whatsApp on up to 4 Linked device and 1 Phone at the same time</SunTitle>
        <StyledDivider/>
      </Container>
    </Component>
  )
}
export default EmptyChat;