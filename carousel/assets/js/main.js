let carousel = document.querySelector(".carousel");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let data = [
    {
        img: "https://th.bing.com/th/id/OIG1.CgTbIrO0vUXLNU28HMdC"
    },{
        img: "https://th.bing.com/th/id/OIG4.7h3EEAkofdcgjDEjeOyg"
    },{
        img: "https://cdn.pixabay.com/photo/2023/03/15/20/46/background-7855413_640.jpg"
    },{
        img: "https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
    }
]

let ilkinElement = 0;
const sonElement = 4;

function visible(index) {
    carousel.innerHTML = ""
    for (let i = 0; i < sonElement; i++) {
        let itemIndex = (index + i) % data.length;
        carousel.innerHTML += `
        <div class="carousel-item">
            <img src="${data[itemIndex].img}" alt="">
        </div>
        `
    }
}
visible(ilkinElement)

next.addEventListener("click", () => {
    ilkinElement = (ilkinElement + 1) % data.length;
    visible(ilkinElement)
    console.log(ilkinElement);


})

prev.addEventListener("click", () => {
    ilkinElement = (ilkinElement - 1 + data.length) % data.length;
    visible(ilkinElement)
    console.log(ilkinElement);
})


setInterval(() => {
    ilkinElement = (ilkinElement + 1) % data.length;
    visible(ilkinElement)
}, 1000)