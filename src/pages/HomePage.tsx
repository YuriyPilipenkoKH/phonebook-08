
import { HomeTitle, HomeWrapper } from './Pages.styled'
import { useLanguage } from '../hooks/useLanguage'

// import Lottie from 'lottie-react'

const HomePage = () => {
  const lang = useLanguage()
  return (
    <HomeWrapper  >
    <HomeTitle  >
     {lang.appTitle}  
    </HomeTitle>
    <span>
    {lang.appUnderTitle}
      </span>
      {/* <Lottie animationData={animationData} className="football-player" /> */}

  </HomeWrapper>
  )
}

export default HomePage