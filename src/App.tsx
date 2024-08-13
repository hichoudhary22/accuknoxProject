import { useState } from "react";
import Navbar from "./components/navbar";
import WidgetHome from "./pages/widgetHome";
import WidgetSidePanel from "./pages/widgetSidePanel";
import widgetsStore from "./data/widgetStore";
import { categories } from "./data/defination";

function App() {
  const [showWidgetSidePanel, setShowWidgetSidePanel] = useState(false);
  const [widgetStoreState, setWidgetStoreState] =
    useState<Array<categories>>(widgetsStore);

  return (
    <main className="p-4">
      <Navbar setShowWidgetSidePanel={setShowWidgetSidePanel} />
      <WidgetHome
        widgetStoreState={widgetStoreState}
        setShowWidgetSidePanel={setShowWidgetSidePanel}
      />
      {showWidgetSidePanel && (
        <WidgetSidePanel
          widgetStoreState={widgetStoreState}
          setShowWidgetSidePanel={setShowWidgetSidePanel}
        />
      )}
    </main>
  );
}

export default App;
