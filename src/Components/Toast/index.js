import { toast as toastLib } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const dark = (message) =>
  toastLib.dark(message.toUpperCase(), {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const defaultToast = (message) =>
  toastLib(message.toUpperCase(), {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const toast = {
  info: (message) =>
    localStorage.getItem("theme") === "dark"
      ? dark(message)
      : defaultToast(message),
  error: (message) =>
    localStorage.getItem("theme") === "dark"
      ? dark(message)
      : defaultToast(message),
  warning: (message) =>
    localStorage.getItem("theme") === "dark"
      ? dark(message)
      : defaultToast(message),
  message: (message) =>
    localStorage.getItem("theme") === "dark"
      ? dark(message)
      : defaultToast(message),
};
