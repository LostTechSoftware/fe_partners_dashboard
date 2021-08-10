import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Menu, Trash } from "react-feather";
import { useDNDComponent } from "./hooks";
import { ContainerFlex, Title, ContainerFlexTitle } from "./styles";

export default function DNDComponent({ defaultItens = [], setItem, children }) {
  const [getItemStyle, getListStyle, itens, onDragEnd] = useDNDComponent({
    defaultItens,
    setItem,
  });

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {itens.map((item, index) => (
              <Draggable key={item._id} draggableId={item._id} index={index}>
                {(provided1) => (
                  <div
                    ref={provided1.innerRef}
                    {...provided1.draggableProps}
                    {...provided1.dragHandleProps}
                    style={getItemStyle(provided1.draggableProps.style)}
                  >
                    <ContainerFlex>
                      <Menu />

                      <ContainerFlexTitle>
                        <Title>{item.title}</Title>
                      </ContainerFlexTitle>
                    </ContainerFlex>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
            {children}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
