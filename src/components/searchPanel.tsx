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
    <div className=" border-black border">
      <input
        type="text"
        className="border border-black px-2"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="search for widget title"
      />
      <button onClick={handleSearch}>search</button>
      {showSearchResultPanel && (
        <SearchResultPanel
          searchResult={searchResult}
          setShowSearchResultPanel={setShowSearchResultPanel}
        />
      )}
    </div>
  );
}
