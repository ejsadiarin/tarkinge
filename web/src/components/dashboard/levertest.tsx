import { DndContext, DragEndEvent } from '@dnd-kit/core';
import Card from '@/components/dashboard/card';
import CardContainer from '@/components/dashboard/card-container';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function LeverTest() {
  const containers = ["Backlog", "In Progress", "Done"];
  const [parent, setParent] = useState<string | null>(null);

  function handleDragEnd(event: DragEndEvent) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id as string : null);
  }

  function handleAddCard() {
  }

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

            {/* {parent === null ? ( */}
            {/*   <div className="flex flex-col"> */}
            {/*     <h1 className="font-bold text-xl">Backlog</h1> */}
            {/*     <CardContainer key="Backlog" id="Backlog"> */}
            {/*       <Card id="draggable">Drag me</Card> */}
            {/*     </CardContainer> */}
            {/*   </div> */}
            {/* ) : ( */}
            {/*   <div className="flex flex-col"> */}
            {/*     <h1 className="font-bold text-xl">Backlog</h1> */}
            {/*     <CardContainer key="Backlog" id="Backlog"> */}
            {/*       {parent === "Backlog" ? ( */}
            {/*         <Card id="draggable">Drag me</Card> */}
            {/*       ) : 'Empty...'} */}
            {/*     </CardContainer> */}
            {/*   </div> */}
            {/* )} */}

            <div className="flex gap-10 w-full h-full">
              {containers.map((containerName, idx) => (
                <div className="flex flex-col w-full h-full">
                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-xl">{containerName}</h1>
                    {/* dialog component here from shadcn ui */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">+</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add a new card</DialogTitle>
                          <DialogDescription>
                            Enter a title for the new card
                          </DialogDescription>
                        </DialogHeader>
                        <input
                          type="text"
                          placeholder="Title"
                          className="w-full p-2"
                        />
                        <input
                          type="text"
                          placeholder="Description"
                          className="w-full h-20 p-2"
                        />
                        <Button onClick={handleAddCard} variant="outline">Add</Button>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <CardContainer key={idx} id={containerName}>
                    {parent === containerName ? (
                      <Card id="draggable">Drag me</Card>
                    ) : 'Drop here'}
                  </CardContainer>
                </div>
              ))}
            </div>
          </section>
        </DndContext>

      </section>
    </main>
  );
}
