import { useContext } from "react";
import { Box ,styled, Typography} from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";
const ImageContainer = styled(Box)`
display:flex;
justify-content:center;
`;
const Imgae = styled('img')({
width:200,
height:200,
borderRadius:'70%',
padding:'25px 0'
});
const BoxWrapper = styled(Box)`
background:#FFFFFF;
padding:12px 30px 2px;
box-shadow=0 1px 3px rgba(0,0,0,0.08);
& :first-child{
  font-size:14px;
  color:#009688;
  font-weight:200;
}
& :last-child{
  margin:14px 0;
  color:4A4A4A;
}
`;
const DiscriptionContainer = styled(Box)`
padding:15px 20px 28px 30px;
& >p {
font-size:15px;
color:#8696a0;
}
`;
const Profile = ()=>{
  const { account } = useContext(AccountContext);
  return(
    <>
    <ImageContainer>
      <Imgae src={account.picture} alt="displaypicture"/>
    </ImageContainer>
    <BoxWrapper>
      <Typography>Your Name</Typography>
      <Typography>{account.name}</Typography>
    </BoxWrapper>
    <DiscriptionContainer>
      <Typography>This is not your user name or name.This name wiil be visible to your this App contacts      </Typography>

    </DiscriptionContainer>
    <BoxWrapper>
      <Typography>About</Typography>
      <Typography>Wake up early</Typography>
    </BoxWrapper>
  </>
  )
}
export default Profile;