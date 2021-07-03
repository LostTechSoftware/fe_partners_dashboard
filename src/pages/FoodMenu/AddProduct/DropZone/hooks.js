import { useState } from "react";
import filesize from "filesize";

export const useDropZone = () => {
  const [uploadedFiles, setUploadedFile] = useState(null);
  const [error, setError] = useState(false);

  const handleUpload = (files) => {
    if (!files.length) return;

    const uploadedFiles = files.map((file) => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));
    console.log("sucesso");
    console.log(uploadedFiles[0].preview);
    setUploadedFile(uploadedFiles[0]);
  };

  return [uploadedFiles, handleUpload, setError, error];
};
