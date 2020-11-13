  
import React from "react";

import Dropzone from "react-dropzone";

import File from '../File';
import { DropContainer, UploadMessage } from "./styles";

export default function Upload({ onUpload, file }) {
  const renderDragMessage = (isDragActive, isDragReject) => {
    if (file.name)
      // console.log(file.name)
      return <File uploadedFile={file} />
    if (!isDragActive) {
      return <UploadMessage>Arraste arquivos aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }


    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
  };

  return (
    <Dropzone accept="image/*" onDropAccepted={onUpload}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
      )}
    </Dropzone>
  );
}
