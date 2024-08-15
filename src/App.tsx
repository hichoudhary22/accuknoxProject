import Navbar from "./components/navbar";
import WidgetHome from "./pages/widgetHome";
import AppContextProvider from "./context.tsx/appContext";

export default function App() {
  return (
    <main className="p-4">
      <AppContextProvider>
        <Navbar />
        <WidgetHome />
      </AppContextProvider>
    </main>
  );
}
