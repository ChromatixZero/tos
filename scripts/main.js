const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/el-popo.png") {
    myImage.setAttribute("src", "images/el-popo-mini.png");
    document.querySelector("h1").textContent = "El miniature popo!";
  } else {
    myImage.setAttribute("src", "images/el-popo.png");
    document.querySelector("h1").textContent = "El normal popo!";
  }
};

let logBtn = document.querySelector("button");
let title = document.querySelector("h1");

function setUserName() {
    const userName = prompt("Como te llamas?");
    if (!userName) {
        setUserName();
    } else {
        localStorage.setItem("name", userName);
        //title.textContent = `Bienvenido, monsieul ${userName}`;
        title.textContent = "Bienvenido, monsieul " + userName;
    }
}

if (!localStorage.getItem("name")) {
    //setUserName();
} else {
    const storedName = localStorage.getItem("name");
    title.textContent = "Bienvenido, monsieul " + storedName;
}

logBtn.onclick = () => {
    setUserName();
}