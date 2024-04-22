window.onload = function() {
    const name = prompt("Lütfen isminizi giriniz", "Misafir");
    if(name) {
      document.getElementById('myName').textContent = name;
      showTime();
    }
  }
  
  function showTime() {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const date = today.toDateString();
    document.getElementById('myClock').innerHTML = time + ' - ' + date;
    setTimeout(showTime, 1000);
  }
  