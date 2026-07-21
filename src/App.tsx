import { TabTables } from "./Utility/DefaultTabs";
import { Separator } from "./components/ui/separator";
function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-5">
      <TabTables />
      <Separator></Separator>
    </div>
  );
}

export default App;
