import './App.css'
import { AppLayout } from './layouts/AppLayout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Video from './pages/Video';
import UploadVideo from './pages/UploadVideo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter basename='/apps/youtube'>
      <Routes>
        <Route path='/' element = {<AppLayout></AppLayout>}>
          <Route index element = {<Home></Home>} />
          <Route path='/home' element = {<Home></Home>} />
          <Route path='/videos/:videoId' element = {<Video></Video>} />
          <Route path='/upload' element = {<UploadVideo></UploadVideo>} />
          <Route path='*' element = {<NoPage></NoPage>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
