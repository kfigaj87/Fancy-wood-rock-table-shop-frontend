import AppNav from "./components/AppNav";
import AppRoutes from "./routes/AppRoutes";

import "./App.css";
import { CustomizationProvider } from "./contexts/Customization";

function App() {
  return (
    <div className="app">
      <CustomizationProvider>
        <AppNav />
        <AppRoutes />
      </CustomizationProvider>
    </div>
  );
}

export default App;
