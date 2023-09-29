import { Route, Routes} from 'react-router-dom'
import Login from "./components/Login";
import CreateUser from "./components/CreateUser";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import {AuthContextProvider} from './context/UserContext'
function App() {
  return (
    <div>
      <h1> Secure File project on the Cloud</h1>
      <AuthContextProvider>
        <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/create-user' element ={<CreateUser/>} />

        <Route path='/profile' element ={<ProtectedRoute><Profile/> </ProtectedRoute>} />

        </Routes>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
