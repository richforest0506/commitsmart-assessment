import * as React from "react";
import { useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/home.layout";
import HomePage from '../pages/home';
import DestinationPage from '../pages/destination';
import SearchPage from "../pages/search";

const Navigator = () => {
  const element = useRoutes([
    {
      path: '',
      element: <HomeLayout />,
      children: [
        {
          path: '',
          element: <HomePage />
        },
        {
          path: '/Destination/:keyword',
          element: <DestinationPage />
        }
        ,
        {
          path: '/Search/:keyword',
          element: <SearchPage />
        }
      ]
    },
  ]);

  return element;
}

export default Navigator;