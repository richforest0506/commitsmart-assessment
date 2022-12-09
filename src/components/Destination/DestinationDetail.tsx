import { FC } from "react";
import { IDestination } from "../../types/interface";
type FeedHeroProps = {
  destination: IDestination
}

const FeedHero: FC<FeedHeroProps> = ({destination}) => {
  
  return (
    <div className="feed-hero">
      <div className="feed-title">
        <h2>{destination.name}</h2>
        <div className="country">{destination.title}</div>
      </div>
      <div className="feed-thumbnail">
        <img src={destination.image} alt={`${destination.title}`} />
      </div>
    </div>
  )
}

export default FeedHero;