import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <main className="flex text-center items-center justify-center h-[500px]">
      <section>
        <h1 className="font-bold text-4xl">Vamos descobrir novos sabores!</h1>
        <Link to="/restaurants" className="flex items-center justify-center mt-3 text-cyan-600 underline hover:scale-105 transition-all">
          <p className="font-light text-2xl">Explorar restaurantes</p>
          <ArrowRight size={30}/>
        </Link>
      </section>
    </main>
  )
}

export default Home