const btn = document.querySelector(".button__change");
const icon = document.querySelector(".icon");
const icon2 = document.querySelector(".icon2");

btn.addEventListener("click", () => {
    if(icon.style.display === "block") {
        icon.style.display = "none";
        icon2.style.display = "block"
    }
    else {
        icon.style.display = "block";
        icon2.style.display = "none";
    }
});

const btn2 = document.querySelector('.btn__alert');

btn2.addEventListener("click", () => {
    const width = window.screen.width;
    const height = window.screen.height;
    alert(`${width}, ${height}`); 
});
















const url = "wss://echo.websocket.org/";
const btnSendMessage = document.querySelector(".btn-send");
const btnCheckGeo = document.querySelector(".btn-geolocation");
const input = document.querySelector(".input");
const output = document.querySelector(".output");
const webSocket = new WebSocket(url);

function opening () {
webSocket.onopen = function(event) {
    if(event)
    console.log("Connected");
}};

opening();

btnSendMessage.addEventListener("click", () => {
    const message = input.value;
    webSocket.send(message)
    webSocket.onmessage = function(event) {
        let pre = document.createElement("p");
        pre.innerHTML = message;
        output.appendChild(pre);
        const answer = document.createElement("p");
        answer.style.color = "blue";
        answer.innerHTML = event.data;
        output.appendChild(answer);
    }   
});

const status = document.querySelector(".status");
const mapLink = document.querySelector(".map-link");  


const error = () => {
    status.textContent = 'Error';
};
const success = (position) => {
    console.log('position', position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = 'Ссылка на карту';
}


btnCheckGeo.addEventListener("click", () => {
    if(!navigator.geolocation) {
        status.textContent = 'Geolocation не поддерживается вашим браузером';
    } else {
        status.textContent = 'Определение местоположения…';

    navigator.geolocation.getCurrentPosition(success, error);    
    }
    output.appendChild(mapLink);
    output.appendChild(status);
});