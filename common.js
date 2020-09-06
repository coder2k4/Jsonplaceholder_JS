document.getElementById('fetchData').addEventListener('click', load);

function load() {
    console.log('test');
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(data => {
            let ul = document.getElementById('dataList');
            let genHTML = data.map(item => `<li>${item.id} ${item.name} (${item.email})</li>`).join(' ');
            ul.insertAdjacentHTML('afterbegin',genHTML);
        })
};