const apiKey= "AIzaSyA_wV2ReAmlc9wdMP1nNqkcu9hefIR0wLo";
    const apiUrl="https://www.googleapis.com/books/v1/volumes?q=";
    const searchBox = document.querySelector(".bookshelf-search input");
        const searchBtn = document.querySelector(".bookshelf-search button");

        async function checkBookshelf(search){
            const response = await fetch(apiUrl + search + `&pagination=maxResults` + `:keyes&key=${apiKey}`);
            if(response.status == 404){
                document.querySelector(".bookshelf-error").style.display = "block";
            }
            else{
                var data = await response.json();
                for(i=0; i<data.items.length; i++){
                    document.querySelector(".bookshelf-title").innerHTML = data.items[i].volumeInfo.title;
                    document.querySelector(".bookshelf-cover").src = data.items[i].volumeInfo.imageLinks.smallThumbnail;
                    document.querySelector(".bookshelf-error").style.display = "none";
                }
            }}

            searchBtn.addEventListener("click", ()=>{
                checkBookshelf(searchBox.value);
            })
