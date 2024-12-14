// const myFun = document.getElementById("fun");
const myURL = "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price";

// myFun.onclick = () => {
//   fetch(myURL)
//     .then((resp) => resp.json())
//     .then((json) => {
//       myFun.textContent = json.data.price;
//     });
// };

// Fetching BTC price then displaying in console
fetch(myURL)
  .then((resp) => resp.json())
  .then((json) => {
    console.log(json.data.price);
  });
