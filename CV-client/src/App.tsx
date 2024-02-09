import { CareerTimeline } from "./Pages/Career";
import { StickyNavbar } from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <div>
      <StickyNavbar></StickyNavbar>
      <CareerTimeline />
    </div>
  );
}

export default App;
