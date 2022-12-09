import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { SearchBox } from "./SearchBox";

enum LANG {
  EN = 'en',
  ES = 'es'
}

const NavBar: FC = () => {
  let navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(LANG.EN);

  const onSearch = (v: string) => {
    navigate(v ? '/Search/' + v : '/');
  }

  const changeLang = () => {
    const newLang = lang === LANG.EN ? LANG.ES : LANG.EN;
    setLang(newLang)
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="navbar">
      <div className="navbar container">
        <div className="logo">
          <a href='/'>
            <img
              src="https://tripscout.co/assets/theme/logos/ts-brand-name-7013ea91b1cbad0c5b684283f6fc2a0cdbefaa74f867ed540ddca0d6d56311d3.svg"
              alt="banner" />
          </a>
        </div>
        <SearchBox onSearch={onSearch} placeholder={t('search_destination')} />
        <button onClick={changeLang} className="lang-btn">
          {lang === LANG.EN ? 'ES' : 'EN'}
        </button>
      </div>
    </div>
  )
}

export default NavBar;