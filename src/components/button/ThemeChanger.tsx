import { useEffect } from 'react';
import { useAll } from '../../hooks/useAll';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { toggleTheme } from '../../redux/theme/themeSlice';
import {MdOutlineNightlight} from 'react-icons/md';
import {MdOutlineLightMode} from 'react-icons/md';


export default function ThemeChanger() {
    const {theme} = useAll()
    const dispatch = useAppDispatch()
    useEffect(() => {
      localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);


  return (
    <button
      className="btn btn-ghost text-[var(--text-color)] "
      onClick={()=>dispatch(toggleTheme())}
      aria-label="Toggle Theme"
    >
      {theme === 'dark' 
      ? <MdOutlineNightlight size={20}/> 
      : <MdOutlineLightMode size={20}/>}
    </button>
  );
}