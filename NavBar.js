import React from 'react'
import { CartWidget } from "./CartWidget"
export const NavBar = () => {
    return (
        <nav>
            <div>
			<img style={{height: 100}} src="img/genovapng.png"/>
		    </div>
            <ul>
                <li>
                    <a href="#">Menu</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <CartWidget/>
                </li>
            </ul>
        </nav>
    )
}