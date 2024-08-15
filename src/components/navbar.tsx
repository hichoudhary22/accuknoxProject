import { useContext } from "react";
import SearchPanel from "./searchPanel";
import { AppContext } from "../context.tsx/appContext";
import WidgetSidePanel from "../pages/widgetSidePanel";

export default function Navbar() {
  const { showWidgetSidePanel, setShowWidgetSidePanel } =
    useContext(AppContext);
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl">Dashboard</h1>
      <div className="flex items-center gap-2">
        <SearchPanel />
        <button onClick={() => setShowWidgetSidePanel((oldState) => !oldState)}>
          add widget
        </button>
        {showWidgetSidePanel && <WidgetSidePanel />}
      </div>
    </div>
  );
}
