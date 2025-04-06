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
import { ProtectedRoute, RedirectAuthenticatedUser } from "./ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<RedirectAuthenticatedUser><Login /></RedirectAuthenticatedUser>} />
      <Route path="/register" element={<RedirectAuthenticatedUser><Register /></RedirectAuthenticatedUser>} />
      <Route path="/create_account" element={<RegisterRedirection />} />
      <Route path="*" element={<Page_404 />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Index />} />
      </Route>
    </Route>
  )
);

export default router;
