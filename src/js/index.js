document.addEventListener("DOMContentLoaded", function () {

    //variables

    let grid = document.querySelector("div.grid");
    let button = document.querySelector(".showBtn");
    let images = [];
    let category = "show all";
    let imagesToDisplay = [];
    let loaded = "false";
    let clicked = false;

    //get Api data

    fetch("http://www.splashbase.co/api/v1/images/search?query=tree")
        .then((response) => response.json())
        .then(response => {
            filterImages(response.images);
        });

    const changeLoadedStatus = () => {
        loaded = "true";
        if (loaded == "true") {
            if (document.querySelector(".load") !== null) {
                document.querySelector(".load").setAttribute("class", "hidden");
            }
            button.classList.remove("hidden");
            grid.classList.remove("hidden");
        }
    };

    //Filter Images based on category
    const filterImages = (response) => {

        images = response;
        if (category === "show all") {
            imagesToDisplay = images
        } else if (category === "unsplash") {
            imagesToDisplay = images.filter(image => image.site === "unsplash");
        } else if (category === "littlevisuals") {
            imagesToDisplay = images.filter(image => image.site === "littlevisuals");
        } else if (category === "travelcoffeebook") {
            imagesToDisplay = images.filter(image => image.site === "travelcoffeebook");
        } else if (category === "jaymantri") {
            imagesToDisplay = images.filter(image => image.site === "jaymantri");
        }
        bulidGrid(imagesToDisplay)
    };

    //display Images
    const bulidGrid = (response) => {
        let imagesArray = []
        let counter = 0
        grid.innerHTML = "";
        for (let i = 0; i < response.length; i++) {
            let image = response[i].url;
            let newImage = document.createElement("img");
            imagesArray.push(newImage)
            newImage.setAttribute("src", image);
            newImage.setAttribute("class", "hidden");
            newImage.addEventListener("click", () => {
                fullScreenShow(image);
            })
            grid.appendChild(newImage);
            newImage.onload = () => {
                counter++;
                if (counter === response.length) {
                    changeLoadedStatus()
                }
            }

        }
        active()
    };

    const changeClass = () => {
        let filterButtons = document.querySelectorAll(".filterButtons button");
        for (let i = 0; i < filterButtons.length; i++) {
            filterButtons[i].classList.remove("active");
        }
    };
    //show only some images
    const active = () => {
        let images = document.querySelectorAll(" img")
        if (images.length > 10) {
            for (let i = 0; i < 10; i++) {
                images[i].setAttribute("class", "active");
            }
        } else {
            for (let i = 0; i < images.length; i++) {
                images[i].setAttribute("class", "active");
            }
        }
        activeAll();
    };
    //Show more images
    const activeAll = () => {
        button.addEventListener("click", () => {
            let images = document.querySelectorAll(" img");
            if (clicked === false) {
                for (let i = 0; i < images.length; i++) {
                    images[i].setAttribute("class", "active");
                }
                button.innerText = "SHOW LESS";
                clicked = true
            } else if (clicked == true) {
                for (let i = 10; i < images.length; i++) {
                    images[i].setAttribute("class", "hidden");
                }
                button.innerText = "SHOW MORE";
                clicked = false;
            }
        })

    };

    //change category
    const changeCategory = () => {
        let filterButtons = document.querySelectorAll(".filterButtons button");
        for (let i = 0; i < filterButtons.length; i++) {
            filterButtons[i].addEventListener("click", () => {
                changeClass();
                filterButtons[i].classList.add("active");
                category = filterButtons[i].dataset.category;
                filterImages(images);
                activeAll();
                button.innerText = "SHOW MORE";
                clicked = false;
            })
        }
        activeAll();
    };
    //full screen image
    const fullScreenShow = (url) => {
        let fullImage = document.querySelector("div.fullScreen");
        fullImage.classList.remove("hidden");
        let closeButton = document.querySelector("div.fullScreen > button");
        fullImage.style.backgroundImage = `url(${url})`
        closeButton.addEventListener("click", () => {
            fullImage.classList.add("hidden");
        })
    };
    //
    changeCategory();
    activeAll();
});