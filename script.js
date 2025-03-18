console.log("hello");

let api = "https://api.unsplash.com/photos/random/?client_id=_DDIVJSgdK-GI1wA3aHOtxC9YTt8tCY6-4jMk7guznY&count=5";

let isFetching = false; // Flag to track ongoing requests

async function fetchData() {
    if (isFetching) return; // Prevent multiple calls
    isFetching = true; // Set flag to true before making request

    try {
        let response = await fetch(api);
        let data = await response.json();
        console.log(data);

        let container = document.getElementById("container");

        data.forEach(elem => {
            let imageContainer = document.createElement("div");
            let image = document.createElement("img");
            image.src = elem.urls.small;
            imageContainer.appendChild(image);
            container.appendChild(imageContainer);
        });
    } catch (error) {
        console.error("Error fetching images:", error);
    }

    isFetching = false; // Reset flag after request completes
}

// Infinite Scroll - Load more images when user reaches bottom
window.addEventListener("scroll", () => {
    if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        !isFetching // Ensure no ongoing request
    ) {
        fetchData(); // Fetch more images
    }
});

// Initial Fetch
fetchData();




