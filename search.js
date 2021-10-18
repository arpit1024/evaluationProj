function search()
    { 
        let query = document.getElementById('search').value;

        fetch(`http://newsapi.org/v2/everything?q=${query}&from=2021-10-18&sortBy=popularity&apiKey=200e8c1aceb54c90818bc092cef81cca`)
       .then(res=>{
          return res.json()
       }).then(res =>{
            fillItems(res.articles)
       })
       .catch(err=>{
           console.log(err)
       })
    }

    function fillItems(items)
       { 
           let number = document.getElementById('No');
           number.textContent = "Total Results : " + items.length;
          
        let second = document.getElementById('results');
        second.innerHTML = ""

        items.forEach(element => {
            let inside = document.createElement('div');
            let div1 = document.createElement('div');
            let div2 = document.createElement('div');


            let imag = document.createElement('img');  
            imag.src = element.urlToImage;
            let title = document.createElement('div');
            let author = document.createElement('div');
            let publishedAt = document.createElement('div');

            let content = document.createElement('div');

            title.textContent = "Title: "+ element.title;
            author.textContent = "Author: "+ element.author;
            publishedAt.textContent = "Published: "+element.publishedAt
            content.textContent = "Content: "+element.content;

            div1.append(imag);
            div1.setAttribute("id", "ige")
            div2.append(title,author,publishedAt,content);
            div2.setAttribute("id","content")
            inside.setAttribute("id","inside")
           inside.append(div1,div2);
           second.appendChild(inside);

        });
       }