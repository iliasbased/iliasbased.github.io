//get the data
let search = function() {
    let search = document.getElementById("search");
    let date = document.getElementById("date");

    let q = search.value;
    let dateFrom = date;
    let sortBy = 'popularity';
    let apiKey = '6157b3a94d66439d803599800d245524';

    let url = `https://newsapi.org/v2/everything?q=${q}&from=${dateFrom}&sortBy=${sortBy}&apiKey=${apiKey}`;
    
    fetch(url).then((data) => {
        return data.json();
    }).then((data)=>{
        showArticles(data);
    })
}

//display data to the screen
let showArticles = function(data) {
    let articlesTable = document.getElementById("articlesTable");

    for (let i=0; i < data.articles.length; i++) {
        let row = articlesTable.insertRow(i);

        let title = row.insertCell(0);
        let author = row.insertCell(1);
        let date = row.insertCell(2);

        title.innerHTML = data.articles[i].title;
        author.innerHTML = data.articles[i].author;
        if (data.articles[i].author == null) {
            author.innerHTML = "N/A";
        }
        date.innerHTML = data.articles[i].publishedAt;
    }
}