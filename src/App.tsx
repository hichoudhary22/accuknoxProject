import { useState } from "react";
import Navbar from "./components/navbar";
import WidgetHome from "./pages/widgetHome";
import WidgetSidePanel from "./pages/widgetSidePanel";

function App() {
  const [showWidgetSidePanel, setShowWidgetSidePanel] = useState(false);

  return (
    <main className="p-4">
      <Navbar setShowWidgetSidePanel={setShowWidgetSidePanel} />
      <WidgetHome setShowWidgetSidePanel={setShowWidgetSidePanel} />
      {showWidgetSidePanel && (
        <WidgetSidePanel setShowWidgetSidePanel={setShowWidgetSidePanel} />
      )}
    </main>
  );
}

export default App;
