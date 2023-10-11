export const follow = () => {
    const playground = document.getElementById('playground');
    playground.innerHTML = ``;
    const ball = document.createElement('div');
    ball.id = 'ball';
    playground.appendChild(ball);
}