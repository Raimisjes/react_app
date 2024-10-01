import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'
import ServicesPage from './pages/ServicesPage/ServicesPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import CategorySearchPage from './pages/CategorySearchPage/CategorySearchPage'
import './App.scss'
import './index.css'

const errorElement = <ErrorPage />;
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement,
  },
  {
    path: "/aboutus",
    element: <AboutUsPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/search/:category",
    element: <CategorySearchPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
