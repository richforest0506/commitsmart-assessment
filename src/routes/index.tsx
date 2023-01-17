import * as React from "react";
import { useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/home.layout";
import HomePage from '../pages/home';
import DestinationPage from '../pages/destination';
import SearchPage from "../pages/search";
import base_url from "./url";


const Navigator = () => {
  const element = useRoutes([
    {
      path: base_url,
      element: <HomeLayout />,
      children: [
        {
          path: '',
          element: <HomePage />
        },
        {
          path: base_url + 'Destination/:keyword',
          element: <DestinationPage />
        }
        ,
        {
          path: base_url + 'Search/:keyword',
          element: <SearchPage />
        }
      ]
    },
  ]);

  return element;
}

export default Navigator;