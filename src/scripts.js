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

export const tickerTape = (playground,text = "Type some text into me...") => {
    const tape = document.createElement('div');
    const textBox = document.createElement('input');
    textBox.id = "ticker-text";
    const changeTextButton = document.createElement('button');
    changeTextButton.classList.add('context-button');
    changeTextButton.addEventListener('click', () => {
        tape.textContent = textBox.value;
    })
    const speedSlider = document.createElement('input');
    speedSlider.setAttribute('type','range');
    speedSlider.setAttribute('min',1);
    speedSlider.setAttribute('max',30);
    speedSlider.setAttribute('value',22);
    speedSlider.classList.add('slider');
    speedSlider.addEventListener('change', (e) => {
        tape.setAttribute('style',`animation-duration:${30.5 - e.target.value}s;`);
    })
    const speedLabel = document.createElement('label');
    const textLabel = document.createElement('label');
    speedLabel.textContent = "Set Speed:"
    textLabel.textContent = "Set Text:"
    playground.appendChild(speedLabel);
    playground.appendChild(speedSlider);
    playground.appendChild(textLabel);
    playground.appendChild(textBox);
    playground.appendChild(changeTextButton);
    changeTextButton.textContent = "Change Text"
    tape.classList.add('tape');
    tape.textContent = text;
    playground.appendChild(tape);
    tooltip("A ticker-tape effect for the given text");
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