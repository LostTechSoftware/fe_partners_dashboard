import { useState } from "react";
import filesize from "filesize";
import api from "../../../../services/api";

export const useDropZone = ({ setUploadedFile }) => {
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

    setUploadedFile(uploadedFiles[0]);
  };

  return [handleUpload, setError, error];
};
