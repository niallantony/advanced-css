import { drawDropdown, dropdown } from "./src/dropdown.js";
import { follow, spin, tickerTape } from "./src/scripts.js";


export const init = (() => {

    const container = document.getElementById('container');
    const firstList = [
        {
            name:'Follow the cursor',
            link:follow,
        },
        {
            name:'Cube',
            link:spin,
        },
        {
            name:'Ticker-tape',
            link:tickerTape,
        },
    ];
    const dropdownMenu = drawDropdown('dropdown',firstList, "Demonstrations");

    container.appendChild(dropdownMenu);
    dropdown('dropdown','mouseover')
    
})()