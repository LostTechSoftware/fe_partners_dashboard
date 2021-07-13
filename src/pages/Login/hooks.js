import { useState, createRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

export const LoginHooks = () => {
  const history = useHistory();
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const recaptchaRef = createRef();

  async function ClickForgotPassword() {
    history.push("/forgotpassword");
  }

  function onChange(value) {
    setToken(value);
  }

  async function tryLogin(event) {
    event.preventDefault();
    recaptchaRef.current.execute();
    setLoading(true);
    try {
      const response = await api.post("/restaurant/authenticate", {
        email,
        password,
      });

      const { token } = response.data;
      const {
        _id,
        name,
        avatar,
        telephone,
        uf,
        city,
        street,
        Number,
        delay,
        delayRemove,
      } = response.data.user;
      const restaurantLocation = JSON.stringify(
        response.data.user.location.coordinates
      );

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("_id", _id);
      sessionStorage.setItem("avatar", avatar);
      sessionStorage.setItem("restaurantName", name);
      sessionStorage.setItem("restaurantLocation", restaurantLocation);
      sessionStorage.setItem("delay", delay);
      sessionStorage.setItem("delayToWithdrawal", delayRemove);

      sessionStorage.setItem("restaurantPhone", telephone);
      sessionStorage.setItem(
        "restaurantAddress",
        `Rua ${street} nº${Number}, ${city} - ${uf}`
      );

      console.log("USER:");
      console.log(response.data.user);

      setLoading(false);
      history.push("/requests");
    } catch (error) {
      setLoading(false);
      toast.error("usúario ou senha incorretos, tente novamente!");
    }
  }

  return [
    history,
    token,
    setToken,
    email,
    setEmail,
    loading,
    setLoading,
    password,
    setPassword,
    recaptchaRef,
    ClickForgotPassword,
    onChange,
    tryLogin,
  ];
};
