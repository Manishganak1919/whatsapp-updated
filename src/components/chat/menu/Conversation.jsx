import { useEffect, useState, useContext } from "react";

import { Box, styled, Divider } from "@mui/material";
import { getUsers } from "../../../service/api";
import { AccountContext } from "../../../context/AccountProvider";
//component
import Conversationa from "./Conversationa";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;
const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background-color: #e9edef;
  opacity: 0.3;
`;

const Conversation = ({ text }) => {
  const [users, setUsers] = useState([]);
  const { account, socket,setActiveUsers} = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers();
      let fiteredData = response.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(fiteredData);
    };
    fetchData();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUser", account);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);

  return (
    <Component>
      {users.map(
        (user) =>
          user.sub !== account.sub && (
            <>
              <Conversationa user={user} />
              <StyledDivider />
            </>
          )
      )}
    </Component>
  );
};
export default Conversation;
