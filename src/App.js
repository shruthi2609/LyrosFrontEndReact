import UserSignUp from './Pages/UserSignUp.js';
import UserLogin from './Pages/UserLogin.js';
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import ContactManager from './ContactManager/ContactManagerComponent.js';
import ContactManagerCookie from './ContactManager/ContactManagerComponentCookies.js';
function App() {
  return (
    
 <div>
<BrowserRouter>

<Routes>
  <Route path="/signup" element={<UserSignUp></UserSignUp>}></Route>
  <Route path="/signin" element={<UserLogin></UserLogin>}></Route>
  <Route path="/managecontacts" element={<ContactManagerCookie></ContactManagerCookie>}></Route>
</Routes>
</BrowserRouter>
 </div>
  );
}

export default App;
