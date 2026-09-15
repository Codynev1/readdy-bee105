import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Solutions from "../pages/solutions/page";
import VirtualCare from "../pages/virtual-care/page";
import Radiology from "../pages/radiology/page";
import AboutUs from "../pages/about-us/page";
import Pricing from "../pages/pricing/page";
import Partners from "../pages/partners/page";
import Blog from "../pages/blog/page";
import Contact from "../pages/contact/page";
import Support from "../pages/support/page";
import SolutionDetail from "../pages/solution-detail/page";
import { solutionDetails } from "../mocks/solutions";

const solutionRoutes: RouteObject[] = solutionDetails.map((solution) => ({
  path: solution.path,
  element: <SolutionDetail />,
}));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/solutions",
    element: <Solutions />,
  },
  {
    path: "/virtual-care",
    element: <VirtualCare />,
  },
  {
    path: "/radiology",
    element: <Radiology />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/partners",
    element: <Partners />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  ...solutionRoutes,
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;