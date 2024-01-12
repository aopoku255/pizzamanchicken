import React, { useState } from 'react';
import '../../src/index.css'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counting = () => {
    const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
        <div className='counting w-full mt-5 flex items-center justify-center'>
            <div className='text-white flex flex-col py-20 px-10'>
                
                    {/* <div className='grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-10 pt-20'> */}
                     <div className='flex flex-row items-center justify-center lg:gap-x-32 md:gap-x-28 gap-x-20'>
                            <div className='flex flex-col items-center text-center'>
                                <h2 className='text-center lg:text-5xl md:text-5xl text-4xl font-bold'>{counterOn && <CountUp start={0} end={10} duration={5} delay={0} />}</h2>
                                <span className='font-custom text-gray-400'>TRUCKS</span>
                            </div>
                            <div className='flex flex-col items-center text-center'>
                                <h2 className='text-center lg:text-5xl md:text-5xl text-4xl font-bold'>{counterOn && <CountUp start={0} end={52} duration={5} delay={0} />}</h2>
                                <span className='font-custom text-gray-400'> SHOPS</span>
                            </div>
                    

                            <div className='flex flex-col items-center text-center'>
                                <h2 className='text-center lg:text-5xl md:text-5xl text-4xl font-bold'>{counterOn && <CountUp start={0} end={51} duration={5} delay={0} />}</h2>
                                <span className='font-custom text-gray-400'>Outlets</span>
                            </div>
                     </div>
                {/* </div> */}

            </div>
        
    </div>
    </ScrollTrigger>
    
  );
}

export default Counting;