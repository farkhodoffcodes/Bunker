// let image = document.querySelector(".image");


// async function getPhoto() {
//     const response = await fetch("rasm.jpeg");
//     const data = await response.blob()
//     image.src = URL.createObjectURL(data);
// }

// getPhoto();

fetch("ZonAnn.Ts+dSST.csv").then((response) => {
    return response.text();
}).then((blob => {
    const data = blob.split("\n").slice(1);
    data.forEach((item) => {
        const line = item.split(",");
        const year = line[0];
        const glob = line[1];
        console.log(year,glob);
    })
})).catch((err) => {
    console.log(err);
})


