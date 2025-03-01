//redux/langSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { languageTypes } from "../../types";



const initialState:{ lang: languageTypes } = {
  lang: (localStorage.getItem('language')  as languageTypes )  || 'english',
  };

  const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
      toggleLang: (state) => {
        state.lang = state.lang === "english" ? "ukrainian" : "english";
        localStorage.setItem('language', state.lang);
        document.documentElement.setAttribute('data-lang', state.lang);
      },
    },
  });
  export const { toggleLang } = langSlice.actions;
  // Export reducer
  export const langReducer =  langSlice.reducer;