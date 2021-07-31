import { useState } from "react";
import { toast } from "../../../../Components/Toast";

import api from "../../../../services/api";

export const useAddAccess = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [level, setLevel] = useState(0);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  async function CreateNewAcess() {
    try {
      if (!email || !password || !name)
        return toast.warning("Preencha todos os dados");

      setLoading(true);
      await api.post("/partner/access", { email, password, level, name });

      toast.success("Novo acesso criado");
      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Erro ao criar novo acesso, tente novamente!");
    }
  }

  return [
    email,
    setEmail,
    password,
    setPassword,
    level,
    setLevel,
    name,
    setName,
    CreateNewAcess,
    loading,
  ];
};
