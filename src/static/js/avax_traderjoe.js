
$(function() {
consoleInit(main)
  });

const JOE_CHEF_ABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_joe","internalType":"contract JoeToken"},{"type":"address","name":"_devAddr","internalType":"address"},{"type":"address","name":"_treasuryAddr","internalType":"address"},{"type":"address","name":"_investorAddr","internalType":"address"},{"type":"uint256","name":"_joePerSec","internalType":"uint256"},{"type":"uint256","name":"_startTimestamp","internalType":"uint256"},{"type":"uint256","name":"_devPercent","internalType":"uint256"},{"type":"uint256","name":"_treasuryPercent","internalType":"uint256"},{"type":"uint256","name":"_investorPercent","internalType":"uint256"}]},{"type":"event","name":"Add","inputs":[{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"allocPoint","internalType":"uint256","indexed":false},{"type":"address","name":"lpToken","internalType":"contract IERC20","indexed":true},{"type":"address","name":"rewarder","internalType":"contract IRewarder","indexed":true}],"anonymous":false},{"type":"event","name":"Deposit","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"EmergencyWithdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Harvest","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Set","inputs":[{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"allocPoint","internalType":"uint256","indexed":false},{"type":"address","name":"rewarder","internalType":"contract IRewarder","indexed":true},{"type":"bool","name":"overwrite","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"SetDevAddress","inputs":[{"type":"address","name":"oldAddress","internalType":"address","indexed":true},{"type":"address","name":"newAddress","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"UpdateEmissionRate","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"_joePerSec","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"UpdatePool","inputs":[{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"lastRewardTimestamp","internalType":"uint256","indexed":false},{"type":"uint256","name":"lpSupply","internalType":"uint256","indexed":false},{"type":"uint256","name":"accJoePerShare","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"add","inputs":[{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"address","name":"_lpToken","internalType":"contract IERC20"},{"type":"address","name":"_rewarder","internalType":"contract IRewarder"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deposit","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"dev","inputs":[{"type":"address","name":"_devAddr","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"devAddr","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"devPercent","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emergencyWithdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"investorAddr","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"investorPercent","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract JoeToken"}],"name":"joe","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"joePerSec","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"massUpdatePools","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"pendingJoe","internalType":"uint256"},{"type":"address","name":"bonusTokenAddress","internalType":"address"},{"type":"string","name":"bonusTokenSymbol","internalType":"string"},{"type":"uint256","name":"pendingBonusToken","internalType":"uint256"}],"name":"pendingTokens","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"lpToken","internalType":"contract IERC20"},{"type":"uint256","name":"allocPoint","internalType":"uint256"},{"type":"uint256","name":"lastRewardTimestamp","internalType":"uint256"},{"type":"uint256","name":"accJoePerShare","internalType":"uint256"},{"type":"address","name":"rewarder","internalType":"contract IRewarder"}],"name":"poolInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"poolLength","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"bonusTokenAddress","internalType":"address"},{"type":"string","name":"bonusTokenSymbol","internalType":"string"}],"name":"rewarderBonusTokenInfo","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"address","name":"_rewarder","internalType":"contract IRewarder"},{"type":"bool","name":"overwrite","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setDevPercent","inputs":[{"type":"uint256","name":"_newDevPercent","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setInvestorAddr","inputs":[{"type":"address","name":"_investorAddr","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setInvestorPercent","inputs":[{"type":"uint256","name":"_newInvestorPercent","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setTreasuryAddr","inputs":[{"type":"address","name":"_treasuryAddr","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setTreasuryPercent","inputs":[{"type":"uint256","name":"_newTreasuryPercent","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"startTimestamp","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalAllocPoint","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"treasuryAddr","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"treasuryPercent","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateEmissionRate","inputs":[{"type":"uint256","name":"_joePerSec","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updatePool","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"rewardDebt","internalType":"uint256"}],"name":"userInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]}]
const JOE_CHEF_ABI_V2 = [{"inputs":[{"internalType":"contract IMasterChef","name":"_MASTER_CHEF_V2","type":"address"},{"internalType":"contract IERC20","name":"_joe","type":"address"},{"internalType":"uint256","name":"_MASTER_PID","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"allocPoint","type":"uint256"},{"indexed":true,"internalType":"contract IERC20","name":"lpToken","type":"address"},{"indexed":true,"internalType":"contract IRewarder","name":"rewarder","type":"address"}],"name":"Add","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[],"name":"Init","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"allocPoint","type":"uint256"},{"indexed":true,"internalType":"contract IRewarder","name":"rewarder","type":"address"},{"indexed":false,"internalType":"bool","name":"overwrite","type":"bool"}],"name":"Set","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastRewardTimestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lpSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accJoePerShare","type":"uint256"}],"name":"UpdatePool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"JOE","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MASTER_CHEF_V2","outputs":[{"internalType":"contract IMasterChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MASTER_PID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"contract IRewarder","name":"_rewarder","type":"address"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"harvestFromMasterChef","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"dummyToken","type":"address"}],"name":"init","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"joePerSec","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"pids","type":"uint256[]"}],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingTokens","outputs":[{"internalType":"uint256","name":"pendingJoe","type":"uint256"},{"internalType":"address","name":"bonusTokenAddress","type":"address"},{"internalType":"string","name":"bonusTokenSymbol","type":"string"},{"internalType":"uint256","name":"pendingBonusToken","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"accJoePerShare","type":"uint256"},{"internalType":"uint256","name":"lastRewardTimestamp","type":"uint256"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"contract IRewarder","name":"rewarder","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"pools","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IRewarder","name":"_rewarder","type":"address"},{"internalType":"bool","name":"overwrite","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const JOE_REWARDER_ABI = [{"inputs":[{"internalType":"contract IERC20","name":"_rewardToken","type":"address"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_tokenPerSec","type":"uint256"},{"internalType":"contract IMasterChefJoe","name":"_MCJ","type":"address"},{"internalType":"bool","name":"_isNative","type":"bool"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"OnReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"RewardRateUpdated","type":"event"},{"inputs":[],"name":"MCJ","outputs":[{"internalType":"contract IMasterChefJoe","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isNative","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_lpAmount","type":"uint256"}],"name":"onJoeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingTokens","outputs":[{"internalType":"uint256","name":"pending","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolInfo","outputs":[{"internalType":"uint256","name":"accTokenPerShare","type":"uint256"},{"internalType":"uint256","name":"lastRewardTimestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenPerSec","type":"uint256"}],"name":"setRewardRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenPerSec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"},{"internalType":"bool","name":"direct","type":"bool"},{"internalType":"bool","name":"renounce","type":"bool"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updatePool","outputs":[{"components":[{"internalType":"uint256","name":"accTokenPerShare","type":"uint256"},{"internalType":"uint256","name":"lastRewardTimestamp","type":"uint256"}],"internalType":"struct SimpleRewarderPerSec.PoolInfo","name":"pool","type":"tuple"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]

async function main() {
    const App = await init_ethers();

    _print(`Initialized ${App.YOUR_ADDRESS}\n`);
    _print("Reading smart contracts...\n");

   const JOE_CHEF_ADDR = "0xd6a4F121CA35509aF06A0Be99093d08462f53052";
   const JOE_CHEF_ADDR_V2 = "0x188bED1968b795d5c9022F6a0bb5931Ac4c18F00";
   const rewardTokenTicker = "JOE";
   const JOE_CHEF = new ethers.Contract(JOE_CHEF_ADDR, JOE_CHEF_ABI, App.provider);
   const JOE_CHEF_V2 = new ethers.Contract(JOE_CHEF_ADDR_V2, JOE_CHEF_ABI_V2, App.provider);

   // JOE only emits 50% of supply to liquidity mining
   const rewardsPerWeek = await JOE_CHEF.joePerSec() /2 /1e18 * 604800;

   const rewardsPerWeekv2 = await JOE_CHEF.joePerSec() /10 /1e18 * 604800; //i did it /10 and it fixed

    const tokens = {};
    const prices = await getAvaxPrices();

    await loadJoeV2ChefContract(App, tokens, prices, JOE_CHEF_V2, JOE_CHEF_ADDR_V2, JOE_CHEF_ABI_V2, rewardTokenTicker,
      "JOE", null, rewardsPerWeekv2, "pendingTokens");

    await loadGeneralEthcallChefContract(App, tokens, prices, JOE_CHEF, JOE_CHEF_ADDR, JOE_CHEF_ABI, rewardTokenTicker,
        "joe", null, rewardsPerWeek, "pendingTokens", [], "avax");

    hideLoading();
  }

async function loadJoeV2ChefContract(App, tokens, prices, chef, chefAddress, chefAbi, rewardTokenTicker,
      rewardTokenFunction, rewardsPerBlockFunction, rewardsPerWeekFixed, pendingRewardsFunction, deathPoolIndices) {
    const chefContract = chef ?? new ethers.Contract(chefAddress, chefAbi, App.provider);
  
    const poolCount = parseInt(await chefContract.poolLength(), 10);
    const totalAllocPoints = await chefContract.totalAllocPoint();
  
    _print(`Found ${poolCount} pools.\n`)
  
    _print(`Showing incentivized pools only.\n`);
  
    const rewardTokenAddress = await chefContract.callStatic[rewardTokenFunction]();
    const rewardToken = await getGeneralEthcallToken(App, rewardTokenAddress, chefAddress);
    const rewardsPerWeek = rewardsPerWeekFixed ??
      await chefContract.callStatic[rewardsPerBlockFunction]()
      / 10 ** rewardToken.decimals * 604800 / 13.5
  
    const poolInfos = await Promise.all([...Array(poolCount).keys()].map(async (x) => {
      try {
        return await getJoev2PoolInfo(App, chefContract, chefAddress, x, pendingRewardsFunction);
      }
      catch (ex) {
        console.log(`Error loading pool ${x}: ${ex}`);
        return null;
      }
    }));
  
    var tokenAddresses = [].concat.apply([], poolInfos.filter(x => x?.poolToken).map(x => x.poolToken.tokens).concat([rewardTokenAddress]));
  
    await Promise.all(tokenAddresses.map(async (address) => {
        tokens[address] = await getGeneralEthcallToken(App, address, chefAddress);
    }));
  
    if (deathPoolIndices) {   //load prices for the deathpool assets
      deathPoolIndices.map(i => poolInfos[i])
                       .map(poolInfo =>
        poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, "eth") : undefined);
    }
  
    const poolPrices = poolInfos.map(poolInfo => poolInfo?.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken) : undefined);
  
    _print("Finished reading smart contracts.\n");
  
    let aprs = []
    for (i = 0; i < poolCount; i++) {
      if (poolPrices[i]) {
        if(!poolInfos[i].rewarderRewardsPerWeek){
          const apr = printJoeNormalPool(App, chefAbi, chefAddress, prices, tokens, poolInfos[i], i, poolPrices[i],
            totalAllocPoints, rewardsPerWeek, rewardTokenTicker, rewardTokenAddress,
            pendingRewardsFunction, null, "eth", poolInfos[i].depositFee, poolInfos[i].withdrawFee)
          aprs.push(apr);
        }else{
          const apr = printRewarderPool(App, chefAbi, chefAddress, prices, tokens, poolInfos[i], i, poolPrices[i],
            totalAllocPoints, rewardsPerWeek, rewardTokenTicker, rewardTokenAddress,
            pendingRewardsFunction, null, "eth", poolInfos[i].rewarderRewardsPerWeek,
            poolInfos[i].rewarderTicker, poolInfos[i].rewarderTokenAddress, poolInfos[i].pendingRewarderTokens)
          aprs.push(apr);
        }
      }
    }
    let totalUserStaked=0, totalStaked=0, averageApr=0;
    for (const a of aprs) {
      if (a && !isNaN(a.totalStakedUsd)) {
        totalStaked += a.totalStakedUsd;
      }
      if (a && a.userStakedUsd > 0) {
        totalUserStaked += a.userStakedUsd;
        averageApr += a.userStakedUsd * a.yearlyAPR / 100;
      }
    }
    averageApr = averageApr / totalUserStaked;
    _print_bold(`Total Staked: $${formatMoney(totalStaked)}`);
    if (totalUserStaked > 0) {
      _print_bold(`\nYou are staking a total of $${formatMoney(totalUserStaked)} at an average APR of ${(averageApr * 100).toFixed(2)}%`)
      _print(`Estimated earnings:`
          + ` Day $${formatMoney(totalUserStaked*averageApr/365)}`
          + ` Week $${formatMoney(totalUserStaked*averageApr/52)}`
          + ` Year $${formatMoney(totalUserStaked*averageApr)}\n`);
    }
    return { prices, totalUserStaked, totalStaked, averageApr }
  }

async function getJoev2PoolInfo(app, chefContract, chefAddress, poolIndex, pendingRewardsFunction) {
    const poolInfo = await chefContract.poolInfo(poolIndex);
    const lpToken = poolInfo.lpToken;
    if (poolInfo.allocPoint == 0) {
      return {
        address: lpToken,
        allocPoints: poolInfo.allocPoint ?? 1,
        poolToken: null,
        userStaked : 0,
        pendingRewardTokens : 0,
      };
    }
    const rewarder = poolInfo.rewarder;
    if(rewarder == "0x0000000000000000000000000000000000000000"){
      const poolToken = await getGeneralEthcallToken(app, lpToken, chefAddress);
      const userInfo = await chefContract.userInfo(poolIndex, app.YOUR_ADDRESS);
      const pendingRewardTokens = await chefContract.pendingReward(poolIndex, app.YOUR_ADDRESS);
      const staked = userInfo.amount / 10 ** poolToken.decimals;
      return {
          address : lpToken,
          allocPoints: poolInfo.allocPoint ?? 1,
          poolToken: poolToken,
          userStaked : staked,
          pendingRewardTokens : pendingRewardTokens / 10 ** 18,
          depositFee : (poolInfo.depositFeeBP ?? 0) / 100,
          withdrawFee : (poolInfo.withdrawFeeBP ?? 0) / 100
      };
    }else{
      const poolToken = await getGeneralEthcallToken(app, lpToken, chefAddress);
      const userInfo = await chefContract.userInfo(poolIndex, app.YOUR_ADDRESS);
      const _pendingRewardTokens = await chefContract.pendingTokens(poolIndex, app.YOUR_ADDRESS);
      const pendingRewardTokens = _pendingRewardTokens.pendingJoe;
      const staked = userInfo.amount / 10 ** poolToken.decimals;
      const rewarderContract = new ethers.Contract(rewarder, JOE_REWARDER_ABI, app.provider);
      const rewarderTokenAddress = await rewarderContract.rewardToken();
      const rewarderToken = await getGeneralEthcallToken(app, rewarderTokenAddress, chefAddress);
      const pendingRewarderTokens = await rewarderContract.pendingTokens(app.YOUR_ADDRESS)
      const rewarderRewardsPerSecond = await rewarderContract.tokenPerSec() / 10 ** rewarderToken.decimals;
      const rewarderRewardsPerWeek = rewarderRewardsPerSecond * 604800;
      return {
          address : lpToken,
          allocPoints: poolInfo.allocPoint ?? 1,
          poolToken: poolToken,
          userStaked : staked,
          pendingRewardTokens : pendingRewardTokens / 10 ** 18,
          depositFee : (poolInfo.depositFeeBP ?? 0) / 100,
          withdrawFee : (poolInfo.withdrawFeeBP ?? 0) / 100,
          pendingRewarderTokens : pendingRewarderTokens.pending / 10 ** rewarderToken.decimals,
          rewarderTokenAddress,
          rewarderToken,
          rewarderRewardsPerWeek,
          rewarderTicker : rewarderToken.symbol
      };
    }
  }

function printRewarderPool(App, chefAbi, chefAddr, prices, tokens, poolInfo, poolIndex, poolPrices,
                           totalAllocPoints, rewardsPerWeek, rewardTokenTicker, rewardTokenAddress,
                           pendingRewardsFunction, fixedDecimals, chain="avax",
                           rewarderRewardsPerWeek, rewardRewarderTicker, rewarderTokenAddress, pendingRewarderTokens) {
      fixedDecimals = fixedDecimals ?? 2;
      const sp = (poolInfo.stakedToken == null) ? null : getPoolPrices(tokens, prices, poolInfo.stakedToken);
      var poolRewardsPerWeek = poolInfo.allocPoints / totalAllocPoints * rewardsPerWeek;
      let poolRewarderRewardsPerWeek = rewarderRewardsPerWeek;
      if (poolRewardsPerWeek == 0 && rewardsPerWeek != 0) return;
      const userStaked = poolInfo.userLPStaked ?? poolInfo.userStaked;
      const rewardPrice = getParameterCaseInsensitive(prices, rewardTokenAddress)?.usd;
      const rewardRewarderPrice = getParameterCaseInsensitive(prices, rewarderTokenAddress)?.usd;
      const staked_tvl = sp?.staked_tvl ?? poolPrices.staked_tvl;
      poolPrices.print_price(chain);
      sp?.print_price(chain);
      const apr = printRewarderAPR(rewardTokenTicker, rewardPrice, poolRewardsPerWeek, poolPrices.stakeTokenTicker,
        staked_tvl, userStaked, poolPrices.price, fixedDecimals, poolRewarderRewardsPerWeek, rewardRewarderPrice, rewardRewarderTicker);
      if (poolInfo.userLPStaked > 0) sp?.print_contained_price(userStaked);
      if (poolInfo.userStaked > 0) poolPrices.print_contained_price(userStaked);
      printRewarderContractLinks(App, chefAbi, chefAddr, poolIndex, poolInfo.address, pendingRewardsFunction,
        rewardTokenTicker, poolPrices.stakeTokenTicker, poolInfo.poolToken.unstaked,
        poolInfo.userStaked, poolInfo.pendingRewardTokens, fixedDecimals, rewardPrice, pendingRewarderTokens, rewardRewarderTicker, rewardRewarderPrice);
      _print("");
      return apr;
    }
    
    function printRewarderAPR(rewardTokenTicker, rewardPrice, poolRewardsPerWeek,
                      stakeTokenTicker, staked_tvl, userStaked, poolTokenPrice,
                      fixedDecimals, poolRewarderRewardsPerWeek, rewardRewarderPrice, rewarderTicker) {
      var usdPerWeek = poolRewardsPerWeek * rewardPrice;
      var usdRewarderPerWeek = poolRewarderRewardsPerWeek * rewardRewarderPrice;
      fixedDecimals = fixedDecimals ?? 2;
      _print(`${rewardTokenTicker} Per Week: ${poolRewardsPerWeek.toFixed(fixedDecimals)} ($${formatMoney(usdPerWeek)})`);
      _print(`${rewarderTicker} Per Week: ${poolRewarderRewardsPerWeek.toFixed(fixedDecimals)} ($${formatMoney(usdRewarderPerWeek)})`);
      var weeklyAPR = usdPerWeek / staked_tvl * 100;
      var dailyAPR = weeklyAPR / 7;
      var yearlyAPR = weeklyAPR * 52;
      var weeklyRewarderAPR = usdRewarderPerWeek / staked_tvl * 100;
      var dailyRewarderAPR = weeklyRewarderAPR / 7;
      var yearlyRewarderAPR = weeklyRewarderAPR * 52;
      let totalDailyAPR = dailyAPR + dailyRewarderAPR;
      let totalWeeklyAPR = weeklyAPR + weeklyRewarderAPR;
      let totalYearlyAPR = yearlyRewarderAPR + yearlyAPR;
      let totalUSDPerWeek = usdPerWeek + usdRewarderPerWeek;
      _print(`APR ${rewardTokenTicker}: Day ${dailyAPR.toFixed(2)}% Week ${weeklyAPR.toFixed(2)}% Year ${yearlyAPR.toFixed(2)}%`);
      _print(`APR ${rewarderTicker}: Day ${dailyRewarderAPR.toFixed(2)}% Week ${weeklyRewarderAPR.toFixed(2)}% Year ${yearlyRewarderAPR.toFixed(2)}%`);
      var userStakedUsd = userStaked * poolTokenPrice;
      var userStakedPct = userStakedUsd / staked_tvl * 100;
      _print(`Total Per Week: $${formatMoney(totalUSDPerWeek)}`);
      _print(`Total APR: Day ${totalDailyAPR.toFixed(2)}% Week ${totalWeeklyAPR.toFixed(2)}% Year ${totalYearlyAPR.toFixed(2)}%`);
      _print(`You are staking ${userStaked.toFixed(fixedDecimals)} ${stakeTokenTicker} ($${formatMoney(userStakedUsd)}), ${userStakedPct.toFixed(2)}% of the pool.`);
      var userWeeklyRewards = userStakedPct * poolRewardsPerWeek / 100;
      var userRewarderWeeklyRewards = userStakedPct * poolRewarderRewardsPerWeek / 100;
      var userDailyRewards = userWeeklyRewards / 7;
      var userRewarderDailyRewards = userRewarderWeeklyRewards / 7;
      var userYearlyRewards = userWeeklyRewards * 52;
      var userRewarderYearlyRewards = userRewarderWeeklyRewards * 52;
      if (userStaked > 0) {
        _print(`Estimated Total earnings:`
            + ` Day ($${formatMoney(userDailyRewards*rewardPrice+userRewarderDailyRewards*rewardRewarderPrice)})`
            + ` Week ($${formatMoney(userWeeklyRewards*rewardPrice+userRewarderWeeklyRewards*rewardRewarderPrice)})`
            + ` Year ($${formatMoney(userYearlyRewards*rewardPrice+userRewarderYearlyRewards*rewardRewarderPrice)})`);
      }
      return {
        userStakedUsd,
        totalStakedUsd : staked_tvl,
        userStakedPct,
        yearlyAPR : totalYearlyAPR,
        userYearlyUsd : userYearlyRewards * rewardPrice + userRewarderYearlyRewards * rewardRewarderPrice
      }
    }
  
  function printRewarderContractLinks(App, chefAbi, chefAddr, poolIndex, poolAddress, pendingRewardsFunction,
      rewardTokenTicker, stakeTokenTicker, unstaked, userStaked, pendingRewardTokens, fixedDecimals, rewardTokenPrice, pendingRewarderTokens,
      rewarderTicker, rewardRewarderPrice) {
    fixedDecimals = fixedDecimals ?? 2;
    const approveAndStake = async function() {
      return chefContract_stake(chefAbi, chefAddr, poolIndex, poolAddress, App)
    }
    const unstake = async function() {
      return chefContract_unstake(chefAbi, chefAddr, poolIndex, App, pendingRewardsFunction)
    }
    const claim = async function() {
      return joeContract_claim(chefAbi, chefAddr, poolIndex, App, pendingRewardsFunction)
    }
    _print_link(`Stake ${unstaked.toFixed(fixedDecimals)} ${stakeTokenTicker}`, approveAndStake)
    _print_link(`Unstake ${userStaked.toFixed(fixedDecimals)} ${stakeTokenTicker}`, unstake)
    _print_link(`Claim ${pendingRewardTokens.toFixed(fixedDecimals)} ${rewardTokenTicker} ($${formatMoney(pendingRewardTokens*rewardTokenPrice)}) + ${pendingRewarderTokens.toFixed(fixedDecimals)} ${rewarderTicker} ($${formatMoney(pendingRewarderTokens*rewardRewarderPrice)})`, claim)
    _print(`Staking or unstaking also claims rewards.`)
  }

function printJoeNormalPool(App, chefAbi, chefAddr, prices, tokens, poolInfo, poolIndex, poolPrices,
                         totalAllocPoints, rewardsPerWeek, rewardTokenTicker, rewardTokenAddress,
                         pendingRewardsFunction, fixedDecimals, chain="avax", depositFee=0, withdrawFee=0) {
    fixedDecimals = fixedDecimals ?? 2;
    const sp = (poolInfo.stakedToken == null) ? null : getPoolPrices(tokens, prices, poolInfo.stakedToken, chain);
    var poolRewardsPerWeek = poolInfo.allocPoints / totalAllocPoints * rewardsPerWeek;
    if (poolRewardsPerWeek == 0 && rewardsPerWeek != 0) return;
    const userStaked = poolInfo.userLPStaked ?? poolInfo.userStaked;
    const rewardPrice = getParameterCaseInsensitive(prices, rewardTokenAddress)?.usd;
    const staked_tvl = sp?.staked_tvl ?? poolPrices.staked_tvl;
    _print_inline(`${poolIndex} - `);
    poolPrices.print_price(chain);
    sp?.print_price(chain);
    const apr = printAPR(rewardTokenTicker, rewardPrice, poolRewardsPerWeek, poolPrices.stakeTokenTicker,
      staked_tvl, userStaked, poolPrices.price, fixedDecimals);
    if (poolInfo.userLPStaked > 0) sp?.print_contained_price(userStaked);
    if (poolInfo.userStaked > 0) poolPrices.print_contained_price(userStaked);
    printJoeNormalContractLinks(App, chefAbi, chefAddr, poolIndex, poolInfo.address, pendingRewardsFunction,
      rewardTokenTicker, poolPrices.stakeTokenTicker, poolInfo.poolToken.unstaked,
      poolInfo.userStaked, poolInfo.pendingRewardTokens, fixedDecimals, rewardPrice, chain, depositFee, withdrawFee);
    return apr;
  }
  
  function printJoeNormalContractLinks(App, chefAbi, chefAddr, poolIndex, poolAddress, pendingRewardsFunction,
      rewardTokenTicker, stakeTokenTicker, unstaked, userStaked, pendingRewardTokens, fixedDecimals,
      rewardTokenPrice, chain, depositFee, withdrawFee) {
    fixedDecimals = fixedDecimals ?? 2;
    const approveAndStake = async function() {
      return chefContract_stake(chefAbi, chefAddr, poolIndex, poolAddress, App)
    }
    const unstake = async function() {
      return chefContract_unstake(chefAbi, chefAddr, poolIndex, App, pendingRewardsFunction)
    }
    const claim = async function() {
      return joeContract_claim(chefAbi, chefAddr, poolIndex, App, pendingRewardsFunction)
    }
    if(depositFee > 0){
      _print_link(`Stake ${unstaked.toFixed(fixedDecimals)} ${stakeTokenTicker} - Fee ${depositFee}%`, approveAndStake)
    }else{
      _print_link(`Stake ${unstaked.toFixed(fixedDecimals)} ${stakeTokenTicker}`, approveAndStake)
    }
    if(withdrawFee > 0){
      _print_link(`Unstake ${userStaked.toFixed(fixedDecimals)} ${stakeTokenTicker} - Fee ${withdrawFee}%`, unstake)
    }else{
      _print_link(`Unstake ${userStaked.toFixed(fixedDecimals)} ${stakeTokenTicker}`, unstake)
    }
    _print_link(`Claim ${pendingRewardTokens.toFixed(fixedDecimals)} ${rewardTokenTicker} ($${formatMoney(pendingRewardTokens*rewardTokenPrice)})`, claim)
    _print(`Staking or unstaking also claims rewards.`)
    _print("");
  }
  
  const joeContract_claim = async function(chefAbi, chefAddress, poolIndex, App,
      pendingRewardsFunction) {
    const signer = App.provider.getSigner()
  
    const CHEF_CONTRACT = new ethers.Contract(chefAddress, chefAbi, signer)
  
    const earnedTokenAmount = await CHEF_CONTRACT.callStatic[pendingRewardsFunction](poolIndex, App.YOUR_ADDRESS) / 1e18
  
    if (earnedTokenAmount > 0) {
      showLoading()
      CHEF_CONTRACT.harvestFromMasterChef({gasLimit: 500000})
          .then(function(t) {
            return App.provider.waitForTransaction(t.hash)
          })
          .catch(function() {
            hideLoading()
          })
    }
  }