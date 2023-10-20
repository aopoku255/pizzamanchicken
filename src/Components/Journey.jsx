import React, { useState, useEffect } from 'react'
import { journey } from '../Data/Journey'
import DOMPurify from 'dompurify'
import { wing1 } from '../assets'
import { Modal } from 'reactstrap'
import './Story.css'
import { AiOutlineClose } from 'react-icons/ai'

function Journey() {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  const handleClose = () => {
    setModal(false)
  }

  return (
    <div>
      <div className="bg-black flex lg:flex-row flex-col gap-10 font-Montserrat items-center w-fit 69">
     
          <div
            className="lg:w-[40%] w-[100%] lg:h-[1800px] md: h-[400px]" lazy-load
            style={{
              backgroundImage: `url(${wing1})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
                 <div className="video-overlay mt-4">
          {!modal && (
            <div className="play-button" onClick={toggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <path fill="#fff" d="M8 5v14l11-7z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </div>
          )}
          </div>
     </div>
        <Modal isOpen={modal} toggle={toggle} className="modal">
          <div className="absolute md:top-[90px] md:right-[60px] top-[150px] right-[30px] cursor-pointer">
            <AiOutlineClose color="#fff" onClick={handleClose} size={40} />
          </div>
          <iframe
            className="youtube md:w-[670px] md:h-[400px] w-full h-full "
           
            src="https://www.youtube.com/embed/NJa8hiyVwWU?si=tNmx9yjvmSt6nVDz"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            autoplay
          ></iframe>
        </Modal>

        <div className="text-white md:px-10 px-5 py-10 lg:w-[60%] w-[100%]">
          <h2 className="text-3xl mb-14 font-semibold">The Journey</h2>

          <div className=" flex gap-6">
            <div className="bg-none border border-white w-24 h-24 rounded-full flex justify-center items-center">
              <div className="bg-[#e93e21] w-20 h-20 rounded-full m-2 flex justify-center items-center">
                <span>2018</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-3 h-3 rounded-full bg-[#e93e21]" />
              <div className="w-[2px] h-full bg-[#ffffff12]" />
            </div>
            <div>
              <h1 className="text-2xl pb-5">A Beginning of new ERA</h1>
              <div className="text-[16px] leading-7 font-light">
                <p>
                  Pizzaman started with the sales of pizza in slices in 2018
                  January. It started in a rented apartment located opposite the
                  Sharp Kids Academy at Kotei-Kumasi in the Ashanti region of
                  Ghana. This venture was started by 2 students Namely Christian
                  Boakye Yiadom and Ebenezer Essuman-Amankwah who read BSc
                  Actuarial Science and BSc Mathematics respectively with the
                  immense support of Prince Owusu, who was also a student of
                  Kwame Nkrumah University of Science & Technology.
                </p>

                <p className="pt-10">
                  After their first contract, which was awarded by the then SRC
                  women’s Commissioner of KNUST namely Miss. Ruth Anku-Gbetanu,
                  a lot of orders came in from other organisations such as the
                  Medical Students Association (KNUST), Social Sciences Students
                  Association, and the National Union of Ghana Students
                  (NUGS_KNUST). News about PIZZAMAN began to spread as it was a
                  bit surprising to see a former Presidential aspirant of the
                  KNUST students Representative Council engaging in a food
                  business.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-6 pt-14">
            <div className="bg-none border border-white w-24 h-24 rounded-full flex justify-center items-center">
              <div className="bg-[#e93e21] w-20 h-20 rounded-full m-2 flex justify-center items-center">
                <span>2018</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-3 h-3 rounded-full bg-[#e93e21]" />
              <div className="w-[2px] h-full bg-[#ffffff12]" />
            </div>
            <div>
              <h1 className="text-2xl pb-5">A Good Idea Become An Group</h1>
              <div className="text-[16px] leading-7 font-light">
                <p>
                  Eventually, the market share grew and there was a need to
                  introduce the selling of full boxes of pizza. The first
                  commercial full box of pizza was sold on 14th April 2018. It
                  then continued from that day until June 2018 where business
                  went on a recess due to financial obstacles.
                </p>

                <p className="pt-5">
                  On 7th September 2018, Pizzaman was moved from the apartment
                  in Kotei to a small shop at Ayeduase, opposite the Victory
                  Towers Hostel. From that period, pizza was sold daily. A
                  revenue of GHC12,000 was generated in the first month of
                  operation, which looked promising. October 2018 would have
                  been a great month until there was a student demonstration at
                  KNUST which led to the closedown of the pizzeria since the
                  market was targeted at students during those moments.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-6 pt-14">
            <div className="bg-none border border-white w-24 h-24 rounded-full flex justify-center items-center">
              <div className="bg-[#e93e21] w-20 h-20 rounded-full m-2 flex justify-center items-center">
                <span>2019</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-3 h-3 rounded-full bg-[#e93e21]" />
              <div className="w-[2px] h-full bg-[#ffffff12]" />
            </div>
            <div>
              <h1 className="text-2xl pb-5">Innovators</h1>
              <div className="text-[16px] leading-7 font-light">
                <p>
                  We had a joint venture agreement with Quick Angels GHANA
                  limited.
                </p>
                <p className="pt-5">
                  And that was when we came up with Chickenman, a sister brand
                  to pizzaman and they are all under CEQA foods. The idea of
                  chickenman was not to make the pizza over shadow our rice
                  dishes
                </p>
                <p className="pt-5">
                  Pizzaman along the line attracted some innovators, and these
                  people eventually became a part of the team. Miss Kekeli Awume
                  and Mr. Martin Dari.In May 2019, Pizzaman closed down again
                  and came up stronger with a sister Brand Called Chickenman in
                  January 2020.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:py-32 py-16 px-10 flex flex-wrap gap-10 items-center">
        <div className="md:w-[35%] w-full">
          <h3 className="text-[#e93e21] text-lg font-semibold">
            CHEFS FOR PASSION
          </h3>
          <p className="text-3xl pt-3">Meet Our Team</p>
        </div>
        <div className="md:w-[35%] w-full flex gap-10">
          <div className="w-1 h-full bg-black" />
          <p>
            A master in the art of several rare cuisines, Chefs will surprise
            you with their touch to the simplest.
          </p>
        </div>
        <div className="md:w-[20%] w-full">
          <a
            href=""
            className="px-8 py-2 border border-black hover:bg-black hover:text-white transition-all duration-200 ease-out"
          >
            View More
          </a>
        </div>
      </div>
    </div>
  )
}

export default Journey
