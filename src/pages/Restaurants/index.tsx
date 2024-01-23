import { useEffect, useState } from "react";
import RestaurantCard from "../../components/RestaurantCard";
import IRestaurant from "../../interfaces/IRestaurant";
import http from "../../connection/connection";

const Restaurants = () => {

  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  useEffect(() => {
    http.get<IRestaurant[]>("restaurants")
      .then(res => {
        setRestaurants(res.data);
        console.log(res.data);
      })
  }, [])

  return (
    <main className="p-5">
      <h1 className="text-center text-3xl font-semibold">Discover new restaurants!</h1>
      <section className="mt-10 md:mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {restaurants.map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant}/>)}
      </section>
    </main>
  );
};

export default Restaurants;
