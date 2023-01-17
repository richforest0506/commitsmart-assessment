import React from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../components/Breadcrumb";
import CitiesList from "../components/List/DestinationsList";
import base_url from "../routes/url";

const parentPages = [
  {
    name: 'home',
    path: base_url
  },
  {
    name: 'Search',
    path: base_url
  }
]


const SearchPage: React.FC = () => {
  let { keyword } = useParams();

  return (
    <>
      <div className="container">
        <BreadCrumb parents={parentPages} current={keyword || ''} />
        <h3>Searched cities</h3>
      </div>
      <CitiesList />
    </>
  )
}

export default SearchPage;