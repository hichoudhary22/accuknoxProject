import SearchPanel from "./searchPanel";

export default function Navbar({
  setShowWidgetSidePanel,
}: {
  setShowWidgetSidePanel: (arg0: boolean) => void;
}) {
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl">Dashboard</h1>
      <div className="flex items-center gap-2">
        <SearchPanel />
        <button onClick={() => setShowWidgetSidePanel(true)}>add widget</button>
      </div>
    </div>
  );
}
