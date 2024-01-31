import { useDraggable } from "@dnd-kit/core";
// import { PropsWithChildren } from "react";

export default function Card(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="bg-yellow-500 text-black rounded-md shadow-xl p-5 w-full">
      {props.children}
    </div>
  );
}


