let key = "aae8e4d0286d58bbeffbbfbd6541b0c4";


{/* <div>
				<figure>
					<img src="https://via.placeholder.com/150" />
					<figcaption>
						<span class="movie-title">movie title</span
						><b class="rating">rating</b>
						<span class="release-date">release_date</span>
					</figcaption>
				</figure>
			</div> */}

let discover = async () => {
    let result = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc`);
    let data = await result.json();
    let contentContainer = document.getElementById("content");
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
}

discover();