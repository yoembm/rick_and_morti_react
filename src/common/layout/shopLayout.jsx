import { Outlet } from "react-router";
import { Navbar } from "../components/navbar/navbar";

import style from './shopLayout.module.css';

export function ShopLayout() {


    return (

        <div className={style.container}>
            <div className={style.header}>
                <h1>Rick and Morty API</h1>
            </div>

            <div className={style.shopLayout}>

                <Navbar />

                <main className={style.main}>
                    <Outlet />
                </main>

            </div>
        </div>


    )

}