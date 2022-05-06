import logo from './logo.svg';
import './App.css';
import Header from './shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Register/Register';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import AddItem from './pages/Home/AddItem/AddItem';
import Item from './pages/Home/Item/Item';
import Items from './pages/Home/Items/Items';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import ManageItems from './pages/ManageItems/ManageItems';
import Footer from './shared/Footer/Footer';
import AddMyItem from './pages/AddMyItem/AddMyItem';
import MyItem from './pages/MyItem/MyItem';
import NotFound from './pages/NotFound/NotFound';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <div className='app'>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/item/:itemId' element={
          <RequireAuth>
            <ItemDetail></ItemDetail>
          </RequireAuth>

        }></Route>
        <Route path='/items' element={<Items></Items>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/item/myitem' element={
          <RequireAuth><AddMyItem></AddMyItem></RequireAuth>
        }></Route>

        <Route path='/myitems' element={<RequireAuth>
          <MyItem></MyItem>
        </RequireAuth>}></Route>

        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>

        <Route path='/manage' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>

        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
