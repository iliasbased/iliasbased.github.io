let search = function() {
    let search = document.getElementById("search");

    let q = search.value;
    let dateFrom = '2022-09-23';
    let sortBy = 'popularity';
    let apiKey = '6157b3a94d66439d803599800d245524';
    let country = 'us';

    let url = `https://newsapi.org/v2/everything?q=${q}&from=${dateFrom}&country=${country}&sortBy=${sortBy}&apiKey=${apiKey}`;

    fetch(url).then((data) => {
        console.log(data);
    })

}





