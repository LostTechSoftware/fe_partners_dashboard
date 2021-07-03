import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Menu, Trash2 } from "react-feather";
import { useDNDComponent } from "./hooks";
import { ContainerFlex, Title } from "./styles";

export default function DNDComponent({ defaultItens, setItem, children }) {
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
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(provided.draggableProps.style)}
                  >
                    <ContainerFlex>
                      <Menu />
                      <Title>{item.title}</Title>
                      <Trash2 />
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
