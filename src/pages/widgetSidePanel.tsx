import { useState } from "react";
import widgetsStore from "../data/widgetStore";

export default function WidgetSidePanel({
  setShowWidgetSidePanel,
}: {
  setShowWidgetSidePanel: (arg0: boolean) => void;
}) {
  const [activeCategory, setActiveCategory] = useState(1);
  return (
    <section className="absolute z-10 h-full top-0 right-0 bg-white border border-black p-4 flex flex-col gap-2">
      <button
        className="border border-black"
        onClick={() => setShowWidgetSidePanel(false)}
      >
        X
      </button>
      <div className="flex gap-1">
        {widgetsStore.map((category) => (
          <button
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
        {widgetsStore.map((category) => {
          if (category.id === activeCategory)
            return category.widgets.map((widget) => (
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  onChange={() => (widget.added = !widget.added)}
                  checked={widget.added}
                />
                <p>{widget.title}</p>
              </div>
            ));
        })}
      </div>
    </section>
  );
}
