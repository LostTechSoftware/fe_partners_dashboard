import { toast as toastLib } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const isMobile = () => {
  return window.innerWidth <= 800;
};

const dark = (message) => {
  isMobile()
    ? toastLib.dark(message.toUpperCase(), {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    : toastLib.dark(message.toUpperCase(), {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
};

const defaultToast = (message) => {
  isMobile()
    ? toastLib.dark(message.toUpperCase(), {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    : toastLib(message.toUpperCase(), {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
};

const sendToast = (message) =>
  localStorage.getItem("theme") === "dark"
    ? dark(message)
    : defaultToast(message);

export const toast = {
  info: sendToast,
  error: sendToast,
  warning: sendToast,
  message: sendToast,
  success: sendToast,
};
