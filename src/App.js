import logo from './logo.svg';
import './App.css';
import Body from './component/Body';
import { BrowserRouter } from 'react-router-dom';
import UserUiUx from './component/context/UserUiUx';
import UserProvider from './component/context/UserProvider';

function App() {
  return (
    <UserProvider>

        <UserUiUx>
            <Body/> 
        </UserUiUx>
        
    </UserProvider>
  );
}

export default App;
