import React from "react";
import { Plus } from "react-feather";

import Settings from "..";
import { LoadingSkeleton } from "../../../Components/LoadingSkeleton";
import AddAcess from "./AddAcess";
import { useAccess } from "./hooks";

import {
  GridView,
  Card,
  UserAvatar,
  BasicInfo,
  Name,
  Office,
  Email,
  AddProductButton,
  Text,
  EmailContainer,
} from "./styles";

const renderLoading = () => {
  return (
    <Card>
      <LoadingSkeleton
        isLoading
        hasHeading
        containerHeight="100%"
        containerWidth="100%"
      />
    </Card>
  );
};

const Loading = ({ repeat = 1 }) => {
  return Array.from({ length: repeat }, () => renderLoading());
};

function Access() {
  const [getRandomColor, access, obj, showModal, setShowModal, loading] =
    useAccess();

  return (
    <Settings path="access">
      <GridView>
        {loading && <Loading repeat={4} />}

        {access.map((ac) => (
          <Card>
            <UserAvatar
              background={getRandomColor()}
              src={`https://avatars.dicebear.com/api/micah/${ac.name}.svg`}
            />
            <BasicInfo>
              <Name>{ac.name}</Name>
              <Office>{obj[ac.level]}</Office>
              <EmailContainer>
                <Email>
                  <p>{ac.email}</p>
                </Email>
              </EmailContainer>
            </BasicInfo>
          </Card>
        ))}

        <AddProductButton
          onClick={() => {
            setShowModal(true);
          }}
        >
          <Plus size={70} color="#ffe115" />
          <Text>Adicionar pessoa</Text>
        </AddProductButton>
      </GridView>

      {showModal && <AddAcess cancel={() => setShowModal(false)} />}
    </Settings>
  );
}

export default Access;
