var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

hasil = "";
txt = "";
txt1 = "";

fetch("http://universities.hipolabs.com/search?country=United+States", requestOptions)
  .then((response) => response.text())
  .then((result) => tampilkan(result))
  .catch((error) => console.log("error", error));

function tampilkan(result) {
  console.log(result);
  hasil = JSON.parse(result);
  txt = hasil.forEach(isitabel);
}

function isitabel(value) {
  txt = txt + trnyatabel.replace("#TEXT#", "webpage: " + value.web_pages);
  txt = txt + trnyatabel.replace("#TEXT#", "Domain: " + value.domains + "");
  txt = txt + trnyatabel.replace("#TEXT#", "country: " + value.country + "");

  document.getElementById("konten").innerHTML = txt;
}
trnyatabel = `
    <div class="font-medium text-gray-700" id="name">#TEXT#</div>
  `;
