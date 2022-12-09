import React from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../components/Breadcrumb";
import CitiesList from "../components/List/DestinationsList";

const parentPages = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'Search',
    path: '/'
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