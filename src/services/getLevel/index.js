import api from "../api";

export const getLevel = async () => {
  const { data: level } = await api.get("/get/access/level");

  return level;
};
