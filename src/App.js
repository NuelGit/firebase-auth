import { Route, Routes} from 'react-router-dom'
import Login from "./components/Login";
import CreateUser from "./components/CreateUser";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Uploads from './pages/Uploads';
import NotFound from './pages/NotFound';
import {AuthContextProvider} from './context/UserContext'
import GenerateRanDEK from './components/GenerateDEK';
import EncryptFile from './components/EncryptFile';
import GeneratePublicKey from './components/GeneratePublicKey'
import Home from './pages/Home';
import Header from './Header';
function App() {
  return (
    <div>
      <AuthContextProvider>
        <Header/>
        <Routes>
          <Route path='*' element= {<NotFound/>}  />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/dek' element={<GenerateRanDEK/>} />
        <Route path='/encrypt' element={<EncryptFile/>} />
        <Route path='/pubkey' element={<GeneratePublicKey/>} />
        <Route path='/create-user' element ={<CreateUser/>} />

        <Route path='/profile' element ={<ProtectedRoute><Profile/> </ProtectedRoute>} />
        <Route path='/uploads' element ={<ProtectedRoute><Uploads/> </ProtectedRoute>} />
        {/* <Route path='/home' element ={<ProtectedRoute><Home/> </ProtectedRoute>} /> */}
        

        </Routes>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
