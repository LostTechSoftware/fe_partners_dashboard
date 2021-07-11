import { useEffect, useState } from "react";
import api from "../../../services/api";

export const useProfile = () => {
  const [restaurant, setRestaurant] = useState("");

  useEffect(() => {
    async function GetDetails() {
      const { data } = await api.get("/partner/profile");

      setRestaurant(data);
    }
    GetDetails();
  }, []);

  return [restaurant];
};
