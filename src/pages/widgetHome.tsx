import { useContext } from "react";
import { AppContext } from "../context.tsx/appContext";
import WidgetSidePanel from "./widgetSidePanel";

export default function WidgetHome() {
  const {
    activeWidgetArray,
    setActiveWidgetArray,
    appWidgetData,
    showWidgetSidePanel,
    setShowWidgetSidePanel,
  } = useContext(AppContext);
  return appWidgetData.map((category) => (
    <section key={category.id} className="border-b border-black p-2 m-2">
      <h1 className="text-xl font-bold my-2 uppercase">{category.name}</h1>
      <div className="flex gap-2">
        {category.widgets.map((widget) => {
          if (activeWidgetArray.includes(widget.id)) {
            return (
              <div
                key={widget.id}
                className="flex border border-black rounded-md p-2"
              >
                <div className="m-4 flex">
                  <img
                    src={widget.image}
                    className="border p-4 m-2 rounded-md"
                    alt="widget image"
                    width={70}
                    height={70}
                  />
                  <div>
                    <p className="text-xl font-semiboldb">{widget.title}</p>
                    <p className="text-sm font-thin">{widget.details}</p>
                  </div>
                </div>
                <button
                  className="self-start border border-black px-2 py-[2px] rounded-full bg-black text-white"
                  onClick={() =>
                    setActiveWidgetArray((oldArray) =>
                      oldArray.filter((widgetId) => widgetId !== widget.id)
                    )
                  }
                >
                  X
                </button>
              </div>
            );
          }
        })}
        <div className="flex">
          <button
            className="bg-black text-white rounded-md p-2 justify-center self-center"
            onClick={() => setShowWidgetSidePanel(true)}
          >
            Add Widget
          </button>
        </div>
        {showWidgetSidePanel && <WidgetSidePanel />}
      </div>
    </section>
  ));
}
