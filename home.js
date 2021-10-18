fetch('http://newsapi.org/v2/everything?q=apple&from=2021-10-17&to=2021-10-17&sortBy=popularity&apiKey=200e8c1aceb54c90818bc092cef81cca')
.then(res=>{
   return res.json()
}).then(res =>{
     fillItems(res.articles)
})
.catch(err=>{
    console.log(err)
})


function fillItems(items)
{ 
 let second = document.getElementById('second');

 items.forEach(element => {
     let inside = document.createElement('div');
     let div1 = document.createElement('div');
     let div2 = document.createElement('div');

     let title = document.createElement('div');
     let author = document.createElement('div');
     let publishedAt = document.createElement('div');

     let content = document.createElement('div');

     title.textContent = "Title: "+ element.title;
     author.textContent = "Author: "+ element.author;
     publishedAt.textContent = "Published: "+element.publishedAt
     content.textContent = "Content: "+element.content;

     div1.append(title,author,publishedAt);
     div2.append(content);

    inside.append(div1,div2);
    second.appendChild(inside);


    inside.onclick = function(){

      localStorage.setItem("news" ,JSON.stringify(element))
      window.location.href = "news.html"
    }

    inside.style.cursor = "pointer"
 });
}
