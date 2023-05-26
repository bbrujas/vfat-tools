$(function() {
  main()
})

const main = async () => {
  let tableData = {
    title: 'ETHW Network',
    heading: ["Pool Provider", "LP", "Reward Tokens", "INFO"],
    rows: [
      ['Uniwswap           ', `<a href="uniwswap"            >Various</a>`,'UNIW         ','https://farm.uniwswap.com'],
      //['LFG Finance        ', `<a href="lfg"                 >Various</a>`,'LFG          ','https://app.lfgswap.finance']
    ].reverse()
  }

  let table = new AsciiTable().fromJSON(tableData)
  document.getElementById('log').innerHTML += table + '<br />'
  hideLoading()
}
