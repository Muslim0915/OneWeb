const checkboxContainers = document.querySelectorAll('.skills-form .form-control label');
const cards = document.querySelectorAll('.range-knowledge-section .card');



checkboxContainers.forEach((element) => {
    const img = document.createElement('img');
    img.src = 'assets/images/jpg/checked.png';
    element.appendChild(img);
});

function moveArrow(index) {
    const arrow = document.getElementById('arrow');
    const card = cards[index];
    const cardWidth = card.offsetWidth;
    const cardOffsetLeft = card.offsetLeft;

    const positionPercent = ((cardOffsetLeft + cardWidth / 2) / card.parentNode.offsetWidth) * 100 - (arrow.offsetWidth / card.parentNode.offsetWidth) * 50;

    arrow.style.left = `${positionPercent}%`;
}

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', () => {
        for (let j = 0; j < cards.length; j++) {
            cards[j].querySelector('.card-head').classList.remove('active');
        }
        moveArrow(i);
        cards[i].querySelector('.card-head').classList.add('active');
    });
}
moveArrow(2);



