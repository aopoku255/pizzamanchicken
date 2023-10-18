import Footer from "../../Components/Footer1";
import '../../../src/index.css'
import Navbar2 from "../../Components/Navbar2";
import { truckDark } from "../../assets";

const Contact = () => {
    return(
        <>
           <Navbar2 />
        <div
          className="w-full h-96 flex justify-center items-center"
          style={{
            backgroundImage: `url(${truckDark})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-5xl text-white">Contact Us</h1>
        </div>

            <div className=" bg-white">
                <div className="flex flex-col items-center">
                    <div className=" mt-28">
                        <div className=" text-2xl">
                            SEND US A MESSAGE
                        </div>
                    </div>

                    <div className=" mt-8">
                        <div className="flex flex-col md:flex-row w-full justify-center">
                            <div className=" mr-7 w-full">
                                <label className="text-xl" htmlFor="name">Name <span className="text-primary">*</span></label>
                                <div className=" bg-white flex rounded-md items-center md:w-[26vw]  h-10 mt-2 border-2">
                                    <input className=" w-full ml-2 outline-none text-[16.2px]" type="text" id="name" placeholder="Name" required/>
                                </div>
                            </div>
                            <div className=" md:mt-0 mt-4">
                                <label className=" text-xl" htmlFor="email">Email <span className="text-primary">*</span></label>
                                <div className=" flex bg-white rounded-md items-center md:w-[26vw] h-10 mt-2 border-2">
                                    <input className=" w-full ml-2 text-[16.2px] outline-none" type="text" id="email" placeholder="Email" required/>
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col mt-6">
                            <label className=" text-xl" htmlFor="msg">Message</label>
                            <textarea className="px text-[16.2px] md:w-full w-[73vw] mt-3 border-2 outline-none p-2" placeholder="Message" name="" id="" cols="50" rows="9"></textarea>
                        </div>
                    </div>

                    <div className=" mt-7 mb-8">
                        <input className="text-white bg-primary cursor-pointer px-12 py-2" type="submit" value="Submit" />
                    </div>

                </div>
            </div>

            <div className=" bg-slate-100 h-56 pt-12 mt-">
                <div className=" mx-28">
                    <div className=" flex flex-wrap md:gap-4 gap-5 md:justify-between">
                        <div className=" mb-2">
                            <div className=" text-2xl">Address</div>
                            <div className=" mt-2">Citizen kofi building, Labone</div>
                            <div >
                                Accra GHANA
                            </div>
                        </div>

                        <div className="">
                            <div className=" text-2xl">Call-Us</div>
                            <div className=" mt-2"> 055 281 8221 / 055 281 8211</div>

                        </div>

                        <div className="">
                            <div className=" text-2xl">Email</div>
                            <div className=" mt-2"> info@ceqaltd.com</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-full">
                <iframe className=" w-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1985.5082748511786!2d-0.177471!3d5.564564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a9cd4f37337%3A0x7ebd08b6d800f32b!2sCitizen%20Kofi%20House%2C%20Ring%20Rd%20E%2C%20Accra!5e0!3m2!1sen!2sgh!4v1695995793256!5m2!1sen!2sgh" width="600" height="430" style={{border:'0p'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>           
            </div>

            <div>
                <Footer />
            </div>


        </>
    )
}
export default Contact;