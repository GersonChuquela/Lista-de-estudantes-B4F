import { Footer } from "../components/footer";
import Header from "../components/header";
import Imagem1 from "../components/assets/img-estudante.jpg"
import { useNavigate } from "react-router-dom";

export const Home = () => {

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate ("/users")
    };
    return (
        <>
        <Header />
        <aside className="flex relative  float-right  h-screen w-1/3 bg-gradient-to-br from-[#fefae0] to-[#dda15e]">
                <div>
                    <img src={Imagem1} alt="estudante" className=" flex h-full  justify-center items-center" />
                </div>
                </aside>
        <main className="w-2/3">
            <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-gradient-to-br from-[#fefae0] to-[#dda15e] min-h-screen">

                <div className="text-center md:text-left md:max-w-lg mb-6 md:mb-0">
                    <h1 className="text-4xl font-bold mb-4">Conheça os nossos estudantes</h1>
                    <p className="text-xl mb-6">Gerencie os seus estudantes com facilidade e eficiência.</p>
                    <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                        onClick={handleButtonClick}
                    >
                    Gerenciar Estudantes
                    </button>
                </div>
                
             </div>
        </main>

        <Footer />
        </>
    );
};