import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export const usePassword = () => {
  const history = useHistory();
  const [password, setPassword] = useState("");

  const userName = sessionStorage.getItem("userName");
  const userEmail = sessionStorage.getItem("userEmail");

  async function tryLogin(event) {
    event.preventDefault();
    try {
      const response = await api.post("/restaurant/authenticate", {
        email: userEmail,
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

      history.push("/requests");
    } catch (error) {
      toast.error("Usúario ou senha incorretos, tente novamente!");
    }
  }

  return [password, setPassword, tryLogin, userName, userEmail];
};
