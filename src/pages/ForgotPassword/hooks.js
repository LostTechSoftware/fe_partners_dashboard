import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export const ForgotPasswordHooks = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [isValidCode, setIsValidCode] = useState(false);
  const [token, setToken] = useState("");
  const [disabledEmail, setDisabledEmail] = useState(false);
  const [disabledToken, setDisabledToken] = useState(false);
  const [disabledPassword, setDisabledPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [equalPassword1, setEqualPassword1] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const history = useHistory();

  function validatePassword(passwordValidate) {
    if (!passwordValidate) return true;
    const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    return re.test(passwordValidate);
  }

  function validateEmail(emailValidate) {
    if (!emailValidate) return true;
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailValidate);
  }

  function validateEqualPassword() {
    if (newPassword1 === newPassword2) return setEqualPassword1(true);
    if (newPassword1 !== newPassword2) return setEqualPassword1(false);
  }

  function validateToken() {
    if (!/^\d+$/g.test(token) || token.length < 6) return setIsValidCode(false);
    if (/^\d+$/g.test(token) && token.length >= 6) return setIsValidCode(true);
  }

  useEffect(() => {
    setPasswordIsValid(validatePassword(newPassword1));
    validateEqualPassword();
    validateToken();
    setDisabledEmail(!validateEmail(email));
  }, [email, newPassword1, newPassword2, token]);

  async function onClick() {
    if (showCodeInput && !showResetPassword) {
      return setShowResetPassword(true);
    }
    if (showResetPassword) {
      return resetPassword();
    }
    if (!showCodeInput && !showResetPassword) {
      return forgotPassword();
    }
  }

  async function resetPassword() {
    if (!newPassword1) return toast.error("A senha não pode ser vazia");
    setLoading(true);
    try {
      await api.post("/restaurant/reset_password", {
        email,
        token,
        password: newPassword1,
      });
      toast.success("Sua senha foi alterada com sucesso !");
      history.push("/");
    } catch (error) {
      setLoading(false);
      toast.error("Houve um erro ao alterar sua senha");
    }
  }

  async function forgotPassword() {
    setLoading(true);
    try {
      await api.post("/restaurant/forgot_password", {
        email,
      });
      setShowCodeInput(true);
    } catch (error) {
      setLoading(false);
      toast.error("Parceiro não encontrado em nosso sistema");
    }
  }

  return [
    loading,
    setLoading,
    email,
    setEmail,
    showCodeInput,
    setShowCodeInput,
    isValidCode,
    setIsValidCode,
    token,
    setToken,
    password,
    setPassword,
    newPassword1,
    setNewPassword1,
    newPassword2,
    setNewPassword2,
    equalPassword1,
    setEqualPassword1,
    showResetPassword,
    setShowResetPassword,
    history,
    onClick,
    resetPassword,
    forgotPassword,
    disabledEmail,
    disabledToken,
    disabledPassword,
    passwordIsValid,
    validateEqualPassword,
  ];
};
