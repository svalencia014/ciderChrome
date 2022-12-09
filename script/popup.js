console.log("This is a popup");
let pauseBtn = document.getElementsByClassName("toggle");
let connectBtn = document.getElementsByClassName("connect");
let urlBox = document.getElementById("cider");

var url = "0.0.0.0"
var init = false;

window.addEventListener("load", (event) => {
    chrome.cookies.get({
        url: "http://localhost",
        name: "cider.url",
    });
})

connectBtn[0].addEventListener("click", function onClick() {
    console.log("Connect button clicked");
    url = urlBox.value;
    console.log(`Connecting to ${url}`);
    init = true;
    connectBtn.item(0).innerHTML = "Connected";
});

pauseBtn[0].addEventListener("click", function onClick() {
    if (init == false) {
        console.log("Not connected to Cider");
        alert("Not connected to Cider");
        return;
    }
    console.log("Pause button clicked");
    var XmlHttp = new XMLHttpRequest();
    url = "http://" + url + ":9000/api/playback/playpause";
    console.log(url);
    XmlHttp.open("GET", url, false);
});