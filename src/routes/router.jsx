import { createBrowserRouter } from "react-router";
import { ShopLayout } from "../common/layout/shopLayout";
import { Characters } from "../app/characters/characters";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: ShopLayout,
        children: [
            {
                index: true,
                Component: Characters,
            }
        ]
    }
])