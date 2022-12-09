import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import DestinationItem from "./DestinationItem";
import { IDestination } from '../../types/interface';
import { fetchDestinations } from '../../services/destinations';


const COUNT = 5;

const CitiesList: FC = () => {

  const { t } = useTranslation();

  let { keyword } = useParams();
  const [destinations, setDestinations] = useState<IDestination[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetch = async (refresh: boolean = false) => {
    if (refresh) {
      setDestinations([]);
    }
    setLoading(true);
    const skipCount = refresh ? 0 : destinations.length;
    const data = await fetchDestinations(skipCount, COUNT, keyword)
    setDestinations(refresh ? data : [...destinations, ...data]);
    setLoading(false);
    if (data.length < COUNT) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }
  }

  const handleScroll = () => {
    if (Math.abs(window.innerHeight + document.documentElement.scrollTop - document.documentElement.offsetHeight) > 1) 
      return;
    if (!hasMore || loading) 
      return;
    fetch();
  };

  useEffect(() => {
    window.removeEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [destinations]);

  useEffect(() => {
    fetch(true);
  }, [keyword]);

  return (
    <div className="trip-list">
      {
        destinations.map((destination: IDestination) => (
          <DestinationItem destination={destination} key={'location_' + destination.id} />
        ))
      }
      {loading ? (
        <div className="loader">
          <h4>{t(destinations.length ? 'loading_more' : 'loading')}</h4>
        </div>
      ) : !hasMore ? (
        <div className="loader">
          <h4>{t(destinations.length ? 'no_content_more' : 'no_content')}</h4>
        </div>
      ) : null}
    </div>
  )
}

export default CitiesList;