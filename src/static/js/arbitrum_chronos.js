
$(function() {
consoleInit(main)
});

const CHR_VOTER_ABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"__ve","internalType":"address"},{"type":"address","name":"_factory","internalType":"address"},{"type":"address","name":"_gauges","internalType":"address"},{"type":"address","name":"_bribes","internalType":"address"}]},{"type":"event","name":"Abstained","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":false},{"type":"int256","name":"weight","internalType":"int256","indexed":false}],"anonymous":false},{"type":"event","name":"Attach","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"gauge","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Deposit","inputs":[{"type":"address","name":"lp","internalType":"address","indexed":true},{"type":"address","name":"gauge","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":false},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Detach","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"gauge","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"DistributeReward","inputs":[{"type":"address","name":"sender","internalType":"address","indexed":true},{"type":"address","name":"gauge","internalType":"address","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"GaugeCreated","inputs":[{"type":"address","name":"gauge","internalType":"address","indexed":true},{"type":"address","name":"creator","internalType":"address","indexed":false},{"type":"address","name":"bribe","internalType":"address","indexed":true},{"type":"address","name":"pool","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"NotifyReward","inputs":[{"type":"address","name":"sender","internalType":"address","indexed":true},{"type":"address","name":"reward","internalType":"address","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Voted","inputs":[{"type":"address","name":"voter","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":false},{"type":"int256","name":"weight","internalType":"int256","indexed":false}],"anonymous":false},{"type":"event","name":"Whitelisted","inputs":[{"type":"address","name":"whitelister","internalType":"address","indexed":true},{"type":"address","name":"token","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"lp","internalType":"address","indexed":true},{"type":"address","name":"gauge","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":false},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"_ve","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"attachTokenToGauge","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"},{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"bribefactory","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"bribes","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"claimBribes","inputs":[{"type":"address[]","name":"_bribes","internalType":"address[]"},{"type":"address[][]","name":"_tokens","internalType":"address[][]"},{"type":"uint256","name":"_tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"claimFees","inputs":[{"type":"address[]","name":"_fees","internalType":"address[]"},{"type":"address[][]","name":"_tokens","internalType":"address[][]"},{"type":"uint256","name":"_tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"claimRewards","inputs":[{"type":"address[]","name":"_gauges","internalType":"address[]"},{"type":"address[][]","name":"_tokens","internalType":"address[][]"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"claimable","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"createGauge","inputs":[{"type":"address","name":"_pool","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"detachTokenFromGauge","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"},{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"distribute","inputs":[{"type":"address[]","name":"_gauges","internalType":"address[]"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"distribute","inputs":[{"type":"address","name":"_gauge","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"distribute","inputs":[{"type":"uint256","name":"start","internalType":"uint256"},{"type":"uint256","name":"finish","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"distribute","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"distributeFees","inputs":[{"type":"address[]","name":"_gauges","internalType":"address[]"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"distro","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emitDeposit","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"},{"type":"address","name":"account","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emitWithdraw","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"},{"type":"address","name":"account","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"factory","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"gaugefactory","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"gauges","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"initialize","inputs":[{"type":"address[]","name":"_tokens","internalType":"address[]"},{"type":"address","name":"_minter","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isGauge","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isWhitelisted","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"length","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"listing_fee","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"minter","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"notifyRewardAmount","inputs":[{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"poke","inputs":[{"type":"uint256","name":"_tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"poolForGauge","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"poolVote","inputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"pools","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"reset","inputs":[{"type":"uint256","name":"_tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalWeight","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateAll","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateFor","inputs":[{"type":"address[]","name":"_gauges","internalType":"address[]"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateForRange","inputs":[{"type":"uint256","name":"start","internalType":"uint256"},{"type":"uint256","name":"end","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateGauge","inputs":[{"type":"address","name":"_gauge","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"usedWeights","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"vote","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"},{"type":"address[]","name":"_poolVote","internalType":"address[]"},{"type":"int256[]","name":"_weights","internalType":"int256[]"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"int256","name":"","internalType":"int256"}],"name":"votes","inputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"int256","name":"","internalType":"int256"}],"name":"weights","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"whitelist","inputs":[{"type":"address","name":"_token","internalType":"address"},{"type":"uint256","name":"_tokenId","internalType":"uint256"}]}]

const CHR_GAUGE_ABI = [{"inputs":[{"internalType":"address","name":"_rewardToken","type":"address"},{"internalType":"address","name":"_ve","type":"address"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_distribution","type":"address"},{"internalType":"address","name":"_internal_bribe","type":"address"},{"internalType":"address","name":"_external_bribe","type":"address"},{"internalType":"bool","name":"_isForPair","type":"bool"},{"internalType":"address","name":"_maNFTs","type":"address"},{"internalType":"uint256","name":"_maGaugeId","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimed0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claimed1","type":"uint256"}],"name":"ClaimFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"from","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to","type":"uint256"}],"name":"Merged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"from","type":"uint256"},{"indexed":false,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"Splited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"DISTRIBUTION","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOKEN","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_VE","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_depositEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_start","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adjustWeights","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"balanceOfToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimFees","outputs":[{"internalType":"uint256","name":"claimed0","type":"uint256"},{"internalType":"uint256","name":"claimed1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"depositAll","outputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"depositTo","outputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"external_bribe","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fees0","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fees1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"harvestAndMerge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"harvestAndSplit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"internal_bribe","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isForPair","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maGaugeId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maNFTs","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"maturityLevelOfTokenMaxArray","outputs":[{"internalType":"uint256","name":"_matLevel","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"maturityLevelOfTokenMaxBoost","outputs":[{"internalType":"uint256","name":"_matLevel","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardForDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_distribution","type":"address"}],"name":"setDistribution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWeight","outputs":[{"internalType":"uint256","name":"_totalWeight","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"updateReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"weightOfToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"weightOfUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"withdrawAndHarvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAndHarvestAll","outputs":[],"stateMutability":"nonpayable","type":"function"}]

async function main() {
  const App = await init_ethers();

  let clicked = false;

  _print(`Initialized ${App.YOUR_ADDRESS}\n`);
  _print("Reading smart contracts...\n");
  _print("This may take few minutes...\n");

  const tokens = {};
  const prices = await getArbitrumPrices();

  const CHR_VOTER_ADDR = "0xc72b5c6d2c33063e89a50b2f77c99193ae6cee6c"
  const CHR_VOTER_CONTRACT = new ethcall.Contract(CHR_VOTER_ADDR, CHR_VOTER_ABI);
  const CHR_TOKEN_ADDR = "0x15b2fb8f08e4ac1ce019eadae02ee92aedf06851"
  const [_poolLength] = await App.ethcallProvider.all([CHR_VOTER_CONTRACT.length()]);
  const poolLength = _poolLength / 1;
  const calls = [...Array(poolLength).keys()].map(i => CHR_VOTER_CONTRACT.pools(i));
  const lpTokens = await App.ethcallProvider.all(calls);
  const calls2 = lpTokens.map(a => CHR_VOTER_CONTRACT.gauges(a));
  const gaugesWithDublicates = await App.ethcallProvider.all(calls2);
  const _gauges = removeDuplicates(gaugesWithDublicates);

  const gauges = _gauges.filter(g => g != "0x0000000000000000000000000000000000000000").map(a => {
    return {
      address: a,
      abi: CHR_GAUGE_ABI,
      stakeTokenFunction: "TOKEN"
    }
  });

  let p = await loadChrSynthetixPools(App, tokens, prices, gauges, clicked)
  _print_bold(`Total staked: $${formatMoney(p.staked_tvl)}\n`);
  if (p.totalUserStaked > 0) {
    _print(`You are staking a total of $${formatMoney(p.totalUserStaked)} at an APR of ${(p.totalApr * 100).toFixed(2)}%\n`);
    _print(`Estimated CHR earnings:`
            + ` Day ${p.totalUserDailyRewards.toFixed(2)} ($${formatMoney(p.totalUserDailyRewardsUSD)})`
            + ` Week ${p.totalUserWeeklyRewards.toFixed(2)} ($${formatMoney(p.totalUserWeeklyRewardsUSD)})`
            + ` Year ${p.totalUserYearlyRewards.toFixed(2)} ($${formatMoney(p.totalUserYearlyRewardsUSD)})`);
    _print("");
  }

  const claimAll = async function() {
    const rewardTokenAddresses = p.gaugeAddresses.map((g) => [CHR_TOKEN_ADDR]);
    return chrContract_claimAll(p.gaugeAddresses, rewardTokenAddresses, CHR_VOTER_ADDR, App)
  }
  const reload = async function(){
    _print("Reading smart contracts...\n");
    _print("This may take few minutes...\n");
    const App = await init_ethers();
    return reloadFun(App, p.tokens, p.prices, p.pools, p.clicked);
  }
  _print_link(`Claim All ${p.earnings.toFixed(6)} CHR ($${formatMoney(p.earningsUSD)})\n`, claimAll)
  _print("");
  _print_link(`\nClick here to see just your staked pools`, reload);
  _print("");

  hideLoading();
}

const chrContract_claimAll = async function(gaugeAddresses, rewardTokenAddresses, voterAddress, App) {
  const signer = App.provider.getSigner()

  const REWARD_POOL = new ethers.Contract(voterAddress, CHR_VOTER_ABI, signer)

  console.log(App.YOUR_ADDRESS)

  showLoading();
  REWARD_POOL.claimRewards(gaugeAddresses, rewardTokenAddresses, { gasLimit: 5000000 })
  .then(function(t) {
      return App.provider.waitForTransaction(t.hash)
    })
    .catch(function(ex) {
        console.log(ex);
    }
  )
  hideLoading();
}

const reloadFun = async function (App, tokens, prices, pools, clicked){
  if(clicked == false){
    clicked = true;
    let p = await loadChrSynthetixPools(App, tokens, prices, pools, clicked)
    if (p.totalUserStaked > 0) {
      _print(`You are staking a total of $${formatMoney(p.totalUserStaked)} at an APR of ${(p.totalApr * 100).toFixed(2)}%\n`);
      _print(`Estimated CHR earnings:`
              + ` Day ${p.totalUserDailyRewards.toFixed(2)} ($${formatMoney(p.totalUserDailyRewardsUSD)})`
              + ` Week ${p.totalUserWeeklyRewards.toFixed(2)} ($${formatMoney(p.totalUserWeeklyRewardsUSD)})`
              + ` Year ${p.totalUserYearlyRewards.toFixed(2)} ($${formatMoney(p.totalUserYearlyRewardsUSD)})`);
      _print("");
    }
  }else{
    clicked = false;
    let p = await loadChrSynthetixPools(App, tokens, prices, pools, clicked)
    if (p.totalUserStaked > 0) {
      _print(`You are staking a total of $${formatMoney(p.totalUserStaked)} at an APR of ${(p.totalApr * 100).toFixed(2)}%\n`);
      _print(`Estimated CHR earnings:`
              + ` Day ${p.totalUserDailyRewards.toFixed(2)} ($${formatMoney(p.totalUserDailyRewardsUSD)})`
              + ` Week ${p.totalUserWeeklyRewards.toFixed(2)} ($${formatMoney(p.totalUserWeeklyRewardsUSD)})`
              + ` Year ${p.totalUserYearlyRewards.toFixed(2)} ($${formatMoney(p.totalUserYearlyRewardsUSD)})`);
      _print("");
    }
  }
}

async function loadChrSynthetixPools(App, tokens, prices, pools, clicked) {
  let totalStaked  = 0, totalUserStaked = 0, individualAPRs = [];
  let totalUserDailyRewards = 0, totalUserWeeklyRewards = 0, totalUserYearlyRewards = 0, totalUserDailyRewardsUSD = 0, totalUserWeeklyRewardsUSD = 0, totalUserYearlyRewardsUSD = 0
  let gaugeAddresses = [], earnings = 0, earningsUSD = 0;
  const infos = await Promise.all(pools.map(p =>
      loadChrSynthetixPoolInfo(App, tokens, prices, p.abi, p.address, p.stakeTokenFunction)));
  for (const i of infos) {
    let p = await printChrSynthetixPool(App, i, "arbitrum", clicked);
    totalStaked += p.staked_tvl || 0;
    totalUserStaked += p.userStaked || 0;
    if (p.userStaked > 0) {
      individualAPRs.push(p.userStaked * p.apr / 100);
      totalUserDailyRewards += p.userDailyRewards;
      totalUserWeeklyRewards += p.userWeeklyRewards;
      totalUserYearlyRewards += p.userYearlyRewards;
      totalUserDailyRewardsUSD += p.userDailyRewardsUSD;
      totalUserWeeklyRewardsUSD += p.userWeeklyRewardsUSD;
      totalUserYearlyRewardsUSD += p.userYearlyRewardsUSD;
      gaugeAddresses.push(p.stakingAddress);
      earnings += p.earned;
      earningsUSD += p.earningsUSD;
    }
  }
  let totalApr = totalUserStaked == 0 ? 0 : individualAPRs.reduce((x,y)=>x+y, 0) / totalUserStaked;
  return { staked_tvl : totalStaked, totalUserStaked, totalApr, totalUserDailyRewards,  totalUserWeeklyRewards,
           totalUserYearlyRewards, totalUserDailyRewardsUSD, totalUserWeeklyRewardsUSD, totalUserYearlyRewardsUSD,
           gaugeAddresses, earnings, earningsUSD, tokens, prices, pools, clicked};
}

async function loadChrSynthetixPoolInfo(App, tokens, prices, stakingAbi, stakingAddress,
  stakeTokenFunction) {
    const STAKING_POOL = new ethers.Contract(stakingAddress, stakingAbi, App.provider);

    if (!STAKING_POOL.callStatic[stakeTokenFunction]) {
      console.log("Couldn't find stake function ", stakeTokenFunction);
    }
    const stakeTokenAddress = await STAKING_POOL.callStatic[stakeTokenFunction]();

    let rewardTokenAddresses = [], rewardTokens = [], rewardTokenTickers = [], rewardTokenPrices = [], weeklyRewards = [], earnings = [], usdCoinsPerWeek = [];
    //Added with manually reward
    const rewardTokenAddress = "0x15b2fb8f08e4ac1ce019eadae02ee92aedf06851";
    rewardTokenAddresses.push(rewardTokenAddress);
    if (!getParameterCaseInsensitive(tokens, rewardTokenAddress)) {
      tokens[rewardTokenAddress] = await getGeneralEthcallToken(App, rewardTokenAddress, stakingAddress);
    }
    const rewardToken = getParameterCaseInsensitive(tokens, rewardTokenAddress);
    const rewardTokenTicker = rewardToken.symbol;
    const rewardTokenPrice = getParameterCaseInsensitive(prices, rewardTokenAddress)?.usd;
    const periodFinish = await STAKING_POOL.periodFinish()
    const rewardRate = await STAKING_POOL.rewardRate()
    const earned_ = await STAKING_POOL.earned(App.YOUR_ADDRESS)
    const weeklyReward = (Date.now() / 1000 > periodFinish) ? 0 : rewardRate / 10 ** rewardToken.decimals * 604800;
    const usdPerWeek = weeklyReward * rewardTokenPrice;
    const earned = earned_ / 10 ** rewardToken.decimals;
    rewardTokens.push(rewardToken);
    rewardTokenTickers.push(rewardTokenTicker);
    rewardTokenPrices.push(rewardTokenPrice);
    weeklyRewards.push(weeklyReward);
    earnings.push(earned);
    usdCoinsPerWeek.push(usdPerWeek);

    var stakeToken = await getGeneralEthcallToken(App, stakeTokenAddress, stakingAddress);

    const balance = await STAKING_POOL.balanceOf(App.YOUR_ADDRESS)
    // const derivedSupply_ = await STAKING_POOL.derivedSupply()
    // const derivedBalance_ = await STAKING_POOL.derivedBalance(App.YOUR_ADDRESS)
    // const derivedSupply = derivedSupply_ / 10 ** stakeToken.decimals
    // const derivedBalance = derivedBalance_ / 10 ** stakeToken.decimals

    var newTokenAddresses = stakeToken.tokens.filter(x =>
      !getParameterCaseInsensitive(tokens,x));
    for (const address of newTokenAddresses) {
        tokens[address] = await getGeneralEthcallToken(App, address, stakingAddress);
    }

    const poolPrices = tryGetPoolPrices(tokens, prices, stakeToken, "arbitrum");

    const stakeTokenTicker = poolPrices.stakeTokenTicker;

    const stakeTokenPrice =
        prices[stakeTokenAddress]?.usd ?? getParameterCaseInsensitive(prices, stakeTokenAddress)?.usd;

    const staked_tvl = poolPrices.staked_tvl;

    const userStaked = balance / 10 ** stakeToken.decimals;

    const userUnstaked = stakeToken.unstaked;

    return  {
      stakingAddress,
      poolPrices,
      stakeTokenAddress,
      rewardTokenAddresses,
      stakeTokenTicker,
      rewardTokenTickers,
      stakeTokenPrice,
      rewardTokenPrices,
      weeklyRewards,
      usdCoinsPerWeek,
      staked_tvl,
      userStaked,
      userUnstaked,
      earnings,
      // derivedSupply,
      // derivedBalance
    }
}

async function printChrSynthetixPool(App, info, chain="eth", clicked, customURLs) {
  if(clicked == true && info.userStaked == 0 || info.weeklyReward == 0 || info.staked_tvl < 150){
    return {
      staked_tvl: 0,
      userStaked : 0,
      apr : 0,
      userDailyRewards : 0,
      userWeeklyRewards : 0,
      userYearlyRewards : 0,
      userDailyRewardsUSD : 0,
      userWeeklyRewardsUSD : 0,
      userYearlyRewardsUSD : 0,
      stakingAddress : info.stakingAddress,
      rewardTokenAddress : info.rewardTokenAddresses[0],
      earned : info.earnings[0],
      earningsUSD : 0
    }
  }
  info.poolPrices.print_price(chain, 4, customURLs);
  let totalYearlyAPR = 0, totalWeeklyAPR = 0, totalDailyAPR = 0, totalUSDPerWeek = 0
  for(let i = 0; i < info.rewardTokenTickers.length; i++){
    let weeklyAPR = info.usdCoinsPerWeek[i] / info.staked_tvl * 100;
    let dailyAPR = weeklyAPR / 7;
    yearlyAPR = weeklyAPR * 52;
    totalYearlyAPR += yearlyAPR;
    totalWeeklyAPR += weeklyAPR;
    totalDailyAPR += dailyAPR;
    totalUSDPerWeek += info.usdCoinsPerWeek[i];
    _print(`${info.rewardTokenTickers[i]} Per Week: ${info.weeklyRewards[i].toFixed(2)} ($${formatMoney(info.usdCoinsPerWeek[i])})`);
  }
  _print(`APR: Day ${totalDailyAPR.toFixed(4)}% Week ${totalWeeklyAPR.toFixed(2)}% Year ${totalYearlyAPR.toFixed(2)}%`);
  const userStakedUsd = info.userStaked * info.stakeTokenPrice;
  const userStakedPct = userStakedUsd / info.staked_tvl * 100;
  // const usersDailyAPR = totalDailyAPR * (info.derivedBalance / info.derivedSupply) / userStakedPct * 100
  // const usersWeeklyAPR = totalWeeklyAPR * (info.derivedBalance / info.derivedSupply) / userStakedPct * 100
  // const usersYearlyAPR = totalYearlyAPR * (info.derivedBalance / info.derivedSupply) / userStakedPct * 100
  // if(info.derivedBalance <= 0){
  //   _print(`Your APR: Day 0% Week 0% Year 0%`);
  // }else{
  //   _print(`Your APR: Day ${usersDailyAPR.toFixed(4)}% Week ${usersWeeklyAPR.toFixed(2)}% Year ${usersYearlyAPR.toFixed(2)}%`);
  // }
  _print(`You are staking ${info.userStaked.toFixed(6)} ${info.stakeTokenTicker} ` +
           `$${formatMoney(userStakedUsd)} (${userStakedPct.toFixed(2)}% of the pool).`);
  const userWeeklyRewards = userStakedPct * info.weeklyRewards[0] / 100;
  const userDailyRewards = userWeeklyRewards / 7;
  const userYearlyRewards = userWeeklyRewards * 52;
  const userDailyRewardsUSD = userDailyRewards*info.rewardTokenPrices[0]
  const userWeeklyRewardsUSD = userWeeklyRewards*info.rewardTokenPrices[0]
  const userYearlyRewardsUSD = userYearlyRewards*info.rewardTokenPrices[0]
  const earningsUSD = info.earnings[0]*info.rewardTokenPrices[0];
    if (info.userStaked > 0) {
      info.poolPrices.print_contained_price(info.userStaked);
        _print(`Estimated ${info.rewardTokenTicker} earnings:`
            + ` Day ${userDailyRewards.toFixed(2)} ($${formatMoney(userDailyRewardsUSD)})`
            + ` Week ${userWeeklyRewards.toFixed(2)} ($${formatMoney(userWeeklyRewardsUSD)})`
            + ` Year ${userYearlyRewards.toFixed(2)} ($${formatMoney(userYearlyRewardsUSD)})`);
    }
  const claim = async function() {
    return chrContract_claim(info.rewardTokenAddresses[0], info.stakingAddress, App)
  }
  const exit = async function() {
    return rewardsContract_exit(info.stakingAddress, App)
  }
  const revoke = async function() {
    return rewardsContract_resetApprove(info.stakeTokenAddress, info.stakingAddress, App)
  }
  _print(`<a target="_blank" href="https://arbiscan.io/address/${info.stakingAddress}#code">Arbitrum Scan</a>`);
  let claimLink = "";
  for(let i = 0; i < info.earnings.length; i++){
    claimLink += `${info.earnings[i].toFixed(6)} ${info.rewardTokenTickers[i]} ($${formatMoney(info.earnings[i]*info.rewardTokenPrices[i])}) `
  }
  _print_link(`Claim ${claimLink}`, claim);
  if (info.stakeTokenTicker != "ETH") {
    _print_link(`Revoke (set approval to 0)`, revoke)
  }
  _print_link(`Exit`, exit)
  _print("");

  return {
      staked_tvl: info.poolPrices.staked_tvl,
      userStaked : userStakedUsd,
      apr : totalYearlyAPR,
      userDailyRewards : userDailyRewards,
      userWeeklyRewards : userWeeklyRewards,
      userYearlyRewards : userYearlyRewards,
      userDailyRewardsUSD : userDailyRewardsUSD,
      userWeeklyRewardsUSD : userWeeklyRewardsUSD,
      userYearlyRewardsUSD : userYearlyRewardsUSD,
      stakingAddress : info.stakingAddress,
      rewardTokenAddress : info.rewardTokenAddresses[0],
      earned : info.earnings[0],
      earningsUSD : earningsUSD
  }
}

const chrContract_claim = async function(rewardTokenAddress, rewardPoolAddr, App) {
  const signer = App.provider.getSigner()

  const REWARD_POOL = new ethers.Contract(rewardPoolAddr, CHR_GAUGE_ABI, signer)

  console.log(App.YOUR_ADDRESS)

  const earnedYFFI = (await REWARD_POOL.earned(rewardTokenAddress, App.YOUR_ADDRESS)) / 1e18

  if (earnedYFFI > 0) {
    showLoading()
    REWARD_POOL.getReward(App.YOUR_ADDRESS, [rewardTokenAddress], {gasLimit: 250000})
      .then(function(t) {
        return App.provider.waitForTransaction(t.hash)
      })
      .catch(function() {
        hideLoading()
      })
  }
}

function tryGetPoolPrices(tokens, prices, pool, chain = "arbitrum"){
  try {
    const poolPrice = getPoolPrices(tokens, prices, pool, chain = "arbitrum")
    return poolPrice;
  }catch(err){
    console.log(pool.address, err);
    return null;
  }
}

function removeDuplicates(arr) {
  return arr.filter((item,
      index) => arr.indexOf(item) === index);
}