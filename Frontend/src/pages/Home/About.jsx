import { Dumbbell } from 'lucide-react'
import React from 'react'
import SecondaryBtn from "../../components/Button/SecondaryBtn"
export const About = () => {
  return (
    <div>
        <div className="w-full h-auto flex items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse">
            <div className='lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg'>
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" alt="About Image" className="w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover " />
            </div>
            <div className='lg:w-[50%] md:w-ful sm:w-full h-auto lg:text-start md:text-start sm:text-start text-center'>
                <h6 className="text-lg font-medium text-gray-200 flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3">
                    <Dumbbell className='w-4 h-4 -rotate-45 text-indigo-600 ' />
                    About Us
                </h6>
                <h1 className="lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold text-gray-200 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0">
                    Efforteless Strength, Timely Gains: Building Better Bodies, Faster
                </h1>
                <p className="lg:text-base md:text-base sm:text-sm text-gray-500 font-medium mb-4">
                    lorem dadsd sdasds dasakdsjd sdsdjl sdsad sadasdjl sdsad j adsd hk dasdh jhdjha hdasdhj asdshjd sa hj sdsd sa hkjsd akd hd hk sd ks hka d h jkds jhskdh  sjhd d khsdj  sak hsjh  dhkjs h jdhks h sadkhsj  adk hja h akdhsjdh asjd hj hvbsdsfh hajdhk h had ajdkh j hdjadkad hjklhdjsdklh j kadhjdka lhjskahbfjbcznxcnbuuhdjskl
                </p>
                <p className="lg:text-base md:text-base sm:text-sm text-gray-500 font-medium mb-4">
                    lorem dadsd sdasds dasakdsjd sdsdjl sdsad sadasdjl sdsad j adsd hk dasdh jhdjha hdasdhj asdshjd sa hj sdsd sa hkjsd akd hd hk sd ks hka d h jkds jhskdh  sjhd d khsdj  sak hsjh  dhkjs h jdhks h sadkhsj  adk hja h akdhsjdh asjd hj hvbsdsfh hajdhk h had ajdkh j hdjadkad hjklhdjsdklh j kadhjdka lhjskahbfjbcznxcnbuuhdjskl
                </p>
                <SecondaryBtn className="lg:w-auto md:w-auto sm:w-full w-full px-7 py-2 text-base font-medium uppercase justify-center"> Become a Member </SecondaryBtn>
            </div>
        </div>
    </div>
  )
}
