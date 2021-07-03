import React from "react";
import { useDropzone } from "react-dropzone";
import { Image } from "react-feather";
import { useDropZone as hooks } from "./hooks";

import {
  Section,
  Text,
  Container,
  ImageUploaded,
  ContainerRoot,
} from "./styles";

function DropZone() {
  const [uploadedFiles, handleUpload, setError, error] = hooks();
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    onDrop: handleUpload,
    onDropRejected: () => setError(true),
    onDropAccepted: () => setError(false),
  });

  return (
    <Section error={error}>
      <ContainerRoot {...getRootProps()}>
        <input {...getInputProps()} />
        <Container>
          {uploadedFiles ? (
            <ImageUploaded src={uploadedFiles.preview} />
          ) : (
            <>
              <Image size={80} />
              <Text>
                {error
                  ? "Só é aceito PNG, JPG, JPEG, WEBAP, GIF"
                  : "Arraste sua imagem para cá"}
              </Text>
              {!error && <Text>ou clique aqui</Text>}
            </>
          )}
        </Container>
      </ContainerRoot>
    </Section>
  );
}

export default DropZone;
