import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import MainLayout from './layouts/MainLayout'; // Changed path from ../ to ./
import {JobsPage} from './pages/JobsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import  JobPage, {jobLoader}  from './pages/JobPage';
import { AddJobPage } from './pages/AddJobPage';
const router = createBrowserRouter(
  createRoutesFromElements(
    /* Changed 'elements' to 'element' below */
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/add-job' element={<AddJobPage/>}/>
      <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;