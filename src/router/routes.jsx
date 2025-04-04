import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Index from "../../pages/Index";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Index />} />)
);

export default router;
