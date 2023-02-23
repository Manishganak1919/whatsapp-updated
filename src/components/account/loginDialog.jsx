import { useContext } from "react";
import { Dialog,Box ,Typography,List, ListItem,styled} from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { AccountContext } from "../../context/AccountProvider";
import {GoogleLogin} from "@react-oauth/google";
import jwt_decode from 'jwt-decode';
import { addUser } from "../../service/api";
const Component = styled(Box)`
    display: flex; 
`;
const Conatiner = styled(Box)`
 padding: 56px 0 56px 56px;
`;
const QRcode = styled('img')({
  height:264,
  width:264,
  margin: '50px 0 0 50px'
});
const Title = styled(Typography)`
 font-size:26px;
 color:#525252;
 font-weight:300;
 font-family:inherit;
 margin-bottom:25px;
`;
const StyledList = styled(List)`
 & > Li{
  padding:0;
  margin:15px;
  font-size:16px;
  line-height:25px;
  color:#4a4a4a;
 }
`
const dialogstyle={
 height:'96%',
 marginTop:'12%',
 width:'60%',
 maxWidth:'100%',
 maxHeight:'100%',
 boxShadow:'none',
 overFlow:'hidden'
}
const LoginDialog = ()=>{

const {setAccount} = useContext(AccountContext);
const onLoginSuccess =  async(res) => {
  const decoded = jwt_decode(res.credential);
  console.log(decoded);
  setAccount(decoded);
  await addUser(decoded);
};

const onLoginError = (res )=>{
 console.log('login failed',res);
};

return(
  <Dialog open={true}
  PaperProps = {{sx : dialogstyle}}
  hideBackdrop ={true}
   >
    <Component>
      <Conatiner>
        <Title>To use WhatsApp on Your Computer:</Title>
        <StyledList>
          <ListItem>1.Open WhatsApp on Your Phone</ListItem>
          <ListItem>2. Tap Menu Settings and select whats web </ListItem>
          <ListItem>3. Point To your phone to this screen</ListItem>
        </StyledList>
      </Conatiner>
      <Box style={{position:'relative'}}>
        <QRcode src={qrCodeImage} alt="QR-code" />
        <Box style={{position:"absolute", top:'50%',transform:'translateX(35%)'}}>
           <GoogleLogin
            onSuccess = {onLoginSuccess}
            onError = {onLoginError}
           />
        </Box>

      </Box>
    </Component>
  </Dialog>
)
}
export default LoginDialog;