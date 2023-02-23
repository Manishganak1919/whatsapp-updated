
import { Drawer, Box, Typography,styled } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
//component
import Profile from "./Profile";
const Header = styled(Box)`
background:#008069;
height:107px;
color:#ffff;
display:flex;
& > svg,& > p{
  margin-top:auto;
  padding:15px;
  font-weight:600;
}
`;
const Text = styled(Typography)`
font-size:18px;
`;
const Component = styled(Box)`
background:#ededed;
height:85%;
`;
const drawerStyle ={
left:20,
top:17,
height:'95%',
width:'30%',
boxshadow:'none',
borderRadius:1

}
const InfoDrawer =({open,setopen})=>{
  const handleClose=()=>{
    setopen(false);
  }
  return(
    <Drawer 
     open={open}
     onClose={handleClose}
     PaperProps={{sx:drawerStyle}}
     style={{zIndex:1500}}
    >
    <Header>
      <ArrowBack onClick={() => setopen(false)} />
      <Text>Profile</Text>
    </Header>
    <Component>
      <Profile/>

    </Component>

    </Drawer>
  )
}
export default InfoDrawer;