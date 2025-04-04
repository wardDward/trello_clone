import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Index from "../pages/Index";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import RegisterRedirection from "../pages/auth/RegisterRedirection";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create_account/:token" element={<RegisterRedirection />} />
    </Route>
  )
);

export default router;
