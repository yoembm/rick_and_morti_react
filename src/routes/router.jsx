import { createBrowserRouter } from "react-router";
import { ShopLayout } from "../common/layout/shopLayout";
import { Characters } from "../app/characters/characters";
import { CharacterDetail } from "../app/characters/characterDetail";
import { Locations } from "../app/locations/locations";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: ShopLayout,
        children: [
            {
                index: true,
                Component: Characters,
            },
            {
                path: "/character/:id",
                Component: CharacterDetail
            },
            {
                path: "/locations",
                Component: Locations
            }
        ]
    }
])