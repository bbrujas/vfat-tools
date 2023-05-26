const BSC_VAULT_ABI = [{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_controller","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"available","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"controller","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"depositAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"earn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"governance","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"reserve","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"harvest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"max","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"min","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_controller","type":"address"}],"name":"setController","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_governance","type":"address"}],"name":"setGovernance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_min","type":"uint256"}],"name":"setMin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
const VALUE_LP_ABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"collectedFee0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"collectedFee1","type":"uint112"}],"name":"PaidProtocolFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"formula","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCollectedFees","outputs":[{"internalType":"uint112","name":"_collectedFee0","type":"uint112"},{"internalType":"uint112","name":"_collectedFee1","type":"uint112"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getSwapFee","outputs":[{"internalType":"uint32","name":"_swapFee","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTokenWeights","outputs":[{"internalType":"uint32","name":"_tokenWeight0","type":"uint32"},{"internalType":"uint32","name":"_tokenWeight1","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"},{"internalType":"uint32","name":"_tokenWeight0","type":"uint32"},{"internalType":"uint32","name":"_swapFee","type":"uint32"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]
const BSC_DLP_ABI = [{"inputs":[{"internalType":"address","name":"_originToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferPrepared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_NEW_OWNER_","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_OWNER_","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"originToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const MINTER_BSC_ABI = [{"inputs":[{"internalType":"address","name":"tranche","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"AddLiquidityNotAllowed","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"AssetNotListed","type":"error"},{"inputs":[{"internalType":"address","name":"indexToken","type":"address"},{"internalType":"address","name":"collateralToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"CannotDistributeToTranches","type":"bool"}],"name":"CannotDistributeToTranches","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"CannotSetRiskFactorForStableCoin","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"DuplicateToken","type":"error"},{"inputs":[],"name":"FeeDistributorOnly","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"InsufficientPoolAmount","type":"error"},{"inputs":[],"name":"InvalidInterval","type":"error"},{"inputs":[{"internalType":"uint256","name":"size","type":"uint256"},{"internalType":"uint256","name":"margin","type":"uint256"},{"internalType":"uint256","name":"maxLeverage","type":"uint256"}],"name":"InvalidLeverage","type":"error"},{"inputs":[],"name":"InvalidMaxLeverage","type":"error"},{"inputs":[],"name":"InvalidPositionSize","type":"error"},{"inputs":[{"internalType":"address","name":"index","type":"address"},{"internalType":"address","name":"collateral","type":"address"}],"name":"InvalidTokenPair","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"}],"name":"InvalidTranche","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"globalShortSize","type":"uint256"}],"name":"MaxGlobalShortSizeExceeded","type":"error"},{"inputs":[],"name":"NotApplicableForStableCoin","type":"error"},{"inputs":[],"name":"OrderManagerOnly","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"indexToken","type":"address"},{"internalType":"address","name":"collateralToken","type":"address"},{"internalType":"enum Side","name":"side","type":"uint8"}],"name":"PositionNotExists","type":"error"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"PositionNotLiquidated","type":"error"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"},{"internalType":"uint256","name":"outAmount","type":"uint256"},{"internalType":"uint256","name":"trancheBalance","type":"uint256"}],"name":"RemoveLiquidityTooMuch","type":"error"},{"inputs":[],"name":"RequireAllTokens","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"ReserveReduceTooMuch","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SameTokenSwap","type":"error"},{"inputs":[],"name":"SlippageExceeded","type":"error"},{"inputs":[{"internalType":"uint256","name":"number","type":"uint256"},{"internalType":"uint256","name":"max","type":"uint256"}],"name":"TooManyTokenAdded","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"UnknownToken","type":"error"},{"inputs":[],"name":"UpdateCauseLiquidation","type":"error"},{"inputs":[{"internalType":"uint256","name":"maxValue","type":"uint256"}],"name":"ValueTooHigh","type":"error"},{"inputs":[],"name":"ZeroAddress","type":"error"},{"inputs":[],"name":"ZeroAmount","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"AddRemoveLiquidityFeeSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"key","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"size","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"collateralValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"entryPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"entryInterestRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reserveAmount","type":"uint256"}],"name":"ClosePosition","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DaoFeeReduced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"DaoFeeSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DaoFeeWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"key","type":"bytes32"},{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"collateralToken","type":"address"},{"indexed":false,"internalType":"address","name":"indexToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"collateralChanged","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"sizeChanged","type":"uint256"},{"indexed":false,"internalType":"enum Side","name":"side","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"indexPrice","type":"uint256"},{"components":[{"internalType":"uint256","name":"sig","type":"uint256"},{"internalType":"uint256","name":"abs","type":"uint256"}],"indexed":false,"internalType":"struct SignedInt","name":"pnl","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"feeValue","type":"uint256"}],"name":"DecreasePosition","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"feeDistributor","type":"address"}],"name":"FeeDistributorSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"key","type":"bytes32"},{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"collateralToken","type":"address"},{"indexed":false,"internalType":"address","name":"indexToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"collateralValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"sizeChanged","type":"uint256"},{"indexed":false,"internalType":"enum Side","name":"side","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"indexPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeValue","type":"uint256"}],"name":"IncreasePosition","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"borrowIndex","type":"uint256"}],"name":"InterestAccrued","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"interestRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"interval","type":"uint256"}],"name":"InterestRateSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"key","type":"bytes32"},{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"collateralToken","type":"address"},{"indexed":false,"internalType":"address","name":"indexToken","type":"address"},{"indexed":false,"internalType":"enum Side","name":"side","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"size","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"collateralValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reserveAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"indexPrice","type":"uint256"},{"components":[{"internalType":"uint256","name":"sig","type":"uint256"},{"internalType":"uint256","name":"abs","type":"uint256"}],"indexed":false,"internalType":"struct SignedInt","name":"pnl","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"feeValue","type":"uint256"}],"name":"LiquidatePosition","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tranche","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"LiquidityAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tranche","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"lpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountOut","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"LiquidityRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"ratio","type":"uint256"}],"name":"MaintenanceMarginChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"max","type":"uint256"}],"name":"MaxGlobalLongSizeRatioSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"max","type":"uint256"}],"name":"MaxGlobalShortSizeSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"maxLeverage","type":"uint256"}],"name":"MaxLeverageChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"maxPositionSize","type":"uint256"}],"name":"MaxPositionSizeSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOracle","type":"address"},{"indexed":true,"internalType":"address","name":"newOracle","type":"address"}],"name":"OracleChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"asset","type":"address"},{"indexed":true,"internalType":"address","name":"tranche","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"hasProfit","type":"bool"}],"name":"PnLDistributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"hook","type":"address"}],"name":"PoolHookChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"positionFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"liquidationFee","type":"uint256"}],"name":"PositionFeeSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"orderManager","type":"address"}],"name":"SetOrderManager","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"tokenIn","type":"address"},{"indexed":false,"internalType":"address","name":"tokenOut","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountIn","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountOut","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"baseSwapFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"taxBasisPoint","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stableCoinBaseSwapFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stableCoinTaxBasisPoint","type":"uint256"}],"name":"SwapFeeSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"}],"name":"TokenDelisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"}],"name":"TokenRiskFactorUpdated","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"weight","type":"uint256"}],"indexed":false,"internalType":"struct TokenWeight[]","name":"","type":"tuple[]"}],"name":"TokenWeightSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"}],"name":"TokenWhitelisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"lpToken","type":"address"}],"name":"TrancheAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"key","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"size","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"collateralValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"entryPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"entryInterestRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reserveAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"indexPrice","type":"uint256"}],"name":"UpdatePosition","type":"event"},{"inputs":[],"name":"accrualInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tranche","type":"address"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amountIn","type":"uint256"},{"internalType":"uint256","name":"_minLpAmount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"addLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"addRemoveLiquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"bool","name":"_isStableCoin","type":"bool"}],"name":"addToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tranche","type":"address"}],"name":"addTranche","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allAssets","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allTranches","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"averageShortPrices","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tranche","type":"address"},{"internalType":"address","name":"_tokenOut","type":"address"},{"internalType":"uint256","name":"_lpAmount","type":"uint256"}],"name":"calcRemoveLiquidity","outputs":[{"internalType":"uint256","name":"outAmount","type":"uint256"},{"internalType":"uint256","name":"outAmountAfterFee","type":"uint256"},{"internalType":"uint256","name":"feeAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenIn","type":"address"},{"internalType":"address","name":"_tokenOut","type":"address"},{"internalType":"uint256","name":"_amountIn","type":"uint256"}],"name":"calcSwapOutput","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"feeAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_indexToken","type":"address"},{"internalType":"address","name":"_collateralToken","type":"address"},{"internalType":"uint256","name":"_collateralChanged","type":"uint256"},{"internalType":"uint256","name":"_sizeChanged","type":"uint256"},{"internalType":"enum Side","name":"_side","type":"uint8"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"decreasePosition","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"delistToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fee","outputs":[{"internalType":"uint256","name":"positionFee","type":"uint256"},{"internalType":"uint256","name":"liquidationFee","type":"uint256"},{"internalType":"uint256","name":"baseSwapFee","type":"uint256"},{"internalType":"uint256","name":"taxBasisPoint","type":"uint256"},{"internalType":"uint256","name":"stableCoinBaseSwapFee","type":"uint256"},{"internalType":"uint256","name":"stableCoinTaxBasisPoint","type":"uint256"},{"internalType":"uint256","name":"daoFee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeDistributor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllTranchesLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"getPoolAsset","outputs":[{"components":[{"internalType":"uint256","name":"poolAmount","type":"uint256"},{"internalType":"uint256","name":"reservedAmount","type":"uint256"},{"internalType":"uint256","name":"guaranteedValue","type":"uint256"},{"internalType":"uint256","name":"totalShortSize","type":"uint256"}],"internalType":"struct AssetInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_max","type":"bool"}],"name":"getPoolValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tranche","type":"address"},{"internalType":"bool","name":"_max","type":"bool"}],"name":"getTrancheValue","outputs":[{"internalType":"uint256","name":"sum","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_indexToken","type":"address"},{"internalType":"address","name":"_collateralToken","type":"address"},{"internalType":"uint256","name":"_sizeChanged","type":"uint256"},{"internalType":"enum Side","name":"_side","type":"uint8"}],"name":"increasePosition","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"interestRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isAsset","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isListed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isStableCoin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isTranche","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_indexToken","type":"address"},{"internalType":"address","name":"_collateralToken","type":"address"},{"internalType":"enum Side","name":"_side","type":"uint8"}],"name":"liquidatePosition","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maintenanceMargin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"maxGlobalLongSizeRatios","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"maxGlobalShortSizes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxLeverage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oracle","outputs":[{"internalType":"contract ILevelOracle","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"orderManager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolHook","outputs":[{"internalType":"contract IPoolHook","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"poolTokens","outputs":[{"internalType":"uint256","name":"feeReserve","type":"uint256"},{"internalType":"uint256","name":"poolBalance","type":"uint256"},{"internalType":"uint256","name":"lastAccrualTimestamp","type":"uint256"},{"internalType":"uint256","name":"borrowIndex","type":"uint256"},{"internalType":"uint256","name":"averageShortPrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"positions","outputs":[{"internalType":"uint256","name":"size","type":"uint256"},{"internalType":"uint256","name":"collateralValue","type":"uint256"},{"internalType":"uint256","name":"reserveAmount","type":"uint256"},{"internalType":"uint256","name":"entryPrice","type":"uint256"},{"internalType":"uint256","name":"borrowIndex","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"refreshVirtualPoolValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tranche","type":"address"},{"internalType":"address","name":"_tokenOut","type":"address"},{"internalType":"uint256","name":"_lpAmount","type":"uint256"},{"internalType":"uint256","name":"_minOut","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"removeLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"riskFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setAddRemoveLiquidityFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_daoFee","type":"uint256"}],"name":"setDaoFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeDistributor","type":"address"}],"name":"setFeeDistributor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_interestRate","type":"uint256"},{"internalType":"uint256","name":"_accrualInterval","type":"uint256"}],"name":"setInterestRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_margin","type":"uint256"}],"name":"setMaintenanceMargin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_ratio","type":"uint256"}],"name":"setMaxGlobalLongSizeRatio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setMaxGlobalShortSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxLeverage","type":"uint256"}],"name":"setMaxLeverage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_oracle","type":"address"}],"name":"setOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_orderManager","type":"address"}],"name":"setOrderManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_hook","type":"address"}],"name":"setPoolHook","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_positionFee","type":"uint256"},{"internalType":"uint256","name":"_liquidationFee","type":"uint256"}],"name":"setPositionFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"components":[{"internalType":"address","name":"tranche","type":"address"},{"internalType":"uint256","name":"riskFactor","type":"uint256"}],"internalType":"struct Pool.RiskConfig[]","name":"_config","type":"tuple[]"}],"name":"setRiskFactor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_baseSwapFee","type":"uint256"},{"internalType":"uint256","name":"_taxBasisPoint","type":"uint256"},{"internalType":"uint256","name":"_stableCoinBaseSwapFee","type":"uint256"},{"internalType":"uint256","name":"_stableCoinTaxBasisPoint","type":"uint256"}],"name":"setSwapFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"weight","type":"uint256"}],"internalType":"struct TokenWeight[]","name":"tokens","type":"tuple[]"}],"name":"setTargetWeight","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenIn","type":"address"},{"internalType":"address","name":"_tokenOut","type":"address"},{"internalType":"uint256","name":"_minOut","type":"uint256"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"bytes","name":"extradata","type":"bytes"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"targetWeights","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalRiskFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"trancheAssets","outputs":[{"internalType":"uint256","name":"poolAmount","type":"uint256"},{"internalType":"uint256","name":"reservedAmount","type":"uint256"},{"internalType":"uint256","name":"guaranteedValue","type":"uint256"},{"internalType":"uint256","name":"totalShortSize","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"tranchePositionReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_indexToken","type":"address"},{"internalType":"address","name":"_collateralToken","type":"address"},{"internalType":"enum Side","name":"_side","type":"uint8"},{"internalType":"bool","name":"_isIncrease","type":"bool"}],"name":"validateToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"virtualPoolValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"withdrawFee","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const BSC_TRANCHE_ABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address","name":"_minter","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"minter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]

