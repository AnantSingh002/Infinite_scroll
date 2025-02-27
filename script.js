console.log("hello");

// let api = "https://unsplash.com/developers";

let api = "https://api.unsplash.com/photos/random/?client_id=_DDIVJSgdK-GI1wA3aHOtxC9YTt8tCY6-4jMk7guznY&count=5"

async function fetchData(){
 try{
    let response = await fetch(api);
    let data = await response.json();
    console.log(data);

    let container = document.getElementById("container");

    data.forEach(elem => {
       let imageContainer = document.createElement("div");
       let image = document.createElement("img");
        // container.innerHTML =  elem.urls.full;
        image.src = elem.urls.small;
        imageContainer.appendChild(image);
        container.appendChild(imageContainer);
    });
}
    catch (error) {
        console.error("Error fetching images:", error);
    }
    
}

// Infinite Scroll - Load more images when user reaches bottom
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        fetchData(); // Fetch more images
    }
});

// Initial Fetch
fetchData();




