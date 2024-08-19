import { useContext } from "react";
import SearchPanel from "./searchPanel";
import { AppContext } from "../context.tsx/appContext";
import WidgetSidePanel from "../pages/widgetSidePanel";

export default function Navbar() {
  const { showWidgetSidePanel, setShowWidgetSidePanel } =
    useContext(AppContext);
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="flex items-center gap-2">
        <SearchPanel />
        <button
          className="bg-black text-white rounded-full px-2 py-[6px]"
          onClick={() => setShowWidgetSidePanel((oldState) => !oldState)}
        >
          Add Widget
        </button>
        {showWidgetSidePanel && <WidgetSidePanel />}
      </div>
    </div>
  );
}
