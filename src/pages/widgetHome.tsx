import widgetsStore from "../data/widgetStore";

export default function WidgetHome({
  setShowWidgetSidePanel,
}: {
  setShowWidgetSidePanel: (arg0: boolean) => void;
}) {
  return widgetsStore.map((category) => (
    <section key={category.id} className="border p-2 m-2">
      <h1 className="text-xl">{category.name}</h1>
      <div className="flex gap-2">
        {category.widgets.map(
          (widget) =>
            widget.added && (
              <div key={widget.id} className="flex border p-2">
                <p className="border p-4 m-2">image</p>
                <div>
                  <p>{widget.title}</p>
                  <p>{widget.details}</p>
                </div>
              </div>
            )
        )}
        <button onClick={() => setShowWidgetSidePanel(true)}>add widget</button>
      </div>
    </section>
  ));
}
