import React from "react";
import { useTranslation } from "react-i18next";

import CitiesList from "../components/List/DestinationsList";

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="banner">
        <div className="banner-content">
          <h1>Tripscout</h1>
          <p>{t('banner_text')}</p>
        </div>
      </div>
      <div className="container">
        <h3>Explore destinations</h3>
      </div>
      <CitiesList />
    </>
  )
}

export default HomePage;