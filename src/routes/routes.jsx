import { createBrowserRouter } from "react-router-dom";

import MainPage from "../pages/MainPage";
import ArtistPage from "../pages/ArtistPage";
import FavouritesPage from "../pages/FavouritesPage";
import AppLayout from "../components/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "/artist/:id", element: <ArtistPage /> },
      { path: "/favourites", element: <FavouritesPage /> },
    ],
  },
]);
