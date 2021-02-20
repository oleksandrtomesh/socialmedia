//make variable what have access to div with id result
const resultBlock = document.getElementById("result");
//this var have access to input label
const pageNumber = document.getElementById("page-number");
//this var have access to button label
const clickMeButton = document.getElementById("click-me");


//func what make get request to the server and give back data from server
const makeRequest = () => {
    //URL of server
$.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber.value}&count=1`, {
    //method what create element img with source from server
    success: (data) => {
        data.forEach(el => {
            const img = document.createElement('img');
            img.src = el.thumbnail;
            //append each el img into lebel div with ID result
            document.querySelector('#result').appendChild(img);
        })
    }
})
}
//event listener its when we click on button our function makeRequest execute
clickMeButton.addEventListener("click", makeRequest)
