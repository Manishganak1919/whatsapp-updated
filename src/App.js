import { GoogleOAuthProvider } from '@react-oauth/google';
// Messenger
import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';

function App() {
  const clientId ='279410903814-5amb5abpcivkbht79volhhlo4e5us6eb.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger/> 
      </AccountProvider>
      
    </GoogleOAuthProvider>
  );
}

export default App;
