let key = "aae8e4d0286d58bbeffbbfbd6541b0c4";

// startup function
let discover = async () => {
    let contentContainer = document.getElementById("content");

    try {
        let result = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc`);
        let data = await result.json();
        data.results.forEach(data => {
            contentContainer.innerHTML += 
            `
            <div>
                <figure>
                    <img src="https://image.tmdb.org/t/p/original/${data.poster_path}" />
                    <figcaption>
                        <span class="movie-title">${data.title}</span
                        ><b class="rating">${data.vote_average}</b>
                        <span class="release-date">${data.release_date}</span>
                    </figcaption>
                </figure>
            </div>
            `;
        });
    } catch (error) {
        console.log(error);
        contentContainer.innerHTML = `<h1>Connection Failed</h1>`;
        return;
    }
    
}

// search function
let search = async (query) => {
    let contentContainer = document.getElementById("content");

    try {
        let result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&page=1&query=${query}`);
        let data = await result.json();
        
        contentContainer.innerHTML = ``;

        data.results.forEach(data => {
            let img_path;
            if (data.poster_path == null)
            {
                img_path = "./no-img-place-holder.jpg";
            } else {
                img_path = `https://image.tmdb.org/t/p/original/${data.poster_path}" alt="image not available`;
            }

            contentContainer.innerHTML += 
            `
            <div>
                <figure>
                    <img src="${img_path}" />
                    <figcaption>
                        <span class="movie-title">${data.title}</span
                        ><b class="rating">${data.vote_average}</b>
                        <span class="release-date">${data.release_date}</span>
                    </figcaption>
                </figure>
            </div>
            `;
        });
    } catch (error) {
        console.log(error);
        contentContainer.innerHTML = `<h1>Connection Failed</h1>`;
        return;
    }
} 

discover(); // run on startup

let searchElement = document.getElementById("search");

searchElement.addEventListener("submit", (e) => {
    e.preventDefault();
    search(document.getElementById("search-input").value);
}); // event listeners