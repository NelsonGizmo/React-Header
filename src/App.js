import './App.css'
// import Header from './Header/Header';
// import Contacts from './Components/Contacts';
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home'
import AboutPage from './Pages/About'
import Contactpage from './Pages/Contact'
import ProfilePage from './Pages/Profile'
import BlogPage from './Pages/Blog'
import ErrorPage from './error'
import NavComp from './Components/NavComp'
import FooterComp from './Components/FooterComp'

function App() {
  return (
    <>
      <NavComp />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<Contactpage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Blog" element={<BlogPage/>}>
          <Route path="/Blogs" element={<BlogPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />

        {/* <div className="App">
        <Header />
        <Contacts />
        <Counter />
      </div> */}
      </Routes>
      <FooterComp />
    </>
  )
}

export default App
