import { useAll } from '../../hooks/useAll'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { toggleLang } from '../../redux/lang/langSlice'


const LangChanger = () => {
    const {language} = useAll()
    const dispatch = useAppDispatch()


  return (
      <button
        className="btn btn-ghost text-[var(--text-color)] bg-transparent"
        onClick={()=>dispatch(toggleLang())}
        aria-label="Toggle Theme"
      >
        {language === 'english' ? 'en' : 'ua'}
      </button>
  )
}

export default LangChanger