import Header from '@/components/dom/layout/Header'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { MotionModal } from '../styles/common.styles'
import Image from 'next/image'
import SplashScreen from '@/components/dom/SplashScreen'
import { useRouter } from 'next/router'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import Data from '@/Data'

export default function Page(props) {
  const router = useRouter()

  const [isModal, setIsModal] = useState<boolean>(true)
  const [isSplashScreenEnd, setIsSplashScreenEnd] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setIsSplashScreenEnd(false)
    }, 3000)
  }, [])

  return (
    <>
      <SplashScreen isVisible={isSplashScreenEnd} />
      <Header title={props.title} />
      <div className='pt-20 bg-black flex p-8 flex-col justify-center items-center w-screen h-full min-h-screen'>
        <Swiper
          className=' w-full h-full max-w-[560px]'
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          {Data.map((page, index) => (
            <SwiperSlide
              key={index}
              className='flex flex-col rounded-xl w-full h-full border-4 border-white bg-black justify-between items-center'>
              <div
                className='flex flex-col gap-4 p-4 md:p-10 justify-center items-center w-full h-full bg-white'
                onClick={() => {
                  router.push(page.path)
                }}>
                <div className='h-fit w-full text-4xl bg-white flex justify-center items-center'>{page.title}</div>
                <div className=' w-full text-2xl bg-white flex justify-center items-center'>
                  {page.team && page.team}
                </div>
                <div className=' w-full text-2xl bg-white flex justify-center items-center'>
                  {page.members && page.members}
                </div>
                <div className=' w-full text-lg bg-white flex justify-center items-center'>
                  {page.contents && page.contents}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'EFM' } }
}
