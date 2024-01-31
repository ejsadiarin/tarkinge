import { useDroppable } from "@dnd-kit/core";
// import { PropsWithRef } from "react";

export default function CardContainer(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
    backgroundColor: isOver ? 'gray' : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} className="w-full h-full">
      {props.children}
    </div>
  );
}
