import { useEffect } from "react";
import { useParams } from "react-router";
import api from "../../services/api";

export const useTester = () => {
  const { email } = useParams();

  useEffect(() => {
    async function sendEmail() {
      await api.get(`/new/tester/${email}`);
    }
    sendEmail();
  }, [email]);

  return [];
};
