import React, { createContext, useReducer } from "react";
import Toast from "../components/toast";

// Create context
export const ToastContext = createContext();

// Initial state
const initialState = {
  isToast: false,
  message: "",
};

// Reducer function
const toastReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_TOAST":
      return {
        ...state,
        isToast: true,
        message: action.payload,
      };
    case "HIDE_TOAST":
      return {
        ...state,
        isToast: false,
        message: "",
      };
    default:
      return state;
  }
};

// Provider component
export const ToastProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, initialState);

  const showToast = (message) => {
    dispatch({ type: "SHOW_TOAST", payload: message });

    setTimeout(() => {
      dispatch({ type: "HIDE_TOAST" });
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ state, showToast }}>
    <Toast message={state.message} show={state.isToast} className="z-[999] fixed bottom-12 right-5 z-50 transform transition-all duration-[3000] opacity-70 translate-y-0" />
      {children}
    </ToastContext.Provider>
  );
};
