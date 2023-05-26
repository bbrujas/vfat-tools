$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"Pulse Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
      ["Pulsex                 ", `<a href="pulsex"      >Various</a>`,"INC        ","https://app.pulsex.com"]
    ].reverse()
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();

}
