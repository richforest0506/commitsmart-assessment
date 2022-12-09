import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from '../app/hooks';
import { curDestination } from '../features/destinationSlice';
import BreadCrumb from "../components/Breadcrumb";
import DestinationDetail from "../components/Destination/DestinationDetail";

const parentPages = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'Destination',
    path: '/'
  }
]

const DestinationPage: React.FC = () => {
  let { keyword } = useParams();
  const destination = useAppSelector(curDestination);
  return (
    <>
      <div className="container">
        <BreadCrumb parents={parentPages} current={keyword || ''} />
        <DestinationDetail
          destination={destination}
        />
        <p>
          {destination.description}
        </p>
      </div>
    </>
  )
}

export default DestinationPage;