import { createContext, Dispatch, SetStateAction, useState } from "react";
import { categories } from "../data/defination";
import widgetsStore, { activeWidgets } from "../data/widgetStore";

type AppContextType = {
  appWidgetData: Array<categories>;
  showWidgetSidePanel: boolean;
  setShowWidgetSidePanel: Dispatch<SetStateAction<boolean>>;
  activeWidgetArray: Array<number>;
  setActiveWidgetArray: Dispatch<SetStateAction<Array<number>>>;
};

export const AppContext = createContext<AppContextType>({
  appWidgetData: widgetsStore,
  showWidgetSidePanel: true,
  setShowWidgetSidePanel: () => {},
  activeWidgetArray: [],
  setActiveWidgetArray: () => {},
});

export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [appWidgetData] = useState<Array<categories>>(widgetsStore);
  const [showWidgetSidePanel, setShowWidgetSidePanel] = useState(false);
  const [activeWidgetArray, setActiveWidgetArray] = useState(activeWidgets);

  const value = {
    appWidgetData,
    showWidgetSidePanel,
    setShowWidgetSidePanel,
    activeWidgetArray,
    setActiveWidgetArray,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
