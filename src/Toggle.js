import { createContext, useReducer } from "react";

export const darkTheme = createContext();
const IN_STATE = { dark: false };
const ReducerTheme = (state, action) => {
  switch (action.type) {
    case "DARK":
      return { dark: !state.dark };
    default:
      return state;
  }
};
export const DarkMode = (props) => {
  const [state, dispatch] = useReducer(ReducerTheme, IN_STATE);
  return (
    <darkTheme.Provider value={{ state, dispatch }}>
      {props.children}
    </darkTheme.Provider>
  );
};
