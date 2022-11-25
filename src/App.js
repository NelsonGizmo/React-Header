import './App.css';
// import Header from './Header/Header';
// import Contacts from './Components/Contacts';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home'
import AboutPage from './Pages/About'
import Contactpage from './Pages/Contact';
import ProfilePage from './Pages/Profile'
import ErrorPage from './error';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/About' element={<AboutPage />}/>
      <Route path='/Contact' element={<Contactpage />} />
      <Route path='/Profile' element={<ProfilePage />} />
      <Route path='*' element={<ErrorPage />} />

      {/* <div className="App">
        <Header />
        <Contacts />
        <Counter />
      </div> */}
    </Routes>
  );
}

export default App;
