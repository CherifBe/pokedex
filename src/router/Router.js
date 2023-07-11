import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import Navigation from '../layouts/navigation';
import Main from '../pages/main';
import Detail from '../pages/detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
};

export default Router;
