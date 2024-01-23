import { Link } from "react-router-dom";
import IRestaurant from "../../interfaces/IRestaurant";

interface RestaurantCardProps {
  restaurant: IRestaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Link
      to={`/restaurants/${restaurant.id}`}
      className="p-1 cursor-pointer w-full md:max-w-[420px]  hover:bg-zinc-200/5 rounded-lg transition-all"
    >
      <figure className="flex">
        <img
          className="w-20 h-20 mr-4 rounded-full self-center"
          src={restaurant.image}
          alt="Logotipo do Restaurante"
        />
        <div>
          <figcaption className="font-medium capitalize">{restaurant.name}</figcaption>
          <p className="text-zinc-200/50 text-sm capitalize line-clamp-3 text-ellipsis overflow-hidden font-light max-h-16">            {restaurant.description}
          </p>
        </div>
      </figure>
    </Link>
  );
};

export default RestaurantCard;
