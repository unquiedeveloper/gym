import React from 'react'
import Appstore from "../images/app_store.png"
import Playstore from "../images/play_store.png"
import patten from "../images/dumbell.jpg"


const bannerImg = {
    backgroundImage: `URL(${patten})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%",
}

function Testimonal() {
  return (
    <div className='flex items-center justify-center'>
        <div className='container  text-white'>
            <div style={bannerImg} 
             className='sm:min-h-[400px] sm:flex sm:justify-end 
              sm:items-center rounded-xl'>
                <div>
                    <div className='max-w-xl mx-auto space-y-6 '>
                        <h1 className='text-2xl text-center sm:text-4xl font-semibold'>downloard the app</h1>
                        <p className='text-center sm:px-20 '>Lorem ipsum dolor sit, amet consectetur
                             adipisicing elit. Atque illum vero qui impedit
                              vitae, quas maiores eos consequatur at praesentium.
                        </p>
                        <div className='flex justify-center items-center gap-4'>
                            <a href="#">
                                <img src={Appstore} 
                                className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' alt="" />
                            </a>
                            <a href="#">
                                <img src={Playstore} 
                                className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' alt="" />
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Testimonal