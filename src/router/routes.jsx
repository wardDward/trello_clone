import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Index from "../pages/Index";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import RegisterRedirection from "../pages/auth/RegisterRedirection";
import Page_404 from "../pages/Page_404";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create_account/:token" element={<RegisterRedirection />} />
      <Route path="*" element={<Page_404/>}/>
    </Route>
  )
);

export default router;
