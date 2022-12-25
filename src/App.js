import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import Navbar from './components/Navbar';
import UserList from './components/UserList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<UserList />}></Route>
          <Route index element={<UserList />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/userList" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
