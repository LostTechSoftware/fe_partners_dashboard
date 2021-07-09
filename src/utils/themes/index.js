import { Dark } from "./dark";
import { Light } from "./light";

export const Themes = () => {
  const obj = {
    dark: Dark,
    light: Light,
  };

  if (obj[localStorage.getItem("theme")])
    return obj[localStorage.getItem("theme")];

  return Light;
};
