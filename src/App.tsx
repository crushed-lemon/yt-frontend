import './App.css'
import { AppLayout } from './layouts/AppLayout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Video from './pages/Video';
import UploadVideoName from './pages/UploadVideoName';
import UploadVideoFile from './pages/UploadVideoFile';
import UploadVideoMetadata from './pages/UploadVideoMetadata';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter basename='/apps/youtube'>
      <Routes>
        <Route path='/' element = {<AppLayout></AppLayout>}>
          <Route index element = {<Home></Home>} />
          <Route path='/home' element = {<Home></Home>} />
          <Route path='/videos/:videoId' element = {<Video></Video>} />
          <Route path='/upload' element = {<UploadVideoName></UploadVideoName>} />
          <Route path='/upload/:uploadId' element = {<UploadVideoFile></UploadVideoFile>} />
          <Route path='/upload/:uploadId/metadata' element = {<UploadVideoMetadata></UploadVideoMetadata>} />
          <Route path='*' element = {<NoPage></NoPage>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
