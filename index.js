import { drawDropdown, dropdown } from "./src/dropdown.js";
import { follow } from "./src/follow.js";


export const init = (() => {

    const container = document.getElementById('container');
    const firstList = [
        {
            name:'main',
            link:follow,
        },
    ];
    const dropdownMenu = drawDropdown('dropdown',firstList, "Demonstrations");

    container.appendChild(dropdownMenu);
    dropdown('dropdown','mouseover')
    
})()