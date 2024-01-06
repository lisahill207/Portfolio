const imagesIdArray = [
  "redLentil",
  "doughnut",
  "noRussian",
  "pastryTea",
  "veganRussian",
];

const redLentilCaption =
  "A plate of red lentil pierogi, enjoyed in Warsaw, Poland.";
const doughnutCaption =
  "A traditional Polish jelly doughnut and an Americano for an afternoon snack in Warsaw, Poland.";
const noRussianCaption =
  "A plate of No-Russian pierogi, enjoyed in Bialowieza, Poland.";
const pastryTeaCaption =
  "A pastry and a pot of tea to warm up after a cold hike in Zakopane, Poland.";
const veganRussianCaption =
  "A plate of vegan Russian pierogi, enjoyed in Warsaw, Poland.";

const redLentilSource = "Images/red_lentil_Warsaw.jpg";
const doughnutSource = "Images/doughnut_americano-warsaw.jpg";
const noRussianSource = "Images/no-russian_Bialowieza.jpg";
const pastryTeaSource = "Images/pastry_tea_Zakopane.jpg";
const veganRussianSource = "Images/vegan_russian_Warsaw.jpg";

function clickEvents(caption, imageSource, thumbnail) {
  renderCaption(caption);
  renderLargeImage(imageSource);
  removeBorder();
  addBorder(thumbnail);
}

function renderCaption(caption) {
  document.getElementById("caption").innerHTML = caption;
}

function renderLargeImage(imageSource) {
  document.getElementById("largeImage").src = imageSource;
}

function removeBorder() {
  let imageId = "";
  for (let i = 0; i < imagesIdArray.length; i++) {
    imageId = imagesIdArray[i];
    document.getElementById(imageId).style.border = "none";
  }
}

function addBorder(thumbnail) {
  document.getElementById(thumbnail).style.border = "thick solid #FFFFFF";
}

function renderSmallCaption(caption) {
  document.getElementById("smallCaption").innerHTML = caption;
}

document.getElementById("redLentil").addEventListener("click", () => {
  clickEvents(redLentilCaption, redLentilSource, "redLentil");
});

document.getElementById("redLentil").addEventListener("mouseenter", () => {
  renderSmallCaption(redLentilCaption);
});

document.getElementById("redLentil").addEventListener("mouseleave", () => {
  renderSmallCaption("");
});

document.getElementById("doughnut").addEventListener("click", () => {
  clickEvents(doughnutCaption, doughnutSource, "doughnut");
});

document.getElementById("doughnut").addEventListener("mouseenter", () => {
  renderSmallCaption(doughnutCaption);
});

document.getElementById("doughnut").addEventListener("mouseleave", () => {
  renderSmallCaption("");
});

document.getElementById("noRussian").addEventListener("click", () => {
  clickEvents(noRussianCaption, noRussianSource, "noRussian");
});

document.getElementById("noRussian").addEventListener("mouseenter", () => {
  renderSmallCaption(noRussianCaption);
});

document.getElementById("noRussian").addEventListener("mouseleave", () => {
  renderSmallCaption("");
});

document.getElementById("pastryTea").addEventListener("click", () => {
  clickEvents(pastryTeaCaption, pastryTeaSource, "pastryTea");
});

document.getElementById("pastryTea").addEventListener("mouseenter", () => {
  renderSmallCaption(pastryTeaCaption);
});

document.getElementById("pastryTea").addEventListener("mouseleave", () => {
  renderSmallCaption("");
});

document.getElementById("veganRussian").addEventListener("click", () => {
  clickEvents(veganRussianCaption, veganRussianSource, "veganRussian");
});

document.getElementById("veganRussian").addEventListener("mouseenter", () => {
  renderSmallCaption(veganRussianCaption);
});

document.getElementById("veganRussian").addEventListener("mouseleave", () => {
  renderSmallCaption("");
});
