import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { setDestination } from "../../features/destinationSlice";
import { IDestination } from "../../types/interface";
import base_url from "../../routes/url";

interface Prop {
  destination: IDestination
};

const DestinationItem: FC<Prop> = ({ destination }: Prop) => {

  let navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(setDestination(destination));
    navigate(base_url +'Destination/' + destination.name);
  }

  return (
    <div className="city">
      <h2 className="city-title">{destination.title}</h2>
      <div className="city-image" onClick={onClickHandler}>
        <img src={destination.image} alt="location" />
      </div>
      <span className="smiley">{destination.rating}</span>
      <div className="city-description">
        {destination.description}
      </div>
    </div>
  )
}

export default DestinationItem;