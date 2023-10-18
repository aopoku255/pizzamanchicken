import "../../../src/index.css";
import AccraBranch from "../../Data/Accra";
import { Link } from "react-router-dom";
import Map from "../BranchMap/BranchMap";

const Accra = ({ displayAccra, displayKumasi, displayTrucks }) => {
  const handleClick = (name, map) => {
    sessionStorage.setItem("map", map);
    sessionStorage.setItem("loc", name);
  };

  return (
    <>
      <div className=" flex justify-center">
        <div className="flex flex-col justify-center items-center mt-36">
          <div className=" text-3xl">Our Branches & Trucks</div>
          <div className="flex mt-12 text-slate-900 justify-center text-[17px] font-medium border-b-2 border-primary gap-5 md:px-20 min-w-[40vw]">
            <div
              className="accra_branch rounded-t-[3px] text-white px-6 py-3 hover:bg-primary hover:text-white cursor-pointer"
              onClick={displayAccra}
            >
              Accra
            </div>
            <div
              className="rounded-[3px] px-6 py-3 hover:bg-primary hover:text-white cursor-pointer"
              onClick={displayKumasi}
            >
              Kumasi
            </div>
            <div
              className="rounded-[3px] px-6 py-3 hover:bg-primary hover:text-white cursor-pointer"
              onClick={displayTrucks}
            >
              Trucks
            </div>
          </div>

          <div className=" flex flex-wrap justify-center mt-10 gap-14">
            {AccraBranch.map(({ id, location, map, btn }, index) => (
              <div
                id={id}
                className=" flex justify-center items-center bg-white w-72 shadow-card px-5 py-10 rounded-lg"
              >
                <div className=" flex flex-col items-center text-center">
                  <div className=" text-xl text-black font-bold">{location}</div>
                  <div className=" text-white mt-3">
                    <Link to="/map">
                      <button
                        className=" w-full text-white px-8 py-2 bg-primary rounded-sm"
                        onClick={() => handleClick(location, map)}
                      >
                        {btn}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accra;
