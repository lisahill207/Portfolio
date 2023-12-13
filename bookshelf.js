const apiKey= "AIzaSyA_wV2ReAmlc9wdMP1nNqkcu9hefIR0wLo";
    const apiUrl="https://www.googleapis.com/books/v1/volumes?q=";
    const searchBox = document.querySelector(".bookshelf-search input");
        const searchBtn = document.querySelector(".bookshelf-search button");
        function cleanUp(){
            const shelf = document.querySelector("div.bookshelf-results");
            if(shelf.hasChildNodes()){
                while(shelf.hasChildNodes()){
                    shelf.removeChild(shelf.firstChild);
            }}
            else{
                console.log("All Clear");
            }
        }
        async function checkBookshelf(search){
            const response = await fetch(apiUrl + search + `&pagination=maxResults` + `:keyes&key=${apiKey}`);
            if(response.status == 400){
                document.querySelector(".bookshelf-error").style.display = "block";
            }
            else{
                cleanUp();
                const data = await response.json();
                console.log(data);
                const noData = data.totalItems;
                if(noData == 0){
                    document.querySelector(".bookshelf-error").style.display = "block";
                }
                else{
                    const items = [data.items];
                    console.log(items);
                    const length = items[0].length;
                    console.log(length);
                for(let i=0; i<length; i++){
                    const newBook = document.createElement("div");
                        console.log("div added");
                        newBook.classList.add('bookshelf-book');
                        newBook.setAttribute("id", `bookshelf-book${i}`);
                        document.querySelector(".bookshelf-results").appendChild(newBook);
                    const newCover = document.createElement("img");
                        newCover.classList.add("bookshelf-cover");
                        newCover.setAttribute("id", `bookshelf-cover`+ i);
                        newCover.setAttribute("src", data.items[i].volumeInfo.imageLinks.thumbnail);
                        document.querySelector(`#bookshelf-book`+ i).appendChild(newCover);
                    const newTitle = document.createElement("p");
                        newTitle.classList.add("bookshelf-title");
                        newTitle.setAttribute("id", `bookshelf-title`+ i);
                        document.querySelector(`#bookshelf-book` +i).appendChild(newTitle);

                    document.querySelector(`#bookshelf-title` + i).innerHTML = data.items[i].volumeInfo.title;
                }}
            }}

            searchBtn.addEventListener("click", ()=>{
                checkBookshelf(searchBox.value);
            });
