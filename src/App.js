import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import { Favorites, Home, ProductDetail    } from "./pages";
import LoadingScreen from './components/LoadingScreen';
import ProtectedRoutes from './components/ProtectedRoutes';
import { useSelector } from "react-redux";
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Purchases from './pages/Purchases';
import UserLogged from './pages/UserLogged';


function App() {
  const isLoading = useSelector((state) => state.loading.isLoading);
  console.log(isLoading)
  return (
    <div className="App">
      <HashRouter>
        
      
      
      {isLoading && <LoadingScreen />}
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />w
          <Route path="/products/:id" element={<ProductDetail/>}></Route>
          <Route path="/favorites" element={<Favorites/>}></Route>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoutes/>}>
            <Route path="/purchases" element={<Purchases/>}/>
            <Route path="/user" element={<UserLogged/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
