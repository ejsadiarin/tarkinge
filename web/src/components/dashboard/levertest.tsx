import { DndContext, DragEndEvent } from '@dnd-kit/core';
import Card from './card';
import CardContainer from './card-container';
import { useState } from 'react';

export default function LeverTest() {
  const containers = ["In Progress", "Review", "Done"];
  const [parent, setParent] = useState<string | null>(null);

  return (
    <main className="w-full h-full">
      {/* this is the kanban with filters (or sorters) */}
      <section className="flex flex-col w-full h-full">

        <section>
          <h1 className="text-5xl">Levers</h1>
          {/* yearly, monthly, weekly, daily filters */}
        </section>

        <DndContext onDragEnd={handleDragEnd}>
          <section className="flex justify-between w-full h-full p-10 ">
            {/* TODO: handle parent === null ? no display (need to '+' button to add new card), else display in backlog/default */}
            {parent === null ? (
              <div className="flex flex-col">
                <h1 className="font-bold text-xl">Backlog</h1>
                <CardContainer key="Backlog" id="Backlog">
                  <Card id="draggable">Drag me</Card>
                </CardContainer>
              </div>
            ) : (
              <div className="flex flex-col">
                <h1 className="font-bold text-xl">Backlog</h1>
                <CardContainer key="Backlog" id="Backlog">
                  {parent === "Backlog" ? (
                    <Card id="draggable">Drag me</Card>
                  ) : 'Empty...'}
                </CardContainer>
              </div>
            )}

            {containers.map((containerName, idx) => (
              <div className="flex flex-col">
                <h1 className="font-bold text-xl">{containerName}</h1>
                <CardContainer key={idx} id={containerName}>
                  {parent === containerName ? (
                    <Card id="draggable">Drag me</Card>
                  ) : 'Drop here'}
                </CardContainer>
              </div>
            ))}
          </section>
        </DndContext>

      </section>
    </main>
  );

  function handleDragEnd(event: DragEndEvent) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id as string : null);
  }
}
