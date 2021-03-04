const searchBox = document.querySelector('#search-box');
const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const location = searchBox.value;
    console.log(location);

    
});
