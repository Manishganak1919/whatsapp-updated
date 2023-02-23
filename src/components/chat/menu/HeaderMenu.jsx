
import { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import {Menu,MenuItem,styled} from "@mui/material";
const Menuoption = styled(MenuItem)`
font-size:15px;
padding:15px 60px 5px 24px;
color:#4A4A4A;
`;
const HeaderMenu =({setOpenDrawer})=>{
  const [open, setopen] = useState(null);
  const handleClose = ()=>{
    setopen(null);
  }
  const handleClick =(event)=>{
    setopen(event.currentTarget);
  }
  return(
    <>
    <MoreVert onClick={handleClick}/>
    <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getcontentanchore1={null}
        anchorOrigin={{
          vertical:'bottom',
          horizontal:'center'
        }}
        transformOrigin={{
          vertical:'top',
          horizontal:'right'
        }}
      >
        <Menuoption onClick={()=>{handleClose(); setOpenDrawer(true)}}>Profile</Menuoption>
        <Menuoption onClick={()=>{handleClose(); setOpenDrawer(true)}}>My account</Menuoption>
        <Menuoption onClick={handleClose}>Logout</Menuoption>
      </Menu>

    </>

  )
}
export default HeaderMenu;