import { DndContext } from "@dnd-kit/core";
import CardContainer from "./card-container";
import Card from "./card";

type CardType = {
  title: string;
  description: string;
  month: string;
}

const Filters = ["weekly", "monthly", "yearly"];
const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"];


export default function Levers() {
  const containers = ["A", "B", "C"];
  const [parent, setParent] = useState(null);

  function handleDragEnd(event) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
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
          {/* {parent === null ? draggable} */}
          {/* this section is rendered based on the filter */}
          <section className="flex flex-col">
            <div className="flex gap-5">
              {Filters.map((filter) => (
                <button className="bg-gray-900 rounded-full">{filter}</button>
              ))}
            </div>
            {/* this renders the data in kanban style */}
            <section className="flex justify-between w-full h-full p-10 ">
              <div>
                <h1>Backlog</h1>

                {/* Card Container (droppable): card components go here */}
                {containers.map((id) => (
                  <CardContainer key={id} id={id} className="flex flex-col gap-5" >
                    {parent === id ? (
                      <Card id="draggable" className="bg-yellow-500 text-black rounded-md shadow-xl p-5" />
                    ) : 'Drop here'}
                    {/* data in Card component (draggable) should be from database */}
                    {/* <div className="bg-yellow-500 text-black rounded-md shadow-xl p-5"> */}
                    {/*   <h1>test</h1> */}
                    {/* </div> */}
                    {/* <div className="bg-yellow-500 text-black rounded-md shadow-xl p-5"> */}
                    {/*   <h1>test</h1> */}
                    {/* </div> */}
                    {/* <div className="bg-yellow-500 text-black rounded-md shadow-xl p-5"> */}
                    {/*   <h1>test</h1> */}
                    {/* </div> */}
                  </CardContainer>
                ))}

              </div>
              <div>
                <h1>In Progress</h1>
                {/* Card components go here */}
              </div>
              <div>
                <h1>Done</h1>
                {/* Card components go here */}
              </div>
            </section>
          </section>
        </DndContext>
      </section>
    </main>
  );
}
