//store ID of each thumbnail image
const imagesIdArray = ['redLentil', 'doughnut', 'noRussian', 'pastryTea', 'veganRussian'];

//store caption to be displayed for each thumbnail
const redLentilCaption = 'A plate of red lentil pierogi, enjoyed in Warsaw, Poland.';
const doughnutCaption = 'A traditional Polish jelly doughnut and an Americano for an afternoon snack in Warsaw, Poland.';
const noRussianCaption = 'A plate of No-Russian pierogi, enjoyed in Bialowieza, Poland.';
const pastryTeaCaption = 'A pastry and a pot of tea to warm up after a cold hike in Zakopane, Poland.';
const veganRussianCaption = 'A plate of vegan Russian pierogi, enjoyed in Warsaw, Poland.';

//store the src for each thumbnail image to be displayed
const redLentilSource = 'img/red_lentil_Warsaw.jpg';
const doughnutSource = 'img/doughnut_americano-warsaw.jpg';
const noRussianSource = 'img/no-russian_Bialowieza.jpg';
const pastryTeaSource = 'img/pastry_tea_Zakopane.jpg';
const veganRussianSource = 'img/vegan_russian_Warsaw.jpg';

//collection of functions to run each time a thumbnail is clicked
function clickEvents(caption, imageSource, thumbnail){
    renderCaption(caption);
    renderLargeImage(imageSource);
    removeBorder();
    addBorder(thumbnail);
};

//select the <p> element with the ID 'caption' and render the caption stored in the corresponding Caption variable
function renderCaption(caption){
    document.getElementById('caption').innerHTML = caption;
};

//select the <img> element with the 'largeImage' ID and render the image src stored in the corresponding Source variable
function renderLargeImage(imageSource){
    document.getElementById('largeImage').src = imageSource;
};

//loop through imageId array and change each .style.border property to "none" to remove the border when a new thumbnail is clicked
function removeBorder(){
    let imageId = ''
    for (let i = 0; i < imagesIdArray.length; i++){
        imageId = imagesIdArray[i];
        document.getElementById(imageId).style.border = "none";
    };
};

//use the thumbnail variable provided by the clicked element to update the .style.border property to add a white border to the clicked thumbnail
function addBorder(thumbnail){
    document.getElementById(thumbnail).style.border = "thick solid #FFFFFF";
    };

//select the <p> element with the smallCaption id to render the caption stored in the variable, provided by the clicked element
function renderSmallCaption(caption){
    document.getElementById('smallCaption').innerHTML = caption;
};

//adds an event listener which runs the collection of functions stored in the clickEvents function, using the provided parameters
document.getElementById('redLentil')
    .addEventListener('click', ()=>{
        clickEvents(redLentilCaption, redLentilSource, 'redLentil');
    });

//adds an event listener which runs the renderSmallCaption when a mouse enters a thumbnail
document.getElementById('redLentil')
    .addEventListener('mouseenter', ()=>{
        renderSmallCaption(redLentilCaption);
    });

//adds an event listener which runs the renderSmallCaption with a blank string to clear the caption when a mouse leaves a thumbnail
document.getElementById('redLentil')
    .addEventListener('mouseleave', ()=>{
        renderSmallCaption('');
    });

//adds an event listener which runs the collection of functions stored in the clickEvents function, using the provided parameters
document.getElementById('doughnut')
    .addEventListener('click', ()=>{
        clickEvents(doughnutCaption, doughnutSource, 'doughnut');
    });

//adds an event listener which runs the renderSmallCaption when a mouse enters a thumbnail
document.getElementById('doughnut')
    .addEventListener('mouseenter', ()=>{
        renderSmallCaption(doughnutCaption);
    });

//adds an event listener which runs the renderSmallCaption with a blank string to clear the caption when a mouse leaves a thumbnail
document.getElementById('doughnut')
    .addEventListener('mouseleave', ()=>{
        renderSmallCaption('');
    });

//adds an event listener which runs the collection of functions stored in the clickEvents function, using the provided parameters
document.getElementById('noRussian')
    .addEventListener('click', ()=>{
        clickEvents(noRussianCaption, noRussianSource, 'noRussian');
    });

//adds an event listener which runs the renderSmallCaption when a mouse enters a thumbnail
document.getElementById('noRussian')
    .addEventListener('mouseenter', ()=>{
        renderSmallCaption(noRussianCaption);
    });

//adds an event listener which runs the renderSmallCaption with a blank string to clear the caption when a mouse leaves a thumbnail
document.getElementById('noRussian')
    .addEventListener('mouseleave', ()=>{
        renderSmallCaption('');
    });

//adds an event listener which runs the collection of functions stored in the clickEvents function, using the provided parameters
document.getElementById('pastryTea')
    .addEventListener('click', ()=>{
        clickEvents(pastryTeaCaption, pastryTeaSource, 'pastryTea');
    });

//adds an event listener which runs the renderSmallCaption when a mouse enters a thumbnail
document.getElementById('pastryTea')
    .addEventListener('mouseenter', ()=>{
        renderSmallCaption(pastryTeaCaption);
    });

//adds an event listener which runs the renderSmallCaption with a blank string to clear the caption when a mouse leaves a thumbnail
document.getElementById('pastryTea')
    .addEventListener('mouseleave', ()=>{
        renderSmallCaption('');
    });

//adds an event listener which runs the collection of functions stored in the clickEvents function, using the provided parameters
document.getElementById('veganRussian')
    .addEventListener('click', ()=>{
        clickEvents(veganRussianCaption, veganRussianSource, 'veganRussian');
    });

//adds an event listener which runs the renderSmallCaption when a mouse enters a thumbnail
document.getElementById('veganRussian')
    .addEventListener('mouseenter', ()=>{
        renderSmallCaption(veganRussianCaption);
    });

//adds an event listener which runs the renderSmallCaption with a blank string to clear the caption when a mouse leaves a thumbnail
document.getElementById('veganRussian')
    .addEventListener('mouseleave', ()=>{
        renderSmallCaption('');
    });
