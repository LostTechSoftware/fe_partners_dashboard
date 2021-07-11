import React from "react";
import { Plus } from "react-feather";

import Settings from "..";
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
} from "./styles";

function Access() {
  const [getRandomColor] = useAccess();

  return (
    <Settings>
      <GridView>
        <Card>
          <UserAvatar
            background={getRandomColor()}
            src="https://avatars.dicebear.com/api/micah/${selectedOrders.user.name}.svg"
          />
          <BasicInfo>
            <Name>Cameron Williamson</Name>
            <Office>Dono(a)</Office>
            <Email>cameron.williamson@example.com</Email>
          </BasicInfo>
        </Card>

        <Card>
          <UserAvatar
            background={getRandomColor()}
            src="https://avatars.dicebear.com/api/micah/${selectedOrders.user.name}.svg"
          />
          <BasicInfo>
            <Name>Cameron Williamson</Name>
            <Office>Dono(a)</Office>
            <Email>cameron.williamson@example.com</Email>
          </BasicInfo>
        </Card>

        <Card>
          <UserAvatar
            background={getRandomColor()}
            src="https://avatars.dicebear.com/api/micah/${selectedOrders.user.name}.svg"
          />
          <BasicInfo>
            <Name>Cameron Williamson</Name>
            <Office>Dono(a)</Office>
            <Email>cameron.williamson@example.com</Email>
          </BasicInfo>
        </Card>

        <Card>
          <UserAvatar
            background={getRandomColor()}
            src="https://avatars.dicebear.com/api/micah/${selectedOrders.user.name}.svg"
          />
          <BasicInfo>
            <Name>Cameron Williamson</Name>
            <Office>Dono(a)</Office>
            <Email>cameron.williamson@example.com</Email>
          </BasicInfo>
        </Card>

        <AddProductButton>
          <Plus size={70} color="#ffe115" />
          <Text>Adicionar pessoa</Text>
        </AddProductButton>
      </GridView>
    </Settings>
  );
}

export default Access;
