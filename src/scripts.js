export const follow = (playground) => {
    const ball = document.createElement('div');
    ball.id = 'ball';
    playground.appendChild(ball);
    playground.addEventListener("click", (e) => {
        const plSize = playground.getBoundingClientRect()
        const x = e.clientX;
        const y = e.clientY;
        ball.style.transform = `translatex(${x - 15 - plSize.x}px)`
        ball.style.transform += `translatey(${y - 15 - plSize.y}px)`
    })
    tooltip("Click anyway in the playground to have the ball follow the cursor.");
}

export const spin = (playground) => {
    const CUBE_DIVS = ['top',
                    'left',
                    'right',
                    'back',
                    'front',
                    'bottom',
                    ];
    

    playground.classList.add('perspective');
    const sides = [];
    const cube = document.createElement('div');
    cube.classList.add('cube');
    playground.appendChild(cube)
    CUBE_DIVS.forEach((side) => {
        const sideDiv = document.createElement('div');
        sideDiv.classList.add('side');
        setTimeout(() => sideDiv.classList.add(side), 100);
        cube.appendChild(sideDiv);
        sides.push(sideDiv);        
    })
    const spinCube = () => {
        cube.classList.toggle('spinning');
    }
    affixButton("Spin",spinCube);
    tooltip("Creates a 3D cube from divs")

}

const tooltip = (text) => {
    const playground = document.getElementById('playground');
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = text;
    playground.appendChild(tooltip);
    tooltip.addEventListener('click',() => {
        tooltip.style.filter = 'opacity(0)'
    });
}

const affixButton = (text,cb) => {
    const playground = document.getElementById('playground');
    const button = document.createElement('button');
    button.classList.add('context-button');
    button.textContent = text;
    button.addEventListener('click',cb);
    playground.appendChild(button);
}