async function getBscUniPool(App, pool, poolAddress, stakingAddress) {
    let q0, q1;
    const reserves = await pool.getReserves();
    q0 = reserves._reserve0;
    q1 = reserves._reserve1;
    const decimals = await pool.decimals();
    const token0 = await pool.token0();
    const token1 = await pool.token1();
    return {
        symbol : await pool.symbol(),
        name : await pool.name(),
        address: poolAddress,
        token0,
        q0,
        token1,
        q1,
        totalSupply: await pool.totalSupply() / 10 ** decimals,
        stakingAddress: stakingAddress,
        staked: await pool.balanceOf(stakingAddress) / 10 ** decimals,
        decimals: decimals,
        unstaked: await pool.balanceOf(App.YOUR_ADDRESS) / 10 ** decimals,
        contract: pool,
        tokens : [token0, token1],
        is1inch : false
    };
}

async function getValuePool(App, pool, poolAddress, stakingAddress, tokenWeights) {
    let q0, q1;
    const reserves = await pool.getReserves();
    q0 = reserves._reserve0;
    q1 = reserves._reserve1;
    const decimals = await pool.decimals();
    const token0 = await pool.token0();
    const token1 = await pool.token1();
    return {
        symbol : await pool.symbol(),
        name : await pool.name(),
        address: poolAddress,
        token0,
        q0,
        w0 : tokenWeights._tokenWeight0,
        token1,
        q1,
        w1 : tokenWeights._tokenWeight1,
        totalSupply: await pool.totalSupply() / 10 ** decimals,
        stakingAddress: stakingAddress,
        staked: await pool.balanceOf(stakingAddress) / 10 ** decimals,
        decimals: decimals,
        unstaked: await pool.balanceOf(App.YOUR_ADDRESS) / 10 ** decimals,
        contract: pool,
        tokens : [token0, token1],
        is1inch : false
    };
}

async function getBep20(App, token, address, stakingAddress) {
    if (address == "0x0000000000000000000000000000000000000000") {
      return {
        address,
        name : "Binance",
        symbol : "BNB",
        totalSupply: 1e8,
        decimals: 18,
        staked: 0,
        unstaked: 0,
        contract: null,
        tokens:[address]
      }
    }
    const decimals = await token.decimals()
    return {
        address,
        name : await token.name(),
        symbol : await token.symbol(),
        totalSupply : await token.totalSupply(),
        decimals : decimals,
        staked:  await token.balanceOf(stakingAddress) / 10 ** decimals,
        unstaked: await token.balanceOf(App.YOUR_ADDRESS)  / 10 ** decimals,
        contract: token,
        tokens : [address]
    };
}

async function getBscVault(App, vault, address, stakingAddress) {
  const decimals = await vault.decimals();
  const token_ = await vault.token();
  const token = await getBscToken(App, token_, address);
  return {
    address,
    name : await vault.name(),
    symbol : await vault.symbol(),
    totalSupply : await vault.totalSupply(),
    decimals : decimals,
    staked: await vault.balanceOf(stakingAddress) / 10 ** decimals,
    unstaked: await vault.balanceOf(App.YOUR_ADDRESS) / 10 ** decimals,
    token: token,
    balance : await vault.balance(),
    contract: vault,
    tokens : [address].concat(token.tokens),
  }
}

