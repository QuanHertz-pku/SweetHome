import React from 'react';  //使用jsx语法不需要引入react，但是如果使用了React下面的API，那么还是乖乖引入React吧
import { Route, Routes } from 'react-router-dom';
import { LoginPage,HomePage,LabPage,StartPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>}  />
      <Route path="/home" element={<HomePage />} />
      <Route path="/lab" element={<LabPage />} />
      <Route path="/start" element={<StartPage />} />
      <Route path="/*" element={<StartPage />} />

    </Routes>
  );
}

export default App;