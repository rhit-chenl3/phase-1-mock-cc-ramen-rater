// write your code here
const init = () => {
    fetch(`http://localhost:3000/ramens`)
    .then(response => response.json())
    .then(data => data.forEach(renderRamen));

    document.getElementById('new-ramen').addEventListener('submit', addRamen);
}

document.addEventListener("DOMContentLoaded", init)

function renderRamen(ramen){
    const imagesHolder = document.getElementById("ramen-menu");
    const image = document.createElement('img');
    image.src = ramen.image;
    image.alt = ramen
    imagesHolder.appendChild(image);
    imagesHolder.addEventListener('click', () => showDetails(ramen));
}

function showDetails(ramen){
    const ramenDetail = document.getElementById('ramen-detail');
    ramenDetail.querySelector('.detail-image').src = ramen.image;
    ramenDetail.querySelector('.name').textContent = ramen.name;
    ramenDetail.querySelector('.restaurant').textContent = ramen.restaurant;
    document.querySelector('#rating-display').textContent = ramen.rating;
    document.querySelector('#comment-display').textContent = ramen.comment;
}

function addRamen(event){
    event.preventDefault();
    const ramenForm = event.target;

    const newRamen = {
        name: ramenForm.querySelector('#new-name').value,
        restaurant: ramenForm.querySelector('#new-restaurant').value,
        image: ramenForm.querySelector('#new-image').value,
        rating: ramenForm.querySelector('#new-rating').value,
        comment: ramenForm.querySelector('#new-comment').value
    };
    console.log(newRamen);
    renderRamen(newRamen);

    ramenForm.reset();
}