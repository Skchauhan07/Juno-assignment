import { Navbar } from "reactstrap";
import SideNav from "./page-component/SideNav";
import Mainpage from "./pages/mainpage";
import NavHead from "./page-component/Navhead";

function App() {
  return (
    <div >
      <NavHead/>
      <SideNav/>  
      {/* <NavigationBar color="dark" /> */}
      <Mainpage />
    </div>
  );
}

export default App;
