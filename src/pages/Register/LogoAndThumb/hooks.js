import { useEffect, useState } from "react";
import api from "../../../services/api";
import filesize from "filesize";
import { toast } from "../../../Components/Toast";

export const useLogoAndThumb = () => {
  const [restaurant, setRestaurant] = useState("");
  const [thumbNail, setThumbNail] = useState(null);
  const [logo, setLogo] = useState(null);

  const [showPopupThumb, setShowPopupThumbnail] = useState(false);
  const [showPopupLogo, setShowPopupLogo] = useState(false);

  const [dimension, setDimension] = useState(null);

  useEffect(() => {
    async function GetDetails() {
      const { data } = await api.get("/partner/profile");

      setRestaurant(data);
    }
    GetDetails();
  }, []);

  const handleUploadThumbail = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const uploadedFiles = {
      file,
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    };

    setThumbNail(uploadedFiles);
    setShowPopupThumbnail(true);
  };

  const handleUploadLogo = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const uploadedFiles = {
      file,
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    };

    setLogo(uploadedFiles);
    setShowPopupLogo(true);
  };

  async function onImgLoad({ target: img }) {
    setDimension({ height: img.offsetHeight, width: img.offsetWidth });
  }

  async function changeThumbnail() {
    try {
      toast.info("Salvando suas informações, aguarde");

      const data = new FormData();

      if (thumbNail) data.append("thumb", thumbNail.file);

      await api.put(`/change/thumb`, data);

      toast.success("Imagem salva!");
      setShowPopupThumbnail(false);
    } catch {
      toast.error("Falha ao alterar imagem");
    }
  }

  async function changeLogo() {
    try {
      toast.info("Salvando suas informações, aguarde");

      const data = new FormData();

      if (logo) data.append("logo", logo.file);

      await api.put(`/change/logo`, data);

      toast.success("Imagem salva!");
      setShowPopupLogo(false);
    } catch {
      toast.error("Falha ao alterar imagem");
    }
  }

  return [handleUploadThumbail, handleUploadLogo];
};
