import { createBrowserRouter } from "react-router";
import { ShopLayout } from "../common/layout/shopLayout";
import { Characters } from "../app/characters/characters";
import { CharacterDetail } from "../app/characters/characterDetail";

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
            }
        ]
    }
])