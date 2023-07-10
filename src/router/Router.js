import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import Navigation from '../layouts/navigation';
import Main from '../pages/main';

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
};

export default Router;
