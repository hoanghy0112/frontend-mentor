import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  BrowserRouter, 
  Routes,
  Route
} from 'react-router-dom'

import CalendarApp from './calendar/App';
import BlogrApp from './landing-page/BlogrApp';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/calendar' element={<CalendarApp />}></Route>
        <Route path='/blogr' element={<BlogrApp />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
