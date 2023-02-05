import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import AuthorizeRoute from "./components/api-authorization/AuthorizeRoute";
import {Browse} from "./components/Browse";
import {Dashboard} from "./components/Dashboard";
import Watch from "./components/Watch";
import Videos from "./components/Videos";

const AppRoutes = [
  {
    index: true,
    element: <Dashboard />
  },
  {
    path: "/browse",
    requireAuth: false,
    element: <Browse />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    requireAuth: true,
    element: <FetchData />
  },
  {
    path: '/watch/:videoId',
    requireAuth: false,
    element: <Watch />
  },
  {
    path: '/browse/genre/:videoId',
    requireAuth: false,
    element: <Videos />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
