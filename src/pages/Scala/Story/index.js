import React from "react";
import Scala from "..";
import Modal from "../../../Components/Modal";
import DropZone from "./DropZone";
import { useStory } from "./hooks";

import {
  Container,
  StoryContainer,
  StoryImage,
  ContainerDropZone,
  ContainerModal,
  EmptyContainer,
  ContainerDropZoneEmpty,
} from "./styles";

function Story() {
  const [
    showModal,
    setShowModal,
    selectedStory,
    setSelectedStory,
    stories,
    statuses,
    uploadedFiles,
    setUploadedFile,
    DeleteStory,
  ] = useStory();

  return (
    <Scala>
      {stories.length ? (
        <Container>
          {stories.map((story) => (
            <StoryContainer
              onClick={() => {
                setShowModal(!showModal);
                setSelectedStory(story);
              }}
            >
              <p>{statuses[story.status]}</p>
              <StoryImage src={story.image} />
            </StoryContainer>
          ))}

          <ContainerDropZone>
            <DropZone
              uploadedFiles={uploadedFiles}
              setUploadedFile={setUploadedFile}
            />
          </ContainerDropZone>
        </Container>
      ) : (
        <EmptyContainer>
          <ContainerDropZoneEmpty>
            <DropZone
              isEmpty
              uploadedFiles={uploadedFiles}
              setUploadedFile={setUploadedFile}
            />
          </ContainerDropZoneEmpty>
        </EmptyContainer>
      )}
      {showModal && (
        <Modal
          title={statuses[selectedStory.status]}
          showTrash
          displayBottom
          showDefaultButton={false}
          cancel={() => setShowModal(!showModal)}
          onClickTrash={DeleteStory}
        >
          <ContainerModal>
            <StoryImage src={selectedStory.image} />
          </ContainerModal>
        </Modal>
      )}
    </Scala>
  );
}

export default Story;
