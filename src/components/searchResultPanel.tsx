import { widget } from "../data/defination";

export default function SearchResultPanel({
  searchResult,
  setShowSearchResultPanel,
}: {
  searchResult: Array<widget>;
  setShowSearchResultPanel: (arg0: boolean) => void;
}) {
  return (
    <div className="z-10 absolute border border-black p-4 m-2 flex flex-col bg-white rounded-md">
      <button
        onClick={() => setShowSearchResultPanel(false)}
        className="bg-black text-white p-2 rounded-md sticky top-0"
      >
        X
      </button>
      {searchResult.length > 0 ? (
        <div className="overflow-scroll max-h-[80vh] gap-2 flex flex-col my-2">
          {searchResult.map((widget) => (
            <div
              key={widget.id}
              className="flex gap-2 border border-black p-2 rounded-md bg-white"
            >
              <img
                src={widget.image}
                className="border p-4 m-2 rounded-md"
                alt="widget image"
                width={70}
                height={70}
              />
              <div>
                <h1 className="text-xl">{widget.title}</h1>
                <p className="">{widget.details}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>no widget found</p>
        </div>
      )}
    </div>
  );
}
