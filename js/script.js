
const apiKey = "CdtNRngzHXYN4bIUVTYiYxRWRgKeZOaM";

const gifContainer = document.querySelector("#gif-container");
const searchInput = document.querySelector("#search-input");
const fetchButton = document.querySelector("#fetch-gif-btn");

fetchButton.addEventListener("click", async () => {
    const searchTerm = searchInput.value.trim() || "funny";

    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(searchTerm)}&limit=12`;

    gifContainer.innerHTML = "Loading GIFs...";

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error("Failed to fetch GIFs");
        }

        const data = await response.json();

        const images = data.data.map(gif => gif.images.original.url);

        console.log(images);

        gifContainer.innerHTML = "";

        images.forEach(image => {
            gifContainer.innerHTML += `<img src="${image}" class="col-3 mb-3" alt="GIF result">`;
        });

    } catch (error) {
        console.error(error);
        gifContainer.innerHTML = "Error loading GIFs.";
    }
});
