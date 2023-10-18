import NavBar from "../Navbar2";
import '../../../src/index.css'
import Accra from "../Accra/Accra";
import Kumasi from "../Kumasi/Kumasi";
import Trucks from "../Trucks/Trucks";
import { useState } from "react";
import Footer from "../Footer1";
import { branche_hover } from "../../assets";

const Branches = () =>
{
    const [hideAccra, setHideAccra] = useState('flex');
    const [hideKumasi, setHideKumasi] = useState('hidden');
    const [hideTrucks, setHideTrucks] = useState('hidden');

    const displayAccra = () => {
        setHideAccra('flex');
        setHideKumasi('hidden');
        setHideTrucks('hidden');
    }
    const displayKumasi = () => {
        setHideAccra('hidden');
        setHideKumasi('flex');
        setHideTrucks('hidden');
    }
    const displayTrucks = () => {
        setHideAccra('hidden');
        setHideKumasi('hidden');
        setHideTrucks('flex');
    }

    return (
        <>

        <NavBar />
        <div
          className="w-full h-96 flex justify-center items-center"
          style={{
            backgroundImage: `url(${branche_hover})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-5xl text-white">Our Branches</h1>
        </div>


            <div className="flex mb-32 justify-center">
                <div className={hideAccra}>
                    <Accra displayAccra={displayAccra} displayKumasi={displayKumasi} displayTrucks={displayTrucks}/>
                </div>
                <div className={hideKumasi}>
                    <Kumasi displayAccra={displayAccra} displayKumasi={displayKumasi} displayTrucks={displayTrucks}/>
                </div>
                <div className={hideTrucks}>
                    <Trucks displayAccra={displayAccra} displayKumasi={displayKumasi} displayTrucks={displayTrucks}/>
                </div>
            </div>

            <div>
                <Footer />
            </div>

        </>
    )
}

export default Branches;