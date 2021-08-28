import { useState, createRef, useContext, useEffect } from "react";
import api from "../../services/api";
import { toast } from "../../Components/Toast";
import { useHistory } from "react-router-dom";
import AuthContext from "../../contexts/acessLevel";
import { getLevel } from "../../services/getLevel";
import { identify } from "../../utils/identify";

export const LoginHooks = () => {
  const { setLevel } = useContext(AuthContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [access, setAccess] = useState([]);
  const [showLogin, setShowLogin] = useState(false);

  function getMessageHour() {
    const now = new Date();

    if (now.getHours() >= 0 && now.getHours() < 5) {
      return "Boa noite";
    } else if (now.getHours() >= 5 && now.getHours() < 12) {
      return "Bom dia";
    } else if (now.getHours() >= 12 && now.getHours() < 18) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  }

  const restaurantId = localStorage.getItem("_id");

  const recaptchaRef = createRef();

  async function ClickForgotPassword() {
    history.push("/forgotpassword");
  }

  async function tryLogin(event) {
    event.preventDefault();
    recaptchaRef.current.execute();
    toast.info("Aguarde um pouco, estamos buscando seus dados");

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
        restaurant,
      } = response.data.user;
      const restaurantLocation = JSON.stringify(
        response.data.user.location.coordinates
      );

      localStorage.setItem("_id", restaurant || _id);

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("_id", restaurant || _id);
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

      identify({ email, name });

      setLevel(await getLevel());
      history.push("/requests");
    } catch (error) {
      toast.error("Usúario ou senha incorretos, tente novamente!");
    }
  }

  useEffect(() => {
    async function GetAccess() {
      const { data } = await api.get(`/partner/access/${restaurantId}`);

      setAccess(data);
    }
    GetAccess();
  }, []);

  return [
    email,
    setEmail,
    password,
    setPassword,
    recaptchaRef,
    ClickForgotPassword,
    tryLogin,
    access,
    showLogin,
    setShowLogin,
    getMessageHour,
  ];
};