async function getBscSwapPool(App, _3pool, address, stakingAddress, swapAddress) {
  const swap = new ethers.Contract(swapAddress, BSC_SWAP_ABI, App.provider)
  const virtualPrice = await swap.getVirtualPrice();
  const coin0 = await swap.getToken(0);
  const token = await getBscToken(App, coin0, address);
  const decimals = await _3pool.decimals();
  return {
      address,
      name : await _3pool.name(),
      symbol : await _3pool.symbol(),
      totalSupply : await _3pool.totalSupply(),
      decimals : decimals,
      staked:  await _3pool.balanceOf(stakingAddress) / 10 ** decimals,
      unstaked: await _3pool.balanceOf(App.YOUR_ADDRESS)  / 10 ** decimals,
      contract: _3pool,
      tokens : [address, coin0],
      token,
      virtualPrice : virtualPrice / 1e18
  };
}

async function getBscCurveToken(App, curve, address, stakingAddress, minterAddress) {
  const minter = new ethers.Contract(minterAddress, MINTER_ABI, App.provider)
  const virtualPrice = await minter.get_virtual_price();
  const coin0 = await minter.coins(0);
  const token = await getBscToken(App, coin0, address);
  const decimals = await curve.decimals();
  const staked = await curve.balanceOf(stakingAddress);
  const unstaked = await curve.balanceOf(App.YOUR_ADDRESS)
  return {
      address,
      name : await curve.name(),
      symbol : await curve.symbol(),
      totalSupply : await curve.totalSupply(),
      decimals : decimals,
      staked:  staked / 10 ** decimals,
      unstaked: unstaked  / 10 ** decimals,
      contract: curve,
      tokens : [address, coin0],
      token,
      virtualPrice : virtualPrice / 1e18
  };
}

async function getBscTrancheToken(App, tranche, address, stakingAddress, minterAddress) {
  const minter = new ethers.Contract(minterAddress, MINTER_BSC_ABI, App.provider)
  let assets = [], trancheAssetsData = [], assetTokens = [];
  for(let i = 0; i < 6; i++){
    const asset = await minter.allAssets(i);
    assets.push(asset);
    const trancheAssetData = await getTrancheAssetInfo(tranche.address, asset, minter);
    trancheAssetsData.push(trancheAssetData);
    const assetToken = await getBscToken(App, asset, tranche.address);
    assetToken.staked = trancheAssetData.poolAmount / 10 ** assetToken.decimals;
    assetTokens.push(assetToken);
  }
  const decimals = await tranche.decimals();
  const staked = await tranche.balanceOf(stakingAddress);
  const unstaked = await tranche.balanceOf(App.YOUR_ADDRESS);
  return {
      address,
      name : await tranche.name(),
      symbol : await tranche.symbol(),
      totalSupply : await tranche.totalSupply() / 10 ** decimals,
      decimals : decimals,
      staked:  staked / 10 ** decimals,
      unstaked: unstaked / 10 ** decimals,
      contract: tranche,
      assetTokens,
      assets,
      trancheAssetsData
  };
}

async function getBscBalancerPool(App, pool, poolAddress, stakingAddress, tokens, smartToken) {
  let decimals = await pool.decimals();
  let symbol = await pool.symbol();
  let name = await pool.name();
  let totalSupply = await pool.totalSupply();
  let staked = await pool.balanceOf(stakingAddress);
  let unstaked = await pool.balanceOf(App.YOUR_ADDRESS);
  let poolTokens = [];
  for (const t of tokens) {
    poolTokens.push({ address: t, weight: await pool.getNormalizedWeight(t) / 1e18, balance: await pool.getBalance(t) })
};
  if (smartToken) {
    totalSupply = await smartToken.totalSupply();
    staked = await smartToken.balanceOf(stakingAddress);
    unstaked = await smartToken.balanceOf(App.YOUR_ADDRESS);
  }
  return {
      symbol,
      name,
      address: poolAddress,
      poolTokens, //address, weight and balance
      totalSupply: totalSupply / 10 ** decimals,
      stakingAddress,
      staked: staked / 10 ** decimals,
      decimals: decimals,
      unstaked: unstaked / 10 ** decimals,
      contract: pool,
      tokens
  };
}

async function getBscBunicornTokenPool(App, pool, poolAddress, stakingAddress, tokens, smartToken) {
    const poolData = await getBscBalancerPool(App, pool, poolAddress, stakingAddress, tokens, smartToken);

    return { ...poolData, ...{ buniPoolTokens: poolData.poolTokens }}
}

async function getBscBunicornStablePool(App, pool, poolAddress, stakingAddress, tokens) {
    let decimals = await pool.decimals();
    let symbol = await pool.symbol();
    let name = await pool.name();
    let totalSupply = await pool.totalSupply();
    let staked = await pool.balanceOf(stakingAddress);
    const unstaked = await pool.balanceOf(App.YOUR_ADDRESS);
    let poolTokens = [];
    const tokenBalances = await pool.getReserves();
    const token0Balance = window.ethers.BigNumber.from(tokenBalances[0]).toString();
    const token1Balance = window.ethers.BigNumber.from(tokenBalances[1]).toString();
    const totalTokenBalance = parseFloat(token0Balance)  + parseFloat(token1Balance);
    for (let i = 0; i < tokens.length; i++) {
        const tokenWeightPercent = parseFloat(window.ethers.BigNumber.from(tokenBalances[i]).toString()) / totalTokenBalance;

        poolTokens.push({ address: tokens[i], weight: (Number(tokenWeightPercent.toString())).toFixed(4), balance: tokenBalances[i] })
    }
    return {
        poolType: 'stable',
        symbol,
        name,
        address: poolAddress,
        poolTokens, //address, weight and balance
        buniPoolTokens: poolTokens, //address, weight and balance
        totalSupply: (totalSupply / 10 ** decimals),
        stakingAddress,
        staked: staked / 10 ** decimals,
        decimals: decimals,
        unstaked: unstaked / 10 ** decimals,
        contract: pool,
        tokens
    };
}

