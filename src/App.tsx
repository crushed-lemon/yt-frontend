import './App.css'
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Video from './pages/Video';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter basename='/apps/youtube'>
      <Routes>
        <Route path='/' element = {<Navbar></Navbar>}>
          <Route index element = {<Home></Home>} />
          <Route path='/home' element = {<Home></Home>} />
          <Route path='/videos/:videoId' element = {<Video></Video>} />
          <Route path='*' element = {<NoPage></NoPage>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
