import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import Navigation from '../layouts/navigation';
import Main from '../pages/pokemon/main';
import Detail from '../pages/pokemon/detail';
import Weather from '../pages/weather/weather';

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
};

export default Router;
