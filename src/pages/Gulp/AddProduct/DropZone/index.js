import React from "react";
import { useDropzone } from "react-dropzone";
import { Image, Trash } from "react-feather";
import { useDropZone as hooks } from "./hooks";

import {
  Section,
  Text,
  Container,
  ImageUploaded,
  ContainerRoot,
  ContainerHeader,
  ContainerDragAndDrop,
} from "./styles";

function DropZone({
  avatar,
  uploadedFiles,
  setUploadedFile,
  deleteProductAvatar,
}) {
  const [handleUpload, setError, error] = hooks({
    uploadedFiles,
    setUploadedFile,
  });
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    onDrop: handleUpload,
    onDropRejected: () => setError(true),
    onDropAccepted: () => setError(false),
  });

  return (
    <>
      <ContainerDragAndDrop>
        <ContainerHeader
          onClick={
            uploadedFiles ? () => setUploadedFile(null) : deleteProductAvatar
          }
        >
          {(avatar || uploadedFiles) && (
            <>
              <Trash />
              <Text margin>Remover imagem</Text>
            </>
          )}
        </ContainerHeader>
        <Section error={error}>
          <ContainerRoot {...getRootProps()}>
            <input {...getInputProps()} />
            <Container>
              {uploadedFiles || avatar ? (
                <ImageUploaded
                  src={uploadedFiles ? uploadedFiles.preview : avatar}
                />
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
      </ContainerDragAndDrop>
    </>
  );
}

export default DropZone;
