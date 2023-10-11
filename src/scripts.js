export const follow = () => {
    const playground = document.getElementById('playground');
    playground.innerHTML = ``;
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