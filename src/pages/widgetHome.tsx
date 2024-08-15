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
    <section key={category.id} className="border p-2 m-2">
      <h1 className="text-xl">{category.name}</h1>
      <div className="flex gap-2">
        {category.widgets.map((widget) => {
          if (activeWidgetArray.includes(widget.id)) {
            return (
              <div key={widget.id} className="flex flex-col border p-2">
                <button
                  className="self-end border border-black px-1"
                  onClick={() =>
                    setActiveWidgetArray((oldArray) =>
                      oldArray.filter((widgetId) => widgetId !== widget.id)
                    )
                  }
                >
                  X
                </button>
                <div className="flex p-2">
                  <p className="border p-4 m-2">image</p>
                  <div>
                    <p>{widget.title}</p>
                    <p>{widget.details}</p>
                  </div>
                </div>
              </div>
            );
          }
        })}
        <button onClick={() => setShowWidgetSidePanel(true)}>add widget</button>
        {showWidgetSidePanel && <WidgetSidePanel />}
      </div>
    </section>
  ));
}