async function getBscDlpPool(App, dlpPool, tokenAddress, originTokenAddress, stakingAddress){
  const ownerAddress = await dlpPool._OWNER_();
  const originToken = await getBscToken(App, originTokenAddress, ownerAddress);
  const totalSupply = await dlpPool.totalSupply();
  const name = await dlpPool.name();
  const decimals = await dlpPool.decimals()
  return {
    address : tokenAddress,
    name : name,
    symbol : name,
    totalSupply : totalSupply,
    decimals : decimals,
    staked : totalSupply / 10 ** decimals,
    unstaked : await dlpPool.balanceOf(App.YOUR_ADDRESS) / 10 ** decimals,
    token : originToken,
    balance : originToken.staked * 10 ** originToken.decimals,
    contract : dlpPool,
    tokens : [originTokenAddress]
  }
}

async function getBscStoredToken(App, tokenAddress, stakingAddress, type) {
  switch (type) {
    case "uniswap":
      const pool = new ethers.Contract(tokenAddress, UNI_ABI, App.provider);
      return await getBscUniPool(App, pool, tokenAddress, stakingAddress);
    case "balancer":
      const bal = new ethers.Contract(tokenAddress, BALANCER_POOL_ABI, App.provider);
      const tokens = await bal.getFinalTokens();
      return await getBscBalancerPool(App, bal, tokenAddress, stakingAddress, tokens);
    case "bunicorn:stable":
      const poolStableContract = new ethers.Contract(tokenAddress, BUNICORN_STABLE_POOL_ABI, App.provider);
      const token0 = await poolStableContract.token0();
      const token1 = await poolStableContract.token1();
      const poolStables = [token0, token1];
      return await getBscBunicornStablePool(App, poolStableContract, tokenAddress, stakingAddress, poolStables);
    case "swap":
      const _3pool = new ethers.Contract(tokenAddress, BSC_3POOL_ABI, App.provider);
      const swap = await _3pool.swap();
      return await getBscSwapPool(App, _3pool, tokenAddress, stakingAddress, swap);
    case "value":
      const valuePool = new ethers.Contract(tokenAddress, VALUE_LP_ABI, App.provider);
      const tokenWeights = await valuePool.getTokenWeights()
      return await getValuePool(App, valuePool, tokenAddress, stakingAddress, tokenWeights);
    case "dlp":
      const dlpPool = new ethers.Contract(tokenAddress, BSC_DLP_ABI, App.provider);
      const originTokenAddress = await dlpPool.originToken();
      return await getBscDlpPool(App, dlpPool, tokenAddress, originTokenAddress, stakingAddress);
    case "erc20":
      const erc20 = new ethers.Contract(tokenAddress, ERC20_ABI, App.provider);
      return await getBep20(App, erc20, tokenAddress, stakingAddress);
    case "bscVault":
      const vault = new ethers.Contract(tokenAddress, BSC_VAULT_ABI, App.provider);
      return await getBscVault(App, vault, tokenAddress, stakingAddress);
    case "bscCurve":
      const crv = new ethers.Contract(tokenAddress, CURVE_ABI, App.provider);
      const minter = await crv.minter();
      return await getBscCurveToken(App, crv, tokenAddress, stakingAddress, minter);
    case "bscTranche":
      const tranche = new ethers.Contract(tokenAddress, BSC_TRANCHE_ABI, App.provider);
      const minter2 = await tranche.minter();
      return await getBscTrancheToken(App, tranche, tokenAddress, stakingAddress, minter2);
  }
}

