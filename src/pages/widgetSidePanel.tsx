import { useContext, useState } from "react";
import { AppContext } from "../context.tsx/appContext";

export default function WidgetSidePanel() {
  const [activeCategory, setActiveCategory] = useState(1);
  const {
    setShowWidgetSidePanel,
    appWidgetData,
    activeWidgetArray,
    setActiveWidgetArray,
  } = useContext(AppContext);
  return (
    <section className="absolute z-10 h-full top-0 right-0 bg-white border border-black p-4 flex flex-col gap-2">
      <button
        className="border border-black px-2 py-[2px] rounded-md bg-black text-white my-1"
        onClick={() => setShowWidgetSidePanel(false)}
      >
        X
      </button>
      <div className="flex gap-1 my-2">
        {appWidgetData.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`border border-black px-2 rounded-md ${
              activeCategory === category.id && "bg-black text-white"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div>
        {appWidgetData.map((category) => {
          if (category.id === activeCategory)
            return category.widgets.map((widget) => (
              <div
                className="flex gap-1 border border-black rounded-md my-1 py-1 px-2"
                key={widget.id}
              >
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  checked={activeWidgetArray.includes(widget.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setActiveWidgetArray((oldArray) => [
                        ...oldArray,
                        widget.id,
                      ]);
                    } else {
                      setActiveWidgetArray((oldArray) =>
                        oldArray.filter((widgetId) => widgetId !== widget.id)
                      );
                    }
                  }}
                  name={widget.title}
                  id={widget.title}
                />
                <label className="cursor-pointer" htmlFor={widget.title}>
                  {widget.title}
                </label>
              </div>
            ));
        })}
      </div>
    </section>
  );
}
