const date = new Date();
const year = date.getFullYear();
const month = ("0" + (date.getMonth() + 1)).slice(-2);
const day = ("0" + date.getDate()).slice(-2);
const hour = ("0" + date.getHours()).slice(-2);
const minute = ("0" + date.getMinutes()).slice(-2);
const second = ("0" + date.getSeconds()).slice(-2);

document.getElementById("date").textContent = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;


document.getElementById("contact").addEventListener("submit", function(event){
    event.preventDefault();
    var submitButton = document.getElementById("submit");
    submitButton.disabled = true;
    setTimeout(function() {
      alert("送信されました。お問い合わせありがとうございました。");
      window.close();
    }, 2000);
  });