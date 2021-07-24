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
  ContainerDragAndDrop,
} from "./styles";

function DropZone({ avatar, uploadedFiles, setUploadedFile, isEmpty }) {
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
        <Section isEmpty={isEmpty} error={error}>
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
                    <p className="title">Adicionar story</p>
                    <p className="textDrop">
                      Arraste uma imagem para cá <br /> ou <br />
                      <p className="link">Clique aqui</p>
                    </p>
                  </Text>
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
