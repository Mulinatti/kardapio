import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import http from "../../connection/connection";
import IRestaurant from "../../interfaces/IRestaurant";
import { Star } from "lucide-react";

const pattern = {
  id: "",
  name: "No Name",
  category: "No Category",
  description: "No Desc.",
  image: "No Image"
}

const RestaurantPage = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState<IRestaurant>(pattern);
  
  useEffect(() => {
    http.get<IRestaurant>(`restaurants/${id}`)
      .then(res => {
        setRestaurant(res.data);
      })
  }, [id])

  return (
    <main className="h-full">
      <section className="bg-zinc-900 mt-16 rounded-t-2xl h-full p-4">
        <figure className="flex">
          <img className="w-20 h-20 mr-5 rounded-full" src={restaurant.image} alt="" />
          <div className="capitalize">
            <figcaption className="font-semibold text-lg">{restaurant.name}</figcaption>
            <div className="flex text-md items-center">
              <p className="text-zinc-200/70 mr-3">{restaurant.category}</p>
              <div className="flex">
                <Star className="text-amber-300 mr-1" fill="rgb(252,211,77)" size={14}/>
                <p className="text-xs">4,5</p>
              </div>
            </div>
          </div>
        </figure>
        <section>
          <p className="text-zinc-200/70 font-light text-sm text-pretty mt-5">{restaurant.description}</p>
        </section>
        <section className="mt-10">
          <h1 className="font-bold text-2xl">Pratos</h1>
        </section>
      </section>
    </main>
  )
}

export default RestaurantPage