import { widget } from "../data/defination";

export default function SearchResultPanel({
  searchResult,
  setShowSearchResultPanel,
}: {
  searchResult: Array<widget>;
  setShowSearchResultPanel: (arg0: boolean) => void;
}) {
  return (
    <div className="z-10 absolute border border-black p-4 m-2 gap-2 bg-white flex flex-col overflow-scroll max-h-[80vh]">
      <button
        onClick={() => setShowSearchResultPanel(false)}
        className="border border-black p-2 justify-end"
      >
        X
      </button>
      {searchResult.length > 0 ? (
        searchResult.map((widget) => (
          <div key={widget.id} className="flex gap-2 border border-black p-2">
            <p className="p-4 border border-black">image</p>
            <div>
              <h1 className="text-xl">{widget.title}</h1>
              <p className="">{widget.details}</p>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>no widget found</p>
        </div>
      )}
    </div>
  );
}
