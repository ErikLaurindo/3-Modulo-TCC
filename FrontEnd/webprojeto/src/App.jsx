import { useState } from "react";
import RoutesApp from "./routes";
function App() {
 const [isRegistered, setIsRegistered] = useState(false);
 const handleRegistration = () => {
   setIsRegistered(true);
 };
 return (
<div className="App">
<RoutesApp isRegistered={isRegistered} onRegister={handleRegistration} />
</div>
 );
}
export default App;