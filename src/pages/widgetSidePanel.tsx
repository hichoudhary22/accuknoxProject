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
        className="border border-black"
        onClick={() => setShowWidgetSidePanel(false)}
      >
        X
      </button>
      <div className="flex gap-1">
        {appWidgetData.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`border border-black px-2 ${
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
              <div className="flex gap-1" key={widget.id}>
                <input
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
                />
                <p>{widget.title}</p>
              </div>
            ));
        })}
      </div>
    </section>
  );
}
