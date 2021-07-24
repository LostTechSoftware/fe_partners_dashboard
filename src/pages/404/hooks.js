import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const use404Page = () => {
  const [timeout, setTimeouted] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/");
      setTimeouted(true);
    }, 10000);
  }, []);

  return [timeout];
};