const BSC_3POOL_ABI = [{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swap","outputs":[{"internalType":"contract ISwap","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const BSC_SWAP_ABI = [{"inputs":[{"internalType":"contract IERC20[]","name":"_pooledTokens","type":"address[]"},{"internalType":"uint8[]","name":"decimals","type":"uint8[]"},{"internalType":"string","name":"lpTokenName","type":"string"},{"internalType":"string","name":"lpTokenSymbol","type":"string"},{"internalType":"uint256","name":"_a","type":"uint256"},{"internalType":"uint256","name":"_fee","type":"uint256"},{"internalType":"uint256","name":"_adminFee","type":"uint256"},{"internalType":"uint256","name":"_depositFee","type":"uint256"},{"internalType":"uint256","name":"_withdrawFee","type":"uint256"},{"internalType":"address","name":"_devaddr","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tokenAmounts","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"fees","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"invariant","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lpTokenSupply","type":"uint256"}],"name":"AddLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newAdminFee","type":"uint256"}],"name":"NewAdminFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newDepositFee","type":"uint256"}],"name":"NewDepositFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newSwapFee","type":"uint256"}],"name":"NewSwapFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newWithdrawFee","type":"uint256"}],"name":"NewWithdrawFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldA","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newA","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"initialTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"futureTime","type":"uint256"}],"name":"RampA","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tokenAmounts","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"lpTokenSupply","type":"uint256"}],"name":"RemoveLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tokenAmounts","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"fees","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"invariant","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lpTokenSupply","type":"uint256"}],"name":"RemoveLiquidityImbalance","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"lpTokenAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lpTokenSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"boughtId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensBought","type":"uint256"}],"name":"RemoveLiquidityOne","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"currentA","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"StopRampA","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensSold","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensBought","type":"uint256"},{"indexed":false,"internalType":"uint128","name":"soldId","type":"uint128"},{"indexed":false,"internalType":"uint128","name":"boughtId","type":"uint128"}],"name":"TokenSwap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256","name":"minToMint","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"calculateCurrentWithdrawFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateRemoveLiquidity","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint8","name":"tokenIndex","type":"uint8"}],"name":"calculateRemoveLiquidityOneToken","outputs":[{"internalType":"uint256","name":"availableTokenAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"tokenIndexFrom","type":"uint8"},{"internalType":"uint8","name":"tokenIndexTo","type":"uint8"},{"internalType":"uint256","name":"dx","type":"uint256"}],"name":"calculateSwap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bool","name":"deposit","type":"bool"}],"name":"calculateTokenAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAPrecise","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getAdminBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getDepositTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"index","type":"uint8"}],"name":"getToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"index","type":"uint8"}],"name":"getTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"getTokenIndex","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVirtualPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"futureA","type":"uint256"},{"internalType":"uint256","name":"futureTime","type":"uint256"}],"name":"rampA","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256[]","name":"minAmounts","type":"uint256[]"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256","name":"maxBurnAmount","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityImbalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint8","name":"tokenIndex","type":"uint8"},{"internalType":"uint256","name":"minAmount","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityOneToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newAdminFee","type":"uint256"}],"name":"setAdminFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newDepositFee","type":"uint256"}],"name":"setDefaultDepositFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newWithdrawFee","type":"uint256"}],"name":"setDefaultWithdrawFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"setDevAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newSwapFee","type":"uint256"}],"name":"setSwapFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stopRampA","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"tokenIndexFrom","type":"uint8"},{"internalType":"uint8","name":"tokenIndexTo","type":"uint8"},{"internalType":"uint256","name":"dx","type":"uint256"},{"internalType":"uint256","name":"minDy","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapStorage","outputs":[{"internalType":"uint256","name":"initialA","type":"uint256"},{"internalType":"uint256","name":"futureA","type":"uint256"},{"internalType":"uint256","name":"initialATime","type":"uint256"},{"internalType":"uint256","name":"futureATime","type":"uint256"},{"internalType":"uint256","name":"swapFee","type":"uint256"},{"internalType":"uint256","name":"adminFee","type":"uint256"},{"internalType":"uint256","name":"defaultDepositFee","type":"uint256"},{"internalType":"uint256","name":"defaultWithdrawFee","type":"uint256"},{"internalType":"address","name":"devaddr","type":"address"},{"internalType":"contract LPToken","name":"lpToken","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"transferAmount","type":"uint256"}],"name":"updateUserWithdrawFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAdminFees","outputs":[],"stateMutability":"nonpayable","type":"function"}]

async function getBscToken(App, tokenAddress, stakingAddress) {
    if (tokenAddress == "0x0000000000000000000000000000000000000000") {
      return getBep20(App, null, tokenAddress, "")
    }
    const type = window.localStorage.getItem(tokenAddress);
    if (type) return getBscStoredToken(App, tokenAddress, stakingAddress, type);
    try {
      const vpool = new ethers.Contract(tokenAddress, VALUE_LP_ABI, App.provider);
      const tokenWeights = await vpool.getTokenWeights()
      const valuePool = await getValuePool(App, vpool, tokenAddress, stakingAddress, tokenWeights);
      window.localStorage.setItem(tokenAddress, "value");
      return valuePool;
    }
    catch(err) {
    }
    try {
      const bal = new ethers.Contract(tokenAddress, BALANCER_POOL_ABI, App.provider);
      const tokens = await bal.getFinalTokens();
      const balPool = await getBscBalancerPool(App, bal, tokenAddress, stakingAddress, tokens);
      window.localStorage.setItem(tokenAddress, "balancer");
      return balPool;
    }
    catch(err) {
    }
    try {
      const pool = new ethers.Contract(tokenAddress, BSC_DLP_ABI, App.provider);
      const originTokenAddress = await pool.originToken();
      const dlpPool = await getBscDlpPool(App, pool, tokenAddress, originTokenAddress, stakingAddress);
      window.localStorage.setItem(tokenAddress, "dlp");
      return dlpPool;
    }
    catch(err) {
    }
    try {
      const pool = new ethers.Contract(tokenAddress, UNI_ABI, App.provider);
      const _token0 = await pool.token0();
      const uniPool = await getBscUniPool(App, pool, tokenAddress, stakingAddress);
      window.localStorage.setItem(tokenAddress, "uniswap");
      return uniPool;
    }
    catch(err) {
    }
    try {
      const _3pool = new ethers.Contract(tokenAddress, BSC_3POOL_ABI, App.provider);
      const swap = await _3pool.swap();
      const res = await getBscSwapPool(App, _3pool, tokenAddress, stakingAddress, swap);
      window.localStorage.setItem(tokenAddress, "swap");
      return res;
    }
    catch(err) {
    }
    try {
      const VAULT = new ethers.Contract(tokenAddress, BSC_VAULT_ABI, App.provider);
      const _token = await VAULT.token();
      if (_token.toLowerCase() == "0x3b73c1b2ea59835cbfcadade5462b6ab630d9890") {
        throw "0x3b73c1b2ea59835cbfcadade5462b6ab630d9890 is self referential";
      }
      const vault = await getBscVault(App, VAULT, tokenAddress, stakingAddress);
      window.localStorage.setItem(tokenAddress, "bscVault");
      return vault;
    }
    catch(err) {
    }
    try {
      const tranche = new ethers.Contract(tokenAddress, BSC_TRANCHE_ABI, App.provider);
      const minter2 = await tranche.minter()
      const res = await getBscTrancheToken(App, tranche, tokenAddress, stakingAddress, minter2);
      window.localStorage.setItem(tokenAddress, "bscTranche");
      return res;
    }
    catch(err) {
      //console.log(err)
    }
    try {
      const crv = new ethers.Contract(tokenAddress, CURVE_ABI, App.provider);
      const minter = await crv.minter()
      const res = await getBscCurveToken(App, crv, tokenAddress, stakingAddress, minter);
      window.localStorage.setItem(tokenAddress, "bscCurve");
      return res;
    }
    catch(err) {
      //console.log(err)
    }
    try {
        const stablePoolContract = new ethers.Contract(tokenAddress, BUNICORN_STABLE_POOL_ABI, App.provider);
        const token0 = await stablePoolContract.token0();
        const token1 = await stablePoolContract.token1();
        const tokens = [token0, token1];
        const stablePool = await getBscBunicornStablePool(App, stablePoolContract, tokenAddress, stakingAddress, tokens);
        window.localStorage.setItem(tokenAddress, "bunicorn:stable");
        return stablePool;
    }catch(err) {
    }
    try {
      const erc20 = new ethers.Contract(tokenAddress, ERC20_ABI, App.provider);
      const _name = await erc20.name();
      const erc20tok = await getBep20(App, erc20, tokenAddress, stakingAddress);
      window.localStorage.setItem(tokenAddress, "erc20");
      return erc20tok;
    }
    catch(err) {
      console.log(`Couldn't match ${tokenAddress} to any known token type.`);
    }
  }

async function loadBscSynthetixPoolInfo(App, tokens, prices, stakingAbi, stakingAddress,
    rewardTokenFunction, stakeTokenFunction) {
      const STAKING_POOL = new ethers.Contract(stakingAddress, stakingAbi, App.provider);

      if (!STAKING_POOL.callStatic[stakeTokenFunction]) {
        console.log("Couldn't find stake function ", stakeTokenFunction);
      }
      const stakeTokenAddress = await STAKING_POOL.callStatic[stakeTokenFunction]();

      const rewardTokenAddress = await STAKING_POOL.callStatic[rewardTokenFunction]();

      var stakeToken = await getBscToken(App, stakeTokenAddress, stakingAddress);

      if (stakeTokenAddress.toLowerCase() === rewardTokenAddress.toLowerCase()) {
        stakeToken.staked = await STAKING_POOL.totalSupply() / 10 ** stakeToken.decimals;
      }

      var newPriceAddresses = stakeToken.tokens.filter(x =>
        x.toLowerCase() !=  "0xb34ab2f65c6e4f764ffe740ab83f982021faed6d" && //BSG can't be retrieved from Coingecko
        !getParameterCaseInsensitive(prices, x));
      var newPrices = await lookUpTokenPrices(newPriceAddresses);
      for (const key in newPrices) {
        if (newPrices[key]?.usd)
            prices[key] = newPrices[key];
      }
      var newTokenAddresses = stakeToken.tokens.filter(x =>
        !getParameterCaseInsensitive(tokens,x));
      for (const address of newTokenAddresses) {
          tokens[address] = await getBscToken(App, address, stakingAddress);
      }
      if (!getParameterCaseInsensitive(tokens, rewardTokenAddress)) {
          tokens[rewardTokenAddress] = await getBscToken(App, rewardTokenAddress, stakingAddress);
      }
      const rewardToken = getParameterCaseInsensitive(tokens, rewardTokenAddress);

      const rewardTokenTicker = rewardToken.symbol;

      const poolPrices = getPoolPrices(tokens, prices, stakeToken, "bsc");

      const stakeTokenTicker = poolPrices.stakeTokenTicker;

      const stakeTokenPrice =
          prices[stakeTokenAddress]?.usd ?? getParameterCaseInsensitive(prices, stakeTokenAddress)?.usd;
      const rewardTokenPrice = getParameterCaseInsensitive(prices, rewardTokenAddress)?.usd;

      const periodFinish = await STAKING_POOL.periodFinish();
      const rewardRate = await STAKING_POOL.rewardRate();
      const weeklyRewards = (Date.now() / 1000 > periodFinish) ? 0 : rewardRate / 1e18 * 604800;

      const usdPerWeek = weeklyRewards * rewardTokenPrice;

      const staked_tvl = poolPrices.staked_tvl;

      const userStaked = await STAKING_POOL.balanceOf(App.YOUR_ADDRESS) / 10 ** stakeToken.decimals;

      const userUnstaked = stakeToken.unstaked;

      const earned = await STAKING_POOL.earned(App.YOUR_ADDRESS) / 10 ** rewardToken.decimals;

      return  {
        stakingAddress,
        poolPrices,
        stakeTokenAddress,
        rewardTokenAddress,
        stakeTokenTicker,
        rewardTokenTicker,
        stakeTokenPrice,
        rewardTokenPrice,
        weeklyRewards,
        usdPerWeek,
        staked_tvl,
        userStaked,
        userUnstaked,
        earned
      }
}

async function loadBscSynthetixPool(App, tokens, prices, abi, address, rewardTokenFunction, stakeTokenFunction) {
    const info = await loadBscSynthetixPoolInfo(App, tokens, prices, abi, address, rewardTokenFunction, stakeTokenFunction);
    return await printSynthetixPool(App, info, "bsc");
}

async function loadBscBasisFork(data) {
    const App = await init_ethers();

    _print(`Initialized ${App.YOUR_ADDRESS}`);
    _print("Reading smart contracts...\n");

    var tokens = {};
    var prices = {"0x55d398326f99059ff775485246999027b3197955" : { usd : 1 }};
    var totalStaked = 0;

    let p1 = await loadBscSynthetixPool(App, tokens, prices, data.PoolABI,
        data.SharePool.address, data.SharePool.rewardToken, data.SharePool.stakeToken);
    totalStaked += p1.staked_tvl;

    if (data.SharePool2) {
      let p3 = await loadBscSynthetixPool(App, tokens, prices, data.PoolABI,
          data.SharePool2.address, data.SharePool2.rewardToken, data.SharePool2.stakeToken);
      totalStaked += p3.staked_tvl;
    }

    let p2 = await loadBscSynthetixPool(App, tokens, prices, data.PoolABI,
        data.CashPool.address, data.CashPool.rewardToken, data.CashPool.stakeToken);
    totalStaked += p2.staked_tvl;

    if (data.SeedBanks) {
      let p = await loadMultipleBscSynthetixPools(App, tokens, prices, data.SeedBanks)
      totalStaked += p.staked_tvl;
      if (p.totalUserStaked > 0) {
        _print(`You are staking a total of $${formatMoney(p.totalUserStaked)} at an APR of ${(p.totalAPR * 100).toFixed(2)}%\n`);
      }
    }

    if (!data.SeedBanks)
    {
      if (data.Boardrooms) {
        for (const boardroom of data.Boardrooms) {
          let br = await loadBoardroom(App, prices, boardroom.address, data.Oracle, data.UniswapLP, data.Cash,
              data.ShareTicker, data.CashTicker, data.ExpansionsPerDay, data.MaximumExpansion,
              data.Decimals, boardroom.ratio, data.TargetMantissa);
          totalStaked += br.staked_tvl;
        }
      }
      else {
        let br = await loadBoardroom(App, prices, data.Boardroom, data.Oracle, data.UniswapLP, data.Cash,
            data.ShareTicker, data.CashTicker, data.ExpansionsPerDay, data.MaximumExpansion,
            data.Decimals, 1, data.TargetMantissa);
        totalStaked += br.staked_tvl;
      }
    }

    _print_bold(`Total staked: $${formatMoney(totalStaked)}`)

    hideLoading();
}

async function getBscPoolInfo(App, chefContract, chefAddress, poolIndex, pendingRewardsFunction) {
  const poolInfo = await chefContract.poolInfo(poolIndex);
  if (poolInfo.allocPoint == 0 || poolIndex == 105) {
    return {
      address: poolInfo.lpToken ?? poolInfo.token,
      allocPoints: poolInfo.allocPoint ?? 1,
      poolToken: null,
      userStaked : 0,
      pendingRewardTokens : 0,
      stakedToken : null,
      userLPStaked : 0,
      lastRewardBlock : poolInfo.lastRewardBlock
    };
  }
  const poolToken = await getBscToken(App, poolInfo.lpToken ?? poolInfo.token, chefAddress);
  const userInfo = await chefContract.userInfo(poolIndex, App.YOUR_ADDRESS);
  const pendingRewardTokens = await chefContract.callStatic[pendingRewardsFunction](poolIndex, App.YOUR_ADDRESS);
  const staked = userInfo.amount / 10 ** poolToken.decimals;
  return {
      address: poolInfo.lpToken ?? poolInfo.token,
      allocPoints: poolInfo.allocPoint ?? 1,
      poolToken: poolToken,
      userStaked : staked,
      pendingRewardTokens : pendingRewardTokens / 10 ** 18,
      depositFee : (poolInfo.depositFeeBP ?? 0) / 100,
      withdrawFee : (poolInfo.withdrawFeeBP ?? 0) / 100
  };
}

async function loadBscChefContract(App, tokens, prices, chef, chefAddress, chefAbi, rewardTokenTicker,
  rewardTokenFunction, rewardsPerBlockFunction, rewardsPerWeekFixed, pendingRewardsFunction,
  deathPoolIndices) {
  const chefContract = chef ?? new ethers.Contract(chefAddress, chefAbi, App.provider);

  const poolCount = parseInt(await chefContract.poolLength(), 10);
  const totalAllocPoints = await chefContract.totalAllocPoint();

  _print(`<a href='https://bscscan.com/address/${chefAddress}' target='_blank'>Staking Contract</a>`);
  _print(`Found ${poolCount} pools.\n`)

  _print(`Showing incentivized pools only.\n`);

  var tokens = {};

  const rewardTokenAddress = await chefContract.callStatic[rewardTokenFunction]();
  const rewardToken = await getBscToken(App, rewardTokenAddress, chefAddress);
  const rewardsPerWeek = rewardsPerWeekFixed ??
    await chefContract.callStatic[rewardsPerBlockFunction]()
    / 10 ** rewardToken.decimals * 604800 / 3

  const poolInfos = await Promise.all([...Array(poolCount).keys()].map(async (x) =>
    await getBscPoolInfo(App, chefContract, chefAddress, x, pendingRewardsFunction)));

  var tokenAddresses = [].concat.apply([], poolInfos.filter(x => x.poolToken).map(x => x.poolToken.tokens));

  await Promise.all(tokenAddresses.map(async (address) => {
      tokens[address] = await getBscToken(App, address, chefAddress);
  }));

  if (deathPoolIndices) {   //load prices for the deathpool assets
    deathPoolIndices.map(i => poolInfos[i])
                     .map(poolInfo =>
      poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, "bsc") : undefined);
  }

  const poolPrices = poolInfos.map(poolInfo => poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, "bsc") : undefined);


  _print("Finished reading smart contracts.\n");

  let aprs = []
  for (i = 0; i < poolCount; i++) {
    if (poolPrices[i]) {
      const apr = printChefPool(App, chefAbi, chefAddress, prices, tokens, poolInfos[i], i, poolPrices[i],
        totalAllocPoints, rewardsPerWeek, rewardTokenTicker, rewardTokenAddress,
        pendingRewardsFunction, null, null, "bsc", poolInfos[i].depositFee, poolInfos[i].withdrawFee)
      aprs.push(apr);
    }
  }
  let totalUserStaked=0, totalStaked=0, averageApr=0;
  for (const a of aprs) {
    if (!isNaN(a.totalStakedUsd)) {
      totalStaked += a.totalStakedUsd;
    }
    if (a.userStakedUsd > 0) {
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

async function loadMultipleBscSynthetixPools(App, tokens, prices, pools) {
  let totalStaked  = 0, totalUserStaked = 0, individualAPRs = [];
  const infos = await Promise.all(pools.map(p =>
    loadBscSynthetixPoolInfo(App, tokens, prices, p.abi, p.address, p.rewardTokenFunction, p.stakeTokenFunction)));
  for (const i of infos) {
    let p = await printSynthetixPool(App, i, "bsc");
    totalStaked += p.staked_tvl || 0;
    totalUserStaked += p.userStaked || 0;
    if (p.userStaked > 0) {
      individualAPRs.push(p.userStaked * p.apr / 100);
    }
  }
  let totalAPR = totalUserStaked == 0 ? 0 : individualAPRs.reduce((x,y)=>x+y, 0) / totalUserStaked;
  return { staked_tvl : totalStaked, totalUserStaked, totalAPR };
}

async function getTrancheAssetInfo(tranche, asset, minter){
  const trancheAssetData = await minter.trancheAssets(tranche, asset);
  return trancheAssetData;
}