import { useEffect, useState } from "react";

export const useDNDComponent = ({ defaultItens, setItem }) => {
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const [itens, setItems] = useState([]);

  useEffect(() => {
    if (itens) return setItems(defaultItens);
  }, [defaultItens]);

  const grid = 8;

  const getItemStyle = (draggableStyle) => ({
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    ...draggableStyle,
  });

  const getListStyle = () => ({
    padding: grid,
    width: "100%",
    height: "100%",
  });

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(itens, result.source.index, result.destination.index);

    setItems(items);
    setItem(items);
  };

  return [getItemStyle, getListStyle, itens, onDragEnd];
};
