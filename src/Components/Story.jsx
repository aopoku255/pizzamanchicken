import React, { useState } from 'react'
import './Story.css'
import '../../src/index.css'
import { AiOutlineClose } from 'react-icons/ai'
import { Modal } from 'reactstrap'

const Story = () => {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  const handleClose = () => {
    setModal(false)
  }

  return (
    <div className="md:flex justify-center items-center md:flex-row md:py-32 py-10 gap-x-10 md:px-14 px-4">
      <div className="flex flex-col flex-1">
        <h4 className="text-black md:text-6xl text-4xl text-center md:text-start font-custom">
          Mastering Pizza <br />
          Perfection.
        </h4>
        <p className="text-black font-light mt-3 pl-2 text-lg ">
          Indulge in the mouthwatering world of pizza with our latest video.
          Join us on a culinary journey as we explore the art of making the
          perfect pizza pie. From the freshly kneaded dough to the savory
          toppings and bubbling cheese, this video is a tribute to the
          deliciousness that is pizza. Get ready to satisfy your cravings and
          learn the secrets behind crafting a slice of heaven.
        </p>
      </div>

      {/* <Iframe className='' title></Iframe> */}
      <div className=" video-container">
        <div className="video-overlay mt-4">
          {!modal && (
            <div className=" play-button" onClick={toggle}>
              
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
          <img src='https://res.cloudinary.com/dmtukjeoa/image/upload/v1697821822/pizzaman%20website/andas/CHIBELLA_x8byy2.jpg' alt="Background Image" loading="lazy" />
        </div>

        <Modal isOpen={modal} toggle={toggle} className="modal">
          <div className="absolute md:top-[90px] md:right-[60px] top-[150px] right-[30px] cursor-pointer">
            <AiOutlineClose color="#fff" onClick={handleClose} size={40} />
          </div>
          <iframe
            className="youtube md:w-[670px] md:h-[400px] w-full h-full "
            // width="670" height="400"
            src="https://www.youtube.com/embed/NJa8hiyVwWU?si=tNmx9yjvmSt6nVDz"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            autoplay
            loading="lazy"
          ></iframe>
        </Modal>
      </div>
    </div>
  )
}

export default Story
