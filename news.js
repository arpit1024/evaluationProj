let news = JSON.parse(localStorage.getItem("news"));
        
appendNews(news)
  function appendNews(news){
      let newsContainer = document.getElementById('nCont');

      let h1 = document.createElement('h1');
      let h2 = document.createElement('h2');
      h1.textContent = news.title; 
      h2.textContent = news.description;
      

      let aPu = document.createElement('div');
      let author = document.createElement('div');
      let publishedAt = document.createElement('div');
      author.textContent = "Author: "+ news.author;
      publishedAt.textContent ="Published AT: "+ news.publishedAt;

      aPu.append(author,publishedAt);
      aPu.setAttribute("id", "authorAndTime")

      let image = document.createElement('img');
      image.src = news.urlToImage;
      image.style.width = "100%"
      let content = document.createElement('div')
      content.textContent = news.content;
      content.style.fontSize = "large"
      content.style.lineHeight = "40px"
    
      newsContainer.append(h1,aPu,image,h2,content)

  }