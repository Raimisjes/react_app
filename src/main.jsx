import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from "./routes/routes";
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
    path: routes.HOME,
    element: <HomePage />,
    errorElement,
  },
  {
    path: routes.ABOUT_US,
    element: <AboutUsPage />,
  },
  {
    path: routes.SERVICES,
    element: <ServicesPage />,
  },
  {
    path: routes.LOGIN,
    element: <LoginPage />,
  },
  {
    path: routes.REGISTER,
    element: <RegisterPage />,
  },
  {
    path: routes.SEARCH_CATEGORY,
    element: <CategorySearchPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
