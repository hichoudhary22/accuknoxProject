import { useEffect, useState } from "react";
import widgetsStore from "../data/widgetStore";
import { widget as widgetDefination } from "../data/defination";
import SearchResultPanel from "./searchResultPanel";

export default function SearchPanel() {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState<Array<widgetDefination>>([]);
  const [showSearchResultPanel, setShowSearchResultPanel] = useState(false);

  function handleSearch() {
    setShowSearchResultPanel(true);
    setSearchResult([]);
    widgetsStore.map((category) =>
      category.widgets.map((widget) => {
        if (widget.title.match(searchText))
          setSearchResult((prevState) => [...prevState, widget]);
      })
    );
  }

  useEffect(() => {
    if (!showSearchResultPanel) setSearchResult([]);
  }, [showSearchResultPanel]);

  return (
    <div className=" border-black border rounded-full">
      <input
        type="text"
        className="focus:outline-none py-1 px-2 rounded-full"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search For Widget Title"
      />
      <button
        className="bg-black text-white rounded-full py-[3px] px-[6px] m-[2px] justify-center self-center"
        onClick={handleSearch}
      >
        Search
      </button>
      {showSearchResultPanel && (
        <SearchResultPanel
          searchResult={searchResult}
          setShowSearchResultPanel={setShowSearchResultPanel}
        />
      )}
    </div>
  );
}
