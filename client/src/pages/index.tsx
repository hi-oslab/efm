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

export default function Page(props) {
  const router = useRouter()

  const [isModal, setIsModal] = useState<boolean>(true)
  const [isSplashScreenEnd, setIsSplashScreenEnd] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setIsSplashScreenEnd(false)
    }, 3000)
  }, [])

  const pages = [
    {
      title: 'Intro',
      path: '/intro',
    },
    {
      title: 'Yes or No, Really?',
      path: '/yes-or-no-really',
      team: 'Open Source Lab 1Team',
      members: '강예은 , 오상훈, 이다건, 홍누리',
      contents: `<진짜로 ? >는 많은 소셜 미디어가 등장한지 약 20년이 지난 오늘날, 소셜 미디어가 사회에 주는 동조현상이 우리의 사고에 미치는 영향을 짚어보기 위해 기획된 전시이다. 소셜미디어는 현대사회에 가장 빠른 정보를 전달하는 수단이자 동시대에 즉각적으로 반응하는 매체이다. 
하지만 스마트해진 사회에서 우리는 과연 정말로 스마트해졌을까요? 지식의 깊이보다는 효율성과 속도를 더 중요하게 여기고 우리에게서 생각할 기회를 빼앗고 있는 것은 아닐까요? 그리고 모두가 YES할때, 당신은 NO라고 외칠 수 있습니까? <진짜로?>는 이러한 사회현상에 주목하여 각색한 동화로 "동조 현상"을 표현한다.`,
    },
    {
      title: 'Rainbow Reflection',
      path: '/rainbow-reflection',
    },
    {
      title: 'Momo',
      path: '/momo',
    },
    {
      title: 'Happy Box',
      path: '/happy-box',
    },
    {
      title: 'Paranormal Sapiens',
      path: '/paranormal-sapiens',
    },
  ]
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
          {pages.map((page, index) => (
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
