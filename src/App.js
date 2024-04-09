

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AddAvatarPage from './components/AddavatarPage';
import DribbblePage from './components/DribbblePage';
import EmaiVerifyPage from './components/EmailVerifyPage';
// import TestPage from './components/TestPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<LoginPage/> } />
        <Route path="/avatar" element={<AddAvatarPage/> } />
        <Route path="/dribbble" element={<DribbblePage/> } />
       <Route path="/email" element={<EmaiVerifyPage /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

