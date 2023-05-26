const ARBITRUM_REGISTRY_ABI = [{ "name": "PoolAdded", "inputs": [{ "name": "pool", "type": "address", "indexed": true }, { "name": "rate_method_id", "type": "bytes", "indexed": false }], "anonymous": false, "type": "event" }, { "name": "PoolRemoved", "inputs": [{ "name": "pool", "type": "address", "indexed": true }], "anonymous": false, "type": "event" }, { "stateMutability": "nonpayable", "type": "constructor", "inputs": [{ "name": "_address_provider", "type": "address" }, { "name": "_gauge_controller", "type": "address" }], "outputs": [] }, { "stateMutability": "view", "type": "function", "name": "find_pool_for_coins", "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }], "outputs": [{ "name": "", "type": "address" }] }, { "stateMutability": "view", "type": "function", "name": "find_pool_for_coins", "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "i", "type": "uint256" }], "outputs": [{ "name": "", "type": "address" }] }, { "stateMutability": "view", "type": "function", "name": "get_n_coins", "inputs": [{ "name": "_pool", "type": "address" }], "outputs": [{ "name": "", "type": "uint256[2]" }], "gas": 2764 }, { "stateMutability": "view", "type": "function", "name": "get_coins", "inputs": [{ "name": "_pool", "type": "address" }], "outputs": [{ "name": "", "type": "address[8]" }], "gas": 22642 }, { "stateMutability": "view", "type": "function", "name": "get_underlying_coins", "inputs": [{ "name": "_pool", "type": "address" }], "outputs": [{ "name": "", "type": "address[8]" }], "gas": 22734 }, { "stateMutability": "view", "type": "function", "name": "get_decimals", "inputs": [{ "name": "_pool", "type": "address" }], "outputs": [{ "name": "", "type": "uint256[8]" }], "gas": 10154 }, { "stateMutability": "view", "type": "function", "name": "get_underlying_decimals", "inputs": [{ "name": "_pool", "type": "address" }], "outputs": [{ "name": "", "type": "uint256[8]" }], "gas": 10246 }, { "stateMutability": "view", "type": "function", "name": "get_rates", "inputs": [{ "name": "_pool", "type": "address" }], "outputs": [{ "name": "", "type": "uint256[8]" }], "gas": 89988 }, { "stateMutability": "view", "type": "function", "name": "get_gauges", "inputs": [{ "name": "_pool", "type": "address" }], "outputs": [{ "name": "", "type": "address[10]" }, { "name": "", "type": "int128[10]" }], "gas": 52730 }, { "stateMutability": "view", "type": "function", "name": "get_balances", "inputs": [{ "name": "_pool", "type": "address" }], "outputs": [{ "name": "", "type": "uint256[8]" }], "gas": 43603 }, { "stateMutability": "view", "type": "function", "name": "get_underlying_balances", "inputs": [{ "name": "_pool", "type": "address" }], "outputs": [{ "name": "", "type": "uint256[8]" }], "gas": 377350 }, { "stateMutability": "view", "type": "function", "name": "get_virtual_price_from_lp_token", "inputs": [{ "name": "_token", "type": "address" }], "outputs": [{ "name": "", "type": "uint256" }], "gas": 5287 }, { "stateMutability": "view", "type": "function", "name": "get_A", "inputs": [{ "name": "_pool", "type": "address" }], "outputs": [{ "name": "", "type": "uint256" }], "gas": 3105 }, { "stateMutability": "view", "type": "function", "name": "get_parameters", "inputs": [{ "name": "_pool", "type": "address" }], "outputs": [{ "name": "A", "type": "uint256" }, { "name": "future_A", "type": "uint256" }, { "name": "fee", "type": "uint256" }, { "name": "admin_fee", "type": "uint256" }, { "name": "future_fee", "type": "uint256" }, { "name": "future_admin_fee", "type": "uint256" }, { "name": "future_owner", "type": "address" }, { "name": "initial_A", "type": "uint256" }, { "name": "initial_A_time", "type": "uint256" }, { "name": "future_A_time", "type": "uint256" }], "gas": 28133 }, { "stateMutability": "view", "type": "function", "name": "get_fees", "inputs": [{ "name": "_pool", "type": "address" }], "outputs": [{ "name": "", "type": "uint256[2]" }], "gas": 5601 }, { "stateMutability": "view", "type": "function", "name": "get_admin_balances", "inputs": [{ "name": "_pool", "type": "address" }], "outputs": [{ "name": "", "type": "uint256[8]" }], "gas": 87486 }, { "stateMutability": "view", "type": "function", "name": "get_coin_indices", "inputs": [{ "name": "_pool", "type": "address" }, { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }], "outputs": [{ "name": "", "type": "int128" }, { "name": "", "type": "int128" }, { "name": "", "type": "bool" }], "gas": 45755 }, { "stateMutability": "view", "type": "function", "name": "estimate_gas_used", "inputs": [{ "name": "_pool", "type": "address" }, { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }], "outputs": [{ "name": "", "type": "uint256" }], "gas": 57665 }, { "stateMutability": "view", "type": "function", "name": "is_meta", "inputs": [{ "name": "_pool", "type": "address" }], "outputs": [{ "name": "", "type": "bool" }], "gas": 3128 }, { "stateMutability": "view", "type": "function", "name": "get_pool_name", "inputs": [{ "name": "_pool", "type": "address" }], "outputs": [{ "name": "", "type": "string" }], "gas": 13379 }, { "stateMutability": "view", "type": "function", "name": "get_coin_swap_count", "inputs": [{ "name": "_coin", "type": "address" }], "outputs": [{ "name": "", "type": "uint256" }], "gas": 3179 }, { "stateMutability": "view", "type": "function", "name": "get_coin_swap_complement", "inputs": [{ "name": "_coin", "type": "address" }, { "name": "_index", "type": "uint256" }], "outputs": [{ "name": "", "type": "address" }], "gas": 3254 }, { "stateMutability": "view", "type": "function", "name": "get_pool_asset_type", "inputs": [{ "name": "_pool", "type": "address" }], "outputs": [{ "name": "", "type": "uint256" }], "gas": 3239 }, { "stateMutability": "nonpayable", "type": "function", "name": "add_pool", "inputs": [{ "name": "_pool", "type": "address" }, { "name": "_n_coins", "type": "uint256" }, { "name": "_lp_token", "type": "address" }, { "name": "_rate_info", "type": "bytes32" }, { "name": "_decimals", "type": "uint256" }, { "name": "_underlying_decimals", "type": "uint256" }, { "name": "_has_initial_A", "type": "bool" }, { "name": "_is_v1", "type": "bool" }, { "name": "_name", "type": "string" }], "outputs": [], "gas": 63063473 }, { "stateMutability": "nonpayable", "type": "function", "name": "add_pool_without_underlying", "inputs": [{ "name": "_pool", "type": "address" }, { "name": "_n_coins", "type": "uint256" }, { "name": "_lp_token", "type": "address" }, { "name": "_rate_info", "type": "bytes32" }, { "name": "_decimals", "type": "uint256" }, { "name": "_use_rates", "type": "uint256" }, { "name": "_has_initial_A", "type": "bool" }, { "name": "_is_v1", "type": "bool" }, { "name": "_name", "type": "string" }], "outputs": [], "gas": 32098992 }, { "stateMutability": "nonpayable", "type": "function", "name": "add_metapool", "inputs": [{ "name": "_pool", "type": "address" }, { "name": "_n_coins", "type": "uint256" }, { "name": "_lp_token", "type": "address" }, { "name": "_decimals", "type": "uint256" }, { "name": "_name", "type": "string" }], "outputs": [] }, { "stateMutability": "nonpayable", "type": "function", "name": "add_metapool", "inputs": [{ "name": "_pool", "type": "address" }, { "name": "_n_coins", "type": "uint256" }, { "name": "_lp_token", "type": "address" }, { "name": "_decimals", "type": "uint256" }, { "name": "_name", "type": "string" }, { "name": "_base_pool", "type": "address" }], "outputs": [] }, { "stateMutability": "nonpayable", "type": "function", "name": "remove_pool", "inputs": [{ "name": "_pool", "type": "address" }], "outputs": [], "gas": 799397478975 }, { "stateMutability": "nonpayable", "type": "function", "name": "set_pool_gas_estimates", "inputs": [{ "name": "_addr", "type": "address[5]" }, { "name": "_amount", "type": "uint256[2][5]" }], "outputs": [], "gas": 393460 }, { "stateMutability": "nonpayable", "type": "function", "name": "set_coin_gas_estimates", "inputs": [{ "name": "_addr", "type": "address[10]" }, { "name": "_amount", "type": "uint256[10]" }], "outputs": [], "gas": 394687 }, { "stateMutability": "nonpayable", "type": "function", "name": "set_gas_estimate_contract", "inputs": [{ "name": "_pool", "type": "address" }, { "name": "_estimator", "type": "address" }], "outputs": [], "gas": 75989 }, { "stateMutability": "nonpayable", "type": "function", "name": "set_liquidity_gauges", "inputs": [{ "name": "_pool", "type": "address" }, { "name": "_liquidity_gauges", "type": "address[10]" }], "outputs": [], "gas": 447195 }, { "stateMutability": "nonpayable", "type": "function", "name": "set_pool_asset_type", "inputs": [{ "name": "_pool", "type": "address" }, { "name": "_asset_type", "type": "uint256" }], "outputs": [], "gas": 75955 }, { "stateMutability": "nonpayable", "type": "function", "name": "batch_set_pool_asset_type", "inputs": [{ "name": "_pools", "type": "address[32]" }, { "name": "_asset_types", "type": "uint256[32]" }], "outputs": [], "gas": 1174503 }, { "stateMutability": "view", "type": "function", "name": "address_provider", "inputs": [], "outputs": [{ "name": "", "type": "address" }], "gas": 3348 }, { "stateMutability": "view", "type": "function", "name": "gauge_controller", "inputs": [], "outputs": [{ "name": "", "type": "address" }], "gas": 3378 }, { "stateMutability": "view", "type": "function", "name": "pool_list", "inputs": [{ "name": "arg0", "type": "uint256" }], "outputs": [{ "name": "", "type": "address" }], "gas": 3453 }, { "stateMutability": "view", "type": "function", "name": "pool_count", "inputs": [], "outputs": [{ "name": "", "type": "uint256" }], "gas": 3438 }, { "stateMutability": "view", "type": "function", "name": "coin_count", "inputs": [], "outputs": [{ "name": "", "type": "uint256" }], "gas": 3468 }, { "stateMutability": "view", "type": "function", "name": "get_coin", "inputs": [{ "name": "arg0", "type": "uint256" }], "outputs": [{ "name": "", "type": "address" }], "gas": 3543 }, { "stateMutability": "view", "type": "function", "name": "get_pool_from_lp_token", "inputs": [{ "name": "arg0", "type": "address" }], "outputs": [{ "name": "", "type": "address" }], "gas": 3743 }, { "stateMutability": "view", "type": "function", "name": "get_lp_token", "inputs": [{ "name": "arg0", "type": "address" }], "outputs": [{ "name": "", "type": "address" }], "gas": 3773 }, { "stateMutability": "view", "type": "function", "name": "last_updated", "inputs": [], "outputs": [{ "name": "", "type": "uint256" }], "gas": 3588 }]
const ARBITRUM_VAULT_TOKEN_ABI = [{ "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "address", "name": "_strategy", "type": "address" }, { "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "uint256", "name": "_approvalDelay", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "implementation", "type": "address" }], "name": "NewStratCandidate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "implementation", "type": "address" }], "name": "UpgradeStrat", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "approvalDelay", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "available", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "balance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "depositAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "earn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getPricePerFullShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_implementation", "type": "address" }], "name": "proposeStrat", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stratCandidate", "outputs": [{ "internalType": "address", "name": "implementation", "type": "address" }, { "internalType": "uint256", "name": "proposedTime", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "strategy", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "upgradeStrat", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_shares", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdrawAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
const ARBITRUM_VAULT_WANT_ABI = [{ "inputs": [{ "internalType": "contract IStrategy", "name": "_strategy", "type": "address" }, { "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "uint256", "name": "_approvalDelay", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "implementation", "type": "address" }], "name": "NewStratCandidate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "implementation", "type": "address" }], "name": "UpgradeStrat", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "approvalDelay", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "available", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "balance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "depositAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "earn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getPricePerFullShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }], "name": "inCaseTokensGetStuck", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_implementation", "type": "address" }], "name": "proposeStrat", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stratCandidate", "outputs": [{ "internalType": "address", "name": "implementation", "type": "address" }, { "internalType": "uint256", "name": "proposedTime", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "strategy", "outputs": [{ "internalType": "contract IStrategy", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "upgradeStrat", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "want", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_shares", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdrawAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
const ARBITRUM_DLP_ABI = [{ "inputs": [{ "internalType": "address", "name": "_originToken", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Burn", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferPrepared", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "_NEW_OWNER_", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_OWNER_", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "balance", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claimOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "originToken", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
const ARBIS_VAULT_UNDERLYING_ABI = [{ "inputs": [{ "internalType": "address", "name": "_nyanToken", "type": "address" }, { "internalType": "address", "name": "_stakingContract", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "token", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Recovered", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "newTotalDeposits", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newTotalSupply", "type": "uint256" }], "name": "Reinvest", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "oldValue", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newValue", "type": "uint256" }], "name": "UpdateAdminFee", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "oldValue", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newValue", "type": "uint256" }], "name": "UpdateMinTokensToReinvest", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "oldValue", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newValue", "type": "uint256" }], "name": "UpdateReinvestReward", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdraw", "type": "event" }, { "inputs": [], "name": "ADMIN_FEE_BIPS", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MIN_TOKENS_TO_REINVEST", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "REINVEST_REWARD_BIPS", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "admin", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "arbi", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "checkReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "estimateReinvestReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getName", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "getSharesPerToken", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "getTokensPerShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getUnderlying", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nyanToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "reapproveStaking", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "recoverETH", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "reinvest", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "arbiAddress", "type": "address" }], "name": "setArbi", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stakingContract", "outputs": [{ "internalType": "contract NyanRewards", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalDeposits", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "updateAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newValue", "type": "uint256" }], "name": "updateAdminFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newValue", "type": "uint256" }], "name": "updateMinTokensToReinvest", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newValue", "type": "uint256" }], "name": "updateReinvestReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
const ARBIS_VAULT_UNDERLYING_ABI2 = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "token", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Recovered", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "newTotalDeposits", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newTotalSupply", "type": "uint256" }], "name": "Reinvest", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "oldValue", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newValue", "type": "uint256" }], "name": "UpdateAdminFee", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "oldValue", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newValue", "type": "uint256" }], "name": "UpdateMinTokensToReinvest", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "oldValue", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newValue", "type": "uint256" }], "name": "UpdateMinTokensToReinvestBeforeDeposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "oldValue", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newValue", "type": "uint256" }], "name": "UpdateReinvestReward", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bool", "name": "newValue", "type": "bool" }], "name": "UpdateRequireReinvestBeforeDeposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdraw", "type": "event" }, { "inputs": [], "name": "ADMIN_FEE_BIPS", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MIN_TOKENS_TO_REINVEST", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MIN_TOKENS_TO_REINVEST_BEFORE_DEPOSIT", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "REINVEST_REWARD_BIPS", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "REQUIRE_REINVEST_BEFORE_DEPOSIT", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "arbi", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "checkReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "depositToken", "outputs": [{ "internalType": "contract IPair", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "estimateReinvestReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "getDepositTokensForShares", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "getSharesForDepositTokens", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "recoverETH", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "reinvest", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "revokeAllowance", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "rewardToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "router", "outputs": [{ "internalType": "contract IRouter", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "setAllowances", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "arbiAddress", "type": "address" }], "name": "setArbi", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stakingContract", "outputs": [{ "internalType": "contract NyanRewards", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalDeposits", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newValue", "type": "uint256" }], "name": "updateAdminFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newValue", "type": "uint256" }], "name": "updateMinTokensToReinvest", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newValue", "type": "uint256" }], "name": "updateMinTokensToReinvestBeforeDeposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newValue", "type": "uint256" }], "name": "updateReinvestReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "updateRequireReinvestBeforeDeposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
const DLP_ARBITRUM_DUAL_TOKEN_ABI = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Burn", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "increaseShares", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalShares", "type": "uint256" }], "name": "BuyShares", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "borrower", "type": "address" }, { "indexed": false, "internalType": "address", "name": "assetTo", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "baseAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "quoteAmount", "type": "uint256" }], "name": "DODOFlashLoan", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "fromToken", "type": "address" }, { "indexed": false, "internalType": "address", "name": "toToken", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "fromAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "toAmount", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "trader", "type": "address" }, { "indexed": false, "internalType": "address", "name": "receiver", "type": "address" }], "name": "DODOSwap", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "payer", "type": "address" }, { "indexed": false, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "decreaseShares", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalShares", "type": "uint256" }], "name": "SellShares", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PERMIT_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_BASE_PRICE_CUMULATIVE_LAST_", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_BASE_RESERVE_", "outputs": [{ "internalType": "uint112", "name": "", "type": "uint112" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_BASE_TOKEN_", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_BLOCK_TIMESTAMP_LAST_", "outputs": [{ "internalType": "uint32", "name": "", "type": "uint32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_IS_OPEN_TWAP_", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_I_", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_K_", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_LP_FEE_RATE_", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_MAINTAINER_", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_MT_FEE_RATE_MODEL_", "outputs": [{ "internalType": "contract IFeeRateModel", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_QUOTE_RESERVE_", "outputs": [{ "internalType": "uint112", "name": "", "type": "uint112" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_QUOTE_TOKEN_", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_addr", "type": "address" }], "name": "addressToShortString", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "balance", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "buyShares", "outputs": [{ "internalType": "uint256", "name": "shares", "type": "uint256" }, { "internalType": "uint256", "name": "baseInput", "type": "uint256" }, { "internalType": "uint256", "name": "quoteInput", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "baseAmount", "type": "uint256" }, { "internalType": "uint256", "name": "quoteAmount", "type": "uint256" }, { "internalType": "address", "name": "assetTo", "type": "address" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "flashLoan", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getBaseInput", "outputs": [{ "internalType": "uint256", "name": "input", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getMidPrice", "outputs": [{ "internalType": "uint256", "name": "midPrice", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getPMMState", "outputs": [{ "components": [{ "internalType": "uint256", "name": "i", "type": "uint256" }, { "internalType": "uint256", "name": "K", "type": "uint256" }, { "internalType": "uint256", "name": "B", "type": "uint256" }, { "internalType": "uint256", "name": "Q", "type": "uint256" }, { "internalType": "uint256", "name": "B0", "type": "uint256" }, { "internalType": "uint256", "name": "Q0", "type": "uint256" }, { "internalType": "enum PMMPricing.RState", "name": "R", "type": "uint8" }], "internalType": "struct PMMPricing.PMMState", "name": "state", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getPMMStateForCall", "outputs": [{ "internalType": "uint256", "name": "i", "type": "uint256" }, { "internalType": "uint256", "name": "K", "type": "uint256" }, { "internalType": "uint256", "name": "B", "type": "uint256" }, { "internalType": "uint256", "name": "Q", "type": "uint256" }, { "internalType": "uint256", "name": "B0", "type": "uint256" }, { "internalType": "uint256", "name": "Q0", "type": "uint256" }, { "internalType": "uint256", "name": "R", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getQuoteInput", "outputs": [{ "internalType": "uint256", "name": "input", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "getUserFeeRate", "outputs": [{ "internalType": "uint256", "name": "lpFeeRate", "type": "uint256" }, { "internalType": "uint256", "name": "mtFeeRate", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getVaultReserve", "outputs": [{ "internalType": "uint256", "name": "baseReserve", "type": "uint256" }, { "internalType": "uint256", "name": "quoteReserve", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "maintainer", "type": "address" }, { "internalType": "address", "name": "baseTokenAddress", "type": "address" }, { "internalType": "address", "name": "quoteTokenAddress", "type": "address" }, { "internalType": "uint256", "name": "lpFeeRate", "type": "uint256" }, { "internalType": "address", "name": "mtFeeRateModel", "type": "address" }, { "internalType": "uint256", "name": "i", "type": "uint256" }, { "internalType": "uint256", "name": "k", "type": "uint256" }, { "internalType": "bool", "name": "isOpenTWAP", "type": "bool" }], "name": "init", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "trader", "type": "address" }, { "internalType": "uint256", "name": "payBaseAmount", "type": "uint256" }], "name": "querySellBase", "outputs": [{ "internalType": "uint256", "name": "receiveQuoteAmount", "type": "uint256" }, { "internalType": "uint256", "name": "mtFee", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "trader", "type": "address" }, { "internalType": "uint256", "name": "payQuoteAmount", "type": "uint256" }], "name": "querySellQuote", "outputs": [{ "internalType": "uint256", "name": "receiveBaseAmount", "type": "uint256" }, { "internalType": "uint256", "name": "mtFee", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "sellBase", "outputs": [{ "internalType": "uint256", "name": "receiveQuoteAmount", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "sellQuote", "outputs": [{ "internalType": "uint256", "name": "receiveBaseAmount", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "shareAmount", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "baseMinAmount", "type": "uint256" }, { "internalType": "uint256", "name": "quoteMinAmount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "sellShares", "outputs": [{ "internalType": "uint256", "name": "baseAmount", "type": "uint256" }, { "internalType": "uint256", "name": "quoteAmount", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sync", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" }]
const IMX_ARBITRUM_TOKEN_ABI = [ { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": true, "internalType": "address", "name": "minter", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "mintAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "mintTokens", "type": "uint256" } ], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": true, "internalType": "address", "name": "redeemer", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "redeemAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "redeemTokens", "type": "uint256" } ], "name": "Redeem", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "totalBalance", "type": "uint256" } ], "name": "Sync", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MINIMUM_LIQUIDITY", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "PERMIT_TYPEHASH", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "_setFactory", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "exchangeRate", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "factory", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "minter", "type": "address" } ], "name": "mint", "outputs": [ { "internalType": "uint256", "name": "mintTokens", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "nonces", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" } ], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "redeemer", "type": "address" } ], "name": "redeem", "outputs": [ { "internalType": "uint256", "name": "redeemAmount", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" } ], "name": "skim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "sync", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalBalance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "underlying", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" } ]
const ARBITRUM_SADDLE_SWAP_ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tokenAmounts","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"fees","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"invariant","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lpTokenSupply","type":"uint256"}],"name":"AddLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newAdminFee","type":"uint256"}],"name":"NewAdminFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newSwapFee","type":"uint256"}],"name":"NewSwapFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newWithdrawFee","type":"uint256"}],"name":"NewWithdrawFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldA","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newA","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"initialTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"futureTime","type":"uint256"}],"name":"RampA","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tokenAmounts","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"lpTokenSupply","type":"uint256"}],"name":"RemoveLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tokenAmounts","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"fees","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"invariant","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lpTokenSupply","type":"uint256"}],"name":"RemoveLiquidityImbalance","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"lpTokenAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lpTokenSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"boughtId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensBought","type":"uint256"}],"name":"RemoveLiquidityOne","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"currentA","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"StopRampA","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensSold","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensBought","type":"uint256"},{"indexed":false,"internalType":"uint128","name":"soldId","type":"uint128"},{"indexed":false,"internalType":"uint128","name":"boughtId","type":"uint128"}],"name":"TokenSwap","type":"event"},{"inputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256","name":"minToMint","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"calculateCurrentWithdrawFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateRemoveLiquidity","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint8","name":"tokenIndex","type":"uint8"}],"name":"calculateRemoveLiquidityOneToken","outputs":[{"internalType":"uint256","name":"availableTokenAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"tokenIndexFrom","type":"uint8"},{"internalType":"uint8","name":"tokenIndexTo","type":"uint8"},{"internalType":"uint256","name":"dx","type":"uint256"}],"name":"calculateSwap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bool","name":"deposit","type":"bool"}],"name":"calculateTokenAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAPrecise","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getAdminBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getDepositTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"index","type":"uint8"}],"name":"getToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"index","type":"uint8"}],"name":"getTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"getTokenIndex","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVirtualPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20[]","name":"_pooledTokens","type":"address[]"},{"internalType":"uint8[]","name":"decimals","type":"uint8[]"},{"internalType":"string","name":"lpTokenName","type":"string"},{"internalType":"string","name":"lpTokenSymbol","type":"string"},{"internalType":"uint256","name":"_a","type":"uint256"},{"internalType":"uint256","name":"_fee","type":"uint256"},{"internalType":"uint256","name":"_adminFee","type":"uint256"},{"internalType":"uint256","name":"_withdrawFee","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256[]","name":"minAmounts","type":"uint256[]"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256","name":"maxBurnAmount","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityImbalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint8","name":"tokenIndex","type":"uint8"},{"internalType":"uint256","name":"minAmount","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityOneToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"tokenIndexFrom","type":"uint8"},{"internalType":"uint8","name":"tokenIndexTo","type":"uint8"},{"internalType":"uint256","name":"dx","type":"uint256"},{"internalType":"uint256","name":"minDy","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapStorage","outputs":[{"internalType":"uint256","name":"initialA","type":"uint256"},{"internalType":"uint256","name":"futureA","type":"uint256"},{"internalType":"uint256","name":"initialATime","type":"uint256"},{"internalType":"uint256","name":"futureATime","type":"uint256"},{"internalType":"uint256","name":"swapFee","type":"uint256"},{"internalType":"uint256","name":"adminFee","type":"uint256"},{"internalType":"uint256","name":"defaultWithdrawFee","type":"uint256"},{"internalType":"contract LPToken","name":"lpToken","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"transferAmount","type":"uint256"}],"name":"updateUserWithdrawFee","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const ARBITRUM_SADDLE_LP_TOKEN_ABI = [{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swap","outputs":[{"internalType":"contract ISwap","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const ARBITRUM_MONOPOLY_TOKEN_ABI = [{"inputs":[{"internalType":"address","name":"_pool","type":"address"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"int24","name":"tick","type":"int24"},{"indexed":false,"internalType":"uint256","name":"totalAmount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalAmount1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeAmount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeAmount1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalSupply","type":"uint256"}],"name":"Rebalance","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"newFee","type":"uint8"}],"name":"SetFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"fee","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"fees0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fees1","type":"uint256"}],"name":"ZeroBurn","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"},{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"},{"internalType":"uint256[2]","name":"inMin","type":"uint256[2]"}],"name":"addLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"algebraMintCallback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseLower","outputs":[{"internalType":"int24","name":"","type":"int24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseUpper","outputs":[{"internalType":"int24","name":"","type":"int24"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[4]","name":"inMin","type":"uint256[4]"}],"name":"compound","outputs":[{"internalType":"uint128","name":"baseToken0Owed","type":"uint128"},{"internalType":"uint128","name":"baseToken1Owed","type":"uint128"},{"internalType":"uint128","name":"limitToken0Owed","type":"uint128"},{"internalType":"uint128","name":"limitToken1Owed","type":"uint128"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentTick","outputs":[{"internalType":"int24","name":"tick","type":"int24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"deposit0","type":"uint256"},{"internalType":"uint256","name":"deposit1","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256[4]","name":"inMin","type":"uint256[4]"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit0Max","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit1Max","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"directDeposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fee","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeRecipient","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBasePosition","outputs":[{"internalType":"uint128","name":"liquidity","type":"uint128"},{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLimitPosition","outputs":[{"internalType":"uint128","name":"liquidity","type":"uint128"},{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalAmounts","outputs":[{"internalType":"uint256","name":"total0","type":"uint256"},{"internalType":"uint256","name":"total1","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"limitLower","outputs":[{"internalType":"int24","name":"","type":"int24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"limitUpper","outputs":[{"internalType":"int24","name":"","type":"int24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pool","outputs":[{"internalType":"contract IAlgebraPool","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"},{"internalType":"uint128","name":"shares","type":"uint128"},{"internalType":"uint256[2]","name":"amountMin","type":"uint256[2]"}],"name":"pullLiquidity","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int24","name":"_baseLower","type":"int24"},{"internalType":"int24","name":"_baseUpper","type":"int24"},{"internalType":"int24","name":"_limitLower","type":"int24"},{"internalType":"int24","name":"_limitUpper","type":"int24"},{"internalType":"address","name":"_feeRecipient","type":"address"},{"internalType":"uint256[4]","name":"inMin","type":"uint256[4]"},{"internalType":"uint256[4]","name":"outMin","type":"uint256[4]"}],"name":"rebalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"removeWhitelisted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"newFee","type":"uint8"}],"name":"setFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tickSpacing","outputs":[{"internalType":"int24","name":"","type":"int24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleDirectDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelistedAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256[4]","name":"minAmounts","type":"uint256[4]"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]
const ARBITRUM_WOM_TOKEN_ABI = [{"inputs":[{"internalType":"address","name":"underlyingToken_","type":"address"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ASSET_OVERFLOW","type":"error"},{"inputs":[],"name":"WOMBAT_FORBIDDEN","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"previousMaxSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newMaxSupply","type":"uint256"}],"name":"SetMaxSupply","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousPoolAddr","type":"address"},{"indexed":false,"internalType":"address","name":"newPoolAddr","type":"address"}],"name":"SetPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addCash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addLiability","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cash","outputs":[{"internalType":"uint120","name":"","type":"uint120"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"liability","outputs":[{"internalType":"uint120","name":"","type":"uint120"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"removeCash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"removeLiability","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxSupply_","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pool_","type":"address"}],"name":"setPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferUnderlyingToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"underlyingToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"underlyingTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"underlyingTokenDecimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}]
const ARBITRUM_KYBER_TOKEN_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"int24","name":"tickLower","type":"int24"},{"indexed":true,"internalType":"int24","name":"tickUpper","type":"int24"},{"indexed":false,"internalType":"uint128","name":"qty","type":"uint128"},{"indexed":false,"internalType":"uint256","name":"qty0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"qty1","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"qty","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"qty0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"qty1","type":"uint256"}],"name":"BurnRTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"qty0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"qty1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"paid0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"paid1","type":"uint256"}],"name":"Flash","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint160","name":"sqrtP","type":"uint160"},{"indexed":false,"internalType":"int24","name":"tick","type":"int24"}],"name":"Initialize","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"int24","name":"tickLower","type":"int24"},{"indexed":true,"internalType":"int24","name":"tickUpper","type":"int24"},{"indexed":false,"internalType":"uint128","name":"qty","type":"uint128"},{"indexed":false,"internalType":"uint256","name":"qty0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"qty1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"int256","name":"deltaQty0","type":"int256"},{"indexed":false,"internalType":"int256","name":"deltaQty1","type":"int256"},{"indexed":false,"internalType":"uint160","name":"sqrtP","type":"uint160"},{"indexed":false,"internalType":"uint128","name":"liquidity","type":"uint128"},{"indexed":false,"internalType":"int24","name":"currentTick","type":"int24"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"},{"internalType":"uint128","name":"qty","type":"uint128"}],"name":"burn","outputs":[{"internalType":"uint256","name":"qty0","type":"uint256"},{"internalType":"uint256","name":"qty1","type":"uint256"},{"internalType":"uint256","name":"feeGrowthInsideLast","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_qty","type":"uint256"},{"internalType":"bool","name":"isLogicalBurn","type":"bool"}],"name":"burnRTokens","outputs":[{"internalType":"uint256","name":"qty0","type":"uint256"},{"internalType":"uint256","name":"qty1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"contract IFactory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"qty0","type":"uint256"},{"internalType":"uint256","name":"qty1","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"flash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getFeeGrowthGlobal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLiquidityState","outputs":[{"internalType":"uint128","name":"baseL","type":"uint128"},{"internalType":"uint128","name":"reinvestL","type":"uint128"},{"internalType":"uint128","name":"reinvestLLast","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPoolState","outputs":[{"internalType":"uint160","name":"sqrtP","type":"uint160"},{"internalType":"int24","name":"currentTick","type":"int24"},{"internalType":"int24","name":"nearestCurrentTick","type":"int24"},{"internalType":"bool","name":"locked","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"}],"name":"getPositions","outputs":[{"internalType":"uint128","name":"liquidity","type":"uint128"},{"internalType":"uint256","name":"feeGrowthInsideLast","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSecondsPerLiquidityData","outputs":[{"internalType":"uint128","name":"secondsPerLiquidityGlobal","type":"uint128"},{"internalType":"uint32","name":"lastUpdateTime","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"}],"name":"getSecondsPerLiquidityInside","outputs":[{"internalType":"uint128","name":"secondsPerLiquidityInside","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int24","name":"","type":"int24"}],"name":"initializedTicks","outputs":[{"internalType":"int24","name":"previous","type":"int24"},{"internalType":"int24","name":"next","type":"int24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTickLiquidity","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"},{"internalType":"int24[2]","name":"ticksPrevious","type":"int24[2]"},{"internalType":"uint128","name":"qty","type":"uint128"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"mint","outputs":[{"internalType":"uint256","name":"qty0","type":"uint256"},{"internalType":"uint256","name":"qty1","type":"uint256"},{"internalType":"uint256","name":"feeGrowthInsideLast","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolOracle","outputs":[{"internalType":"contract IPoolOracle","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"int256","name":"swapQty","type":"int256"},{"internalType":"bool","name":"isToken0","type":"bool"},{"internalType":"uint160","name":"limitSqrtP","type":"uint160"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[{"internalType":"int256","name":"deltaQty0","type":"int256"},{"internalType":"int256","name":"deltaQty1","type":"int256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapFeeUnits","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tickDistance","outputs":[{"internalType":"int24","name":"","type":"int24"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"","type":"int24"}],"name":"ticks","outputs":[{"internalType":"uint128","name":"liquidityGross","type":"uint128"},{"internalType":"int128","name":"liquidityNet","type":"int128"},{"internalType":"uint256","name":"feeGrowthOutside","type":"uint256"},{"internalType":"uint128","name":"secondsPerLiquidityOutside","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"}],"name":"tweakPosZeroLiq","outputs":[{"internalType":"uint256","name":"feeGrowthInsideLast","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint160","name":"initialSqrtP","type":"uint160"}],"name":"unlockPool","outputs":[{"internalType":"uint256","name":"qty0","type":"uint256"},{"internalType":"uint256","name":"qty1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]

const uniSqrtPrice = (tokenDecimals, sqrtRatioX96) => {
  const [token0Decimals, token1Decimals] = tokenDecimals;
  const scalarNumerator = ethers.BigNumber.from(10).pow(token0Decimals);
  const scalarDenominator = ethers.BigNumber.from(10).pow(token1Decimals);

  const sqrtRatioX96BI = ethers.BigNumber.from(sqrtRatioX96);

  const inputNumerator = sqrtRatioX96BI.mul(sqrtRatioX96BI);
  const inputDenominator = ethers.BigNumber.from(2).pow(192);

  let numerator = scalarDenominator.mul(inputDenominator)
  let denominator = scalarNumerator.mul(inputNumerator)

  let fraction
  if (denominator.gt(numerator)) {
    return 1 / denominator.div(numerator).toNumber()
  }
  return numerator.div(denominator).toNumber()
}

async function getArbitrumMonopolyPool(App, pool, poolAddress, stakingAddress) {
  const calls = [
    pool.decimals(), pool.token0(), pool.token1(), pool.symbol(), pool.name(),
    pool.totalSupply(), pool.balanceOf(stakingAddress), pool.balanceOf(App.YOUR_ADDRESS),
    pool.getTotalAmounts()
  ];
  const [decimals, token0, token1, symbol, name, totalSupply, _staked, unstaked, reserves]
    = await App.ethcallProvider.all(calls);
  const staked = _staked / 10 ** decimals;
  let q0, q1;
  q0 = reserves.total0;
  q1 = reserves.total1;
  return {
    symbol,
    name,
    address: poolAddress,
    token0: token0,
    q0,
    token1: token1,
    q1,
    totalSupply: totalSupply / 10 ** decimals,
    stakingAddress: stakingAddress,
    staked,
    decimals: decimals,
    unstaked: unstaked / 10 ** decimals,
    contract: pool,
    tokens: [token0, token1]
  };
}

async function getArbitrumUniPool(App, pool, poolAddress, stakingAddress) {
  const calls = [
    pool.decimals(), pool.token0(), pool.token1(), pool.symbol(), pool.name(),
    pool.totalSupply(), pool.balanceOf(stakingAddress), pool.balanceOf(App.YOUR_ADDRESS)
  ];
  const [decimals, token0, token1, symbol, name, totalSupply, staked, unstaked]
    = await App.ethcallProvider.all(calls);
  let q0, q1, is1inch;
  try {
    const [reserves] = await App.ethcallProvider.all([pool.getReserves()]);
    q0 = reserves._reserve0;
    q1 = reserves._reserve1;
    is1inch = false;
  }
  catch { //for 1inch
    if (token0 == "0x0000000000000000000000000000000000000000") {
      q0 = await App.provider.getBalance(poolAddress);
    }
    else {
      const c0 = new ethers.Contract(token0, ERC20_ABI, App.provider);
      q0 = await c0.balanceOf(poolAddress);
    }
    if (token1 == "0x0000000000000000000000000000000000000000") {
      q1 = await App.provider.getBalance(poolAddress);
    }
    else {
      const c1 = new ethers.Contract(token1, ERC20_ABI, App.provider);
      q1 = await c1.balanceOf(poolAddress);
    }
    is1inch = true;
  }
  return {
    symbol,
    name,
    address: poolAddress,
    token0: token0,
    q0,
    token1: token1,
    q1,
    totalSupply: totalSupply / 10 ** decimals,
    stakingAddress: stakingAddress,
    staked: staked / 10 ** decimals,
    decimals: decimals,
    unstaked: unstaked / 10 ** decimals,
    contract: pool,
    tokens: [token0, token1],
    is1inch
  };
}

async function getArbitrumKyberPool(App, pool, poolAddress, stakingAddress) {
  const calls = [
    pool.decimals(), pool.token0(), pool.token1(), pool.symbol(), pool.name(),
    pool.totalSupply(), pool.balanceOf(stakingAddress), pool.balanceOf(App.YOUR_ADDRESS)
  ];
  const [decimals, token0, token1, symbol, name, totalSupply, staked, unstaked]
    = await App.ethcallProvider.all(calls);
  const c0 = new ethers.Contract(token0, ERC20_ABI, App.provider);
  q0 = await c0.balanceOf(poolAddress);
  const c1 = new ethers.Contract(token1, ERC20_ABI, App.provider);
  q1 = await c1.balanceOf(poolAddress);
  return {
    symbol,
    name,
    address: poolAddress,
    token0: token0,
    q0,
    token1: token1,
    q1,
    totalSupply: totalSupply / 10 ** decimals,
    stakingAddress: stakingAddress,
    staked: staked / 10 ** decimals,
    decimals: decimals,
    unstaked: unstaked / 10 ** decimals,
    contract: pool,
    tokens: [token0, token1]
  };
}

async function getDodoArbitrumDualPoolToken(App, pool, poolAddress, stakingAddress) {
  const calls = [
    pool.decimals(), pool._BASE_TOKEN_(), pool._QUOTE_TOKEN_(), pool.symbol(), pool.name(),
    pool.totalSupply(), pool.balanceOf(stakingAddress), pool.balanceOf(App.YOUR_ADDRESS)
  ];
  const [decimals, token0, token1, symbol, name, totalSupply, staked, unstaked]
    = await App.ethcallProvider.all(calls);
  let q0, q1, is1inch;
  try {
    const [reserves] = await App.ethcallProvider.all([pool.getVaultReserve()]);
    q0 = reserves.baseReserve;
    q1 = reserves.quoteReserve;
    is1inch = false;
  }
  catch { //for 1inch
    if (token0 == "0x0000000000000000000000000000000000000000") {
      q0 = await App.provider.getBalance(poolAddress);
    }
    else {
      const c0 = new ethers.Contract(token0, ERC20_ABI, App.provider);
      q0 = await c0.balanceOf(poolAddress);
    }
    if (token1 == "0x0000000000000000000000000000000000000000") {
      q1 = await App.provider.getBalance(poolAddress);
    }
    else {
      const c1 = new ethers.Contract(token1, ERC20_ABI, App.provider);
      q1 = await c1.balanceOf(poolAddress);
    }
    is1inch = true;
  }
  return {
    symbol,
    name,
    address: poolAddress,
    token0: token0,
    q0,
    token1: token1,
    q1,
    totalSupply: totalSupply / 10 ** decimals,
    stakingAddress: stakingAddress,
    staked: staked / 10 ** decimals,
    decimals: decimals,
    unstaked: unstaked / 10 ** decimals,
    contract: pool,
    tokens: [token0, token1],
    is1inch
  };
}

async function getercArbitrum20(App, token, address, stakingAddress) {
  if (address == "0x0000000000000000000000000000000000000000") {
    return {
      address,
      name: "Ethereum",
      symbol: "ETH",
      totalSupply: 1e8,
      decimals: 18,
      staked: await App.provider.getBalance(stakingAddress) / 1e18,
      unstaked: await App.provider.getBalance(App.YOUR_ADDRESS) / 1e18,
      contract: null,
      tokens: [address]
    }
  }
  const decimals = await token.decimals()
  return {
    address,
    name: await token.name(),
    symbol: await token.symbol(),
    totalSupply: await token.totalSupply(),
    decimals: decimals,
    staked: await token.balanceOf(stakingAddress) / 10 ** decimals,
    unstaked: await token.balanceOf(App.YOUR_ADDRESS) / 10 ** decimals,
    contract: token,
    tokens: [address]
  };
}

async function getArbitrumVault(App, vault, address, stakingAddress) {
  const calls = [vault.decimals(), vault.token(), vault.name(), vault.symbol(),
  vault.totalSupply(), vault.balanceOf(stakingAddress),
  vault.balanceOf(App.YOUR_ADDRESS), vault.balance()];
  const [decimals, token_, name, symbol, totalSupply, staked, unstaked, balance] = await App.ethcallProvider.all(calls);
  const token = await getArbitrumToken(App, token_, address);
  return {
    address,
    name: name,
    symbol: symbol,
    totalSupply: totalSupply,
    decimals: decimals,
    staked: staked / 10 ** decimals,
    unstaked: unstaked / 10 ** decimals,
    token: token,
    balance: balance,
    contract: vault,
    tokens: [address].concat(token.tokens),
  }
}

async function getArbitrumJar(App, jar, address, stakingAddress) {
  const calls = [jar.decimals(), jar.token(), jar.name(), jar.symbol(), jar.totalSupply(),
  jar.balanceOf(stakingAddress), jar.balanceOf(App.YOUR_ADDRESS), jar.balance()];
  const [decimals, token_, name, symbol, totalSupply, staked, unstaked, balance] =
    await App.ethcallProvider.all(calls);
  const token = await getArbitrumToken(App, token_, address);
  if (token.xcp_profit) { //this is only for triTokens
    return {
      address,
      name,
      symbol,
      totalSupply: token.totalSupply,
      decimals: token.decimals,
      staked: staked / 10 ** decimals,
      unstaked: unstaked / 10 ** decimals,
      contract: jar,
      tokens: token.tokens,
      coins: token.coins,
      virtualPrice: token.virtualPrice,
      xcp_profit: token.xcp_profit
    }
  } else {
    return {
      address,
      name,
      symbol,
      totalSupply,
      decimals: decimals,
      staked: staked / 10 ** decimals,
      unstaked: unstaked / 10 ** decimals,
      token: token,
      balance: balance,
      contract: jar,
      tokens: [address].concat(token.tokens)
    }
  }
}

async function getArbitrumArbisVault(App, vault, address, stakingAddress) {
  const calls = [vault.decimals(), vault.getUnderlying(), vault.name(), vault.symbol(),
  vault.totalSupply(), vault.balanceOf(stakingAddress),
  vault.balanceOf(App.YOUR_ADDRESS), vault.totalDeposits()];
  const [decimals, token_, name, symbol, totalSupply, staked, unstaked, balance] = await App.ethcallProvider.all(calls);
  const token = await getArbitrumToken(App, token_, address);
  return {
    address,
    name: name,
    symbol: symbol,
    totalSupply: totalSupply,
    decimals: decimals,
    staked: staked / 10 ** decimals,
    unstaked: unstaked / 10 ** decimals,
    token: token,
    balance: balance,
    contract: vault,
    tokens: [address].concat(token.tokens),
  }
}

async function getArbitrumWomVault(App, vault, address, stakingAddress) {
  const calls = [vault.decimals(), vault.underlyingToken(), vault.name(), vault.symbol(),
  vault.totalSupply(), vault.balanceOf(stakingAddress),
  vault.balanceOf(App.YOUR_ADDRESS), vault.underlyingTokenBalance(), vault.underlyingTokenDecimals()];
  //edw to balance mallon prepei na ginei / underlying decimals
  const [decimals, token_, name, symbol, totalSupply, staked, unstaked, balance, underlyingDecimals] = await App.ethcallProvider.all(calls);
  const token = await getArbitrumToken(App, token_, address);
  return {
    address,
    name: name,
    symbol: symbol,
    totalSupply: totalSupply,
    decimals: decimals,
    staked: staked / 10 ** decimals,
    unstaked: unstaked / 10 ** decimals,
    token: token,
    balance: balance,
    contract: vault,
    tokens: [address].concat(token.tokens),
  }
}

async function getArbitrumArbisVault2(App, vault, address, stakingAddress) {
  const calls = [vault.decimals(), vault.depositToken(), vault.name(), vault.symbol(),
  vault.totalSupply(), vault.balanceOf(stakingAddress),
  vault.balanceOf(App.YOUR_ADDRESS), vault.totalDeposits()];
  const [decimals, token_, name, symbol, totalSupply, staked, unstaked, balance] = await App.ethcallProvider.all(calls);
  const token = await getArbitrumToken(App, token_, address);
  return {
    address,
    name: name,
    symbol: symbol,
    totalSupply: totalSupply,
    decimals: decimals,
    staked: staked / 10 ** decimals,
    unstaked: unstaked / 10 ** decimals,
    token: token,
    balance: balance,
    contract: vault,
    tokens: [address].concat(token.tokens),
  }
}

async function getArbitrumWantVault(App, vault, address, stakingAddress) {
  const calls = [vault.decimals(), vault.want(), vault.name(), vault.symbol(),
  vault.totalSupply(), vault.balanceOf(stakingAddress),
  vault.balanceOf(App.YOUR_ADDRESS), vault.balance()];
  const [decimals, token_, name, symbol, totalSupply, staked, unstaked, balance] = await App.ethcallProvider.all(calls);
  const token = await getArbitrumToken(App, token_, address);
  return {
    address,
    name: name,
    symbol: symbol,
    totalSupply: totalSupply,
    decimals: decimals,
    staked: staked / 10 ** decimals,
    unstaked: unstaked / 10 ** decimals,
    token: token,
    balance: balance,
    contract: vault,
    tokens: [address].concat(token.tokens),
  }
}

async function getArbitrumDlpPool(App, dlpPool, tokenAddress, originTokenAddress, stakingAddress) {
  const calls = [
    dlpPool._OWNER_(), dlpPool.totalSupply(), dlpPool.name(), dlpPool.decimals(), dlpPool.balanceOf(App.YOUR_ADDRESS)
  ];
  const [ownerAddress, totalSupply, name, decimals, balanceOfUncstaked] = await App.ethcallProvider.all(calls);
  const originToken = await getArbitrumToken(App, originTokenAddress, ownerAddress);
  return {
    address: tokenAddress,
    name: name,
    symbol: name,
    totalSupply: totalSupply,
    decimals: decimals,
    staked: totalSupply / 10 ** decimals,
    unstaked: balanceOfUncstaked / 10 ** decimals,
    token: originToken,
    balance: originToken.staked * 10 ** originToken.decimals,
    contract: dlpPool,
    tokens: [originTokenAddress]
  }
}

async function getArbitrumCurveToken(App, curve, address, stakingAddress, minterAddress) {
  const minter = new ethcall.Contract(minterAddress, MINTER_ABI)
  const [virtualPrice, coin0] = await App.ethcallProvider.all([minter.get_virtual_price(), minter.coins(0)]);
  const token = await getArbitrumToken(App, coin0, address);
  const calls = [curve.decimals(), curve.balanceOf(stakingAddress), curve.balanceOf(App.YOUR_ADDRESS),
  curve.name(), curve.symbol(), curve.totalSupply()];
  const [decimals, staked, unstaked, name, symbol, totalSupply] = await App.ethcallProvider.all(calls);
  return {
    address,
    name,
    symbol,
    totalSupply,
    decimals: decimals,
    staked: staked / 10 ** decimals,
    unstaked: unstaked / 10 ** decimals,
    contract: curve,
    tokens: [address, coin0],
    token,
    virtualPrice: virtualPrice / 1e18
  };
}

async function getArbitrumTriCryptoToken(App, curve, address, stakingAddress, minterAddress) {
  const minter = new ethcall.Contract(minterAddress, TRITOKEN_MINTER_ABI)
  const registryAddress = "0x445FE580eF8d70FF569aB36e80c647af338db351";
  const registry = new ethcall.Contract(registryAddress, ARBITRUM_REGISTRY_ABI);
  let coins = [];
  const [coinAddresses, coinsCount, balances] =
    await App.ethcallProvider.all([registry.get_coins(minterAddress),
    registry.get_n_coins(minterAddress),
    registry.get_balances(minterAddress)]);
  for (let i = 0; i < coinsCount[1]; i++) {
    const token = await getArbitrumToken(App, coinAddresses[i], address);
    coins.push(
      {
        address: coinAddresses[i],
        token: token,
        balance: balances[i] / 10 ** token.decimals
      }
    )
  }
  const [virtualPrice, xcp_profit] = await App.ethcallProvider.all([minter.get_virtual_price(), minter.xcp_profit()]);
  const calls = [curve.decimals(), curve.balanceOf(stakingAddress), curve.balanceOf(App.YOUR_ADDRESS),
  curve.name(), curve.symbol(), curve.totalSupply()];
  const [decimals, staked, unstaked, name, symbol, totalSupply] = await App.ethcallProvider.all(calls);
  const tokens = coins.map(c => c.address).concat([address]);
  return {
    address,
    name,
    symbol,
    totalSupply,
    decimals: decimals,
    staked: staked / 10 ** decimals,
    unstaked: unstaked / 10 ** decimals,
    contract: curve,
    tokens,
    coins,
    virtualPrice: virtualPrice / 1e18,
    xcp_profit: xcp_profit / 10 ** decimals
  };
}

async function getArbitrumYearnVault(app, yearn, address, stakingAddress) {
  const calls = [yearn.decimals(), yearn.token(), yearn.name(), yearn.symbol(), yearn.totalSupply(),
  yearn.balanceOf(stakingAddress), yearn.balanceOf(app.YOUR_ADDRESS), yearn.totalAssets(), yearn.pricePerShare()];
  const [decimals, token_, name, symbol, totalSupply, staked, unstaked, balance, ppfs] =
    await app.ethcallProvider.all(calls);
  const token = await getArbitrumToken(app, token_, address);
  return {
    address,
    name,
    symbol,
    totalSupply,
    decimals: decimals,
    staked: staked / 10 ** decimals,
    unstaked: unstaked / 10 ** decimals,
    token: token,
    balance: balance / 10 ** decimals,
    contract: yearn,
    tokens: [address].concat(token.tokens),
    ppfs: ppfs / 10 ** decimals,
    yearn: true
  }
}

async function getArbitrumStableswapToken(App, stable, address, stakingAddress) {
  const calls = [stable.decimals(), stable.balanceOf(stakingAddress), stable.balanceOf(App.YOUR_ADDRESS),
  stable.name(), stable.symbol(), stable.totalSupply(), stable.get_virtual_price(), stable.coins(0)];
  const [decimals, staked, unstaked, name, symbol, totalSupply, virtualPrice, coin0]
    = await App.ethcallProvider.all(calls);
  const token = await getArbitrumToken(App, coin0, address);
  return {
    address,
    name,
    symbol,
    totalSupply,
    decimals: decimals,
    staked: staked / 10 ** decimals,
    unstaked: unstaked / 10 ** decimals,
    contract: stable,
    tokens: [address, coin0],
    token,
    virtualPrice: virtualPrice / 1e18
  };
}

async function getCArbitrumToken(App, cToken, address, stakingAddress) {
  const calls = [cToken.decimals(), cToken.underlying(), cToken.totalSupply(),
  cToken.name(), cToken.symbol(), cToken.balanceOf(stakingAddress),
  cToken.balanceOf(App.YOUR_ADDRESS), cToken.exchangeRateStored()];
  const [decimals, underlying, totalSupply, name, symbol, staked, unstaked, exchangeRate] =
    await App.ethcallProvider.all(calls);
  const token = await getArbitrumToken(App, underlying, address);
  return {
    address,
    name,
    symbol,
    totalSupply,
    decimals,
    staked: staked / 10 ** decimals,
    unstaked: unstaked / 10 ** decimals,
    token: token,
    balance: totalSupply * exchangeRate / 1e18,
    contract: cToken,
    tokens: [address].concat(token.tokens)
  }
}

async function getImxArbitrumToken(App, imxToken, address, stakingAddress) {
  const calls = [imxToken.decimals(), imxToken.underlying(), imxToken.totalSupply(),
    imxToken.name(), imxToken.symbol(), imxToken.balanceOf(stakingAddress),
    imxToken.balanceOf(App.YOUR_ADDRESS), imxToken.exchangeRate()];
  const [decimals, underlying, totalSupply, name, symbol, staked, unstaked, exchangeRate] =
    await App.ethcallProvider.all(calls);
  const token = await getArbitrumToken(App, underlying, address);
  return {
    address,
    name,
    symbol,
    totalSupply,
    decimals,
    staked: staked / 10 ** decimals,
    unstaked: unstaked / 10 ** decimals,
    token: token,
    balance: totalSupply * exchangeRate / 1e18,
    contract: imxToken,
    tokens: [address].concat(token.tokens)
  }
}

async function getArbitrumSaddleToken(App, saddle, address, stakingAddress, swapAddress) {
  const swap = new ethers.Contract(swapAddress, ARBITRUM_SADDLE_SWAP_ABI, App.provider)
  const virtualPrice = await swap.getVirtualPrice();
  const coin0 = await swap.getToken(0);
  const token = await getArbitrumToken(App, coin0, address);
  const decimals = await saddle.decimals();
  const staked = await saddle.balanceOf(stakingAddress);
  const unstaked = await saddle.balanceOf(App.YOUR_ADDRESS);
  const name = await saddle.name();
  const symbol = await saddle.symbol();
  const totalSupply = await saddle.totalSupply();
  return {
      address,
      name,
      symbol,
      totalSupply,
      decimals : decimals,
      staked:  staked / 10 ** decimals,
      unstaked: unstaked  / 10 ** decimals,
      contract: saddle,
      tokens : [address, coin0],
      token,
      virtualPrice : virtualPrice / 1e18
  };
}

async function getArbitrumStoredToken(App, tokenAddress, stakingAddress, type) {
  switch (type) {
    case "monopoly":
      const monopolyPool = new ethcall.Contract(tokenAddress, ARBITRUM_MONOPOLY_TOKEN_ABI);
      return await getArbitrumMonopolyPool(App, monopolyPool, tokenAddress, stakingAddress);
    case "uniswap":
      const pool = new ethcall.Contract(tokenAddress, UNI_ABI);
      return await getArbitrumUniPool(App, pool, tokenAddress, stakingAddress);
    case "kyber":
      const kyber = new ethcall.Contract(tokenAddress, ARBITRUM_KYBER_TOKEN_ABI);
      return await getArbitrumKyberPool(App, kyber, tokenAddress, stakingAddress);
    case "arbitrumSaddle":
      const saddle = new ethers.Contract(tokenAddress, ARBITRUM_SADDLE_LP_TOKEN_ABI, App.provider);
      const swap = await saddle.swap();
      return await getArbitrumSaddleToken(App, saddle, tokenAddress, stakingAddress, swap);
    case "doualArbitrumDlp":
      const doualDlpPool = new ethcall.Contract(tokenAddress, DLP_ARBITRUM_DUAL_TOKEN_ABI);
      return await getDodoArbitrumDualPoolToken(App, doualDlpPool, tokenAddress, stakingAddress);
    case "arbitrumVault":
      const vault = new ethcall.Contract(tokenAddress, ARBITRUM_VAULT_TOKEN_ABI);
      return await getArbitrumVault(App, vault, tokenAddress, stakingAddress);
    case "arbitrumArbisVault":
      const arbisVault = new ethcall.Contract(tokenAddress, ARBIS_VAULT_UNDERLYING_ABI);
      return await getArbitrumArbisVault(App, arbisVault, tokenAddress, stakingAddress);
    case "arbitrumWomVault":
      const womVault = new ethcall.Contract(tokenAddress, ARBITRUM_WOM_TOKEN_ABI);
      return await getArbitrumWomVault(App, womVault, tokenAddress, stakingAddress);
    case "cToken":
      const cToken = new ethcall.Contract(tokenAddress, CTOKEN_ABI);
      return await getCArbitrumToken(App, cToken, tokenAddress, stakingAddress);
    case "imxToken":
      const imxToken = new ethcall.Contract(tokenAddress, IMX_ARBITRUM_TOKEN_ABI);
      return await getImxArbitrumToken(App, imxToken, tokenAddress, stakingAddress);
    case "yearn":
      const yearnVault = new ethcall.Contract(tokenAddress, YEARN_VAULT_ABI);
      return await getArbitrumYearnVault(App, yearnVault, tokenAddress, stakingAddress);
    case "triToken":
      const tri = new ethcall.Contract(tokenAddress, TRITOKEN_ABI);
      const [triMinter] = await App.ethcallProvider.all([tri.minter()]);
      return await getArbitrumTriCryptoToken(App, tri, tokenAddress, stakingAddress, triMinter);
    case "curve":
      const crv = new ethcall.Contract(tokenAddress, CURVE_ABI);
      const [minter] = await App.ethcallProvider.all([crv.minter()]);
      return await getArbitrumCurveToken(App, crv, tokenAddress, stakingAddress, minter);
    case "stableswap":
      const stable = new ethcall.Contract(tokenAddress, STABLESWAP_ABI);
      return await getArbitrumStableswapToken(App, stable, tokenAddress, stakingAddress);
    case "arbitrumArbisVault2":
      const arbisVault2 = new ethcall.Contract(tokenAddress, ARBIS_VAULT_UNDERLYING_ABI2);
      return await getArbitrumArbisVault2(App, arbisVault2, tokenAddress, stakingAddress);
    case "arbitrumWantVault":
      const wantVault = new ethcall.Contract(tokenAddress, ARBITRUM_VAULT_WANT_ABI);
      return await getArbitrumWantVault(App, wantVault, tokenAddress, stakingAddress);
    case "dlp":
      const dlpPool = new ethcall.Contract(tokenAddress, ARBITRUM_DLP_ABI);
      const [originTokenAddress] = await App.ethcallProvider.all([dlpPool.originToken()]);
      return await getArbitrumDlpPool(App, dlpPool, tokenAddress, originTokenAddress, stakingAddress);
    case "jar":
      const jar = new ethcall.Contract(tokenAddress, JAR_ABI);
      return await getArbitrumJar(App, jar, tokenAddress, stakingAddress);
    case "erc20":
      const erc20 = new ethcall.Contract(tokenAddress, ERC20_ABI);
      return await getErc20(App, erc20, tokenAddress, stakingAddress);
  }
}

async function getArbitrumToken(App, tokenAddress, stakingAddress) {
  if (tokenAddress == "0x0000000000000000000000000000000000000000") {
    return getercArbitrum20(App, null, tokenAddress, stakingAddress)
  }
  const type = window.localStorage.getItem(tokenAddress);
  if (type) return getArbitrumStoredToken(App, tokenAddress, stakingAddress, type);
  try {
    const ARBIS_VAULT2 = new ethcall.Contract(tokenAddress, ARBIS_VAULT_UNDERLYING_ABI2);
    const _token = await App.ethcallProvider.all([ARBIS_VAULT2.depositToken()]);
    const arbisVault2 = await getArbitrumArbisVault2(App, ARBIS_VAULT2, tokenAddress, stakingAddress);
    window.localStorage.setItem(tokenAddress, "arbitrumArbisVault2");
    return arbisVault2;
  }
  catch (err) {
  }
  try {
    const pool = new ethcall.Contract(tokenAddress, ARBITRUM_MONOPOLY_TOKEN_ABI);
    const [totalAmounts] = await App.ethcallProvider.all([pool.getTotalAmounts()]);
    const monopolyPool = await getArbitrumMonopolyPool(App, pool, tokenAddress, stakingAddress);
    window.localStorage.setItem(tokenAddress, "monopoly");
    return monopolyPool;
  }
  catch (err) {
    console.log(err)
  }
  try {
    const pool = new ethcall.Contract(tokenAddress, ARBITRUM_KYBER_TOKEN_ABI);
    const [tickDistance] = await App.ethcallProvider.all([pool.tickDistance()]);
    const kyberPool = await getArbitrumKyberPool(App, pool, tokenAddress, stakingAddress);
    window.localStorage.setItem(tokenAddress, "kyber");
    return kyberPool;
  }
  catch (err) {
    console.log(err)
  }
  try {
    const pool = new ethcall.Contract(tokenAddress, UNI_ABI);
    const _token0 = await App.ethcallProvider.all([pool.token0()]);
    const uniPool = await getArbitrumUniPool(App, pool, tokenAddress, stakingAddress);
    window.localStorage.setItem(tokenAddress, "uniswap");
    return uniPool;
  }
  catch (err) {
    console.log(err)
  }
  try {
    const cArbitrumToken = new ethcall.Contract(tokenAddress, CTOKEN_ABI);
    const _totalBorrows = await App.ethcallProvider.all([cArbitrumToken.totalBorrows()]);
    const res = await getCArbitrumToken(App, cArbitrumToken, tokenAddress, stakingAddress);
    window.localStorage.setItem(tokenAddress, "cToken");
    return res;
  }
  catch (err) {
  }
  try {
    const saddle = new ethers.Contract(tokenAddress, ARBITRUM_SADDLE_LP_TOKEN_ABI, App.provider);
    const swap = await saddle.swap();
    const res = await getArbitrumSaddleToken(App, saddle, tokenAddress, stakingAddress, swap);
    window.localStorage.setItem(tokenAddress, "arbitrumSaddle");
    return res;
  }
  catch(err) {
  }
  try {
    const imxArbitrumToken = new ethcall.Contract(tokenAddress, IMX_ARBITRUM_TOKEN_ABI);
    const _totalBalance = await App.ethcallProvider.all([imxArbitrumToken.totalBalance()]);
    const res = await getImxArbitrumToken(App, imxArbitrumToken, tokenAddress, stakingAddress);
    window.localStorage.setItem(tokenAddress, "imxToken");
    return res;
  }
  catch (err) {
  }
  try {
    const yearnVault = new ethcall.Contract(tokenAddress, YEARN_VAULT_ABI);
    const _domainSep = await App.ethcallProvider.all([yearnVault.DOMAIN_SEPARATOR()]);
    const yearn = await getArbitrumYearnVault(App, yearnVault, tokenAddress, stakingAddress);
    window.localStorage.setItem(tokenAddress, "yearn");
    return yearn;
  }
  catch (err) {
  }
  try {
    const pool = new ethcall.Contract(tokenAddress, ARBITRUM_DLP_ABI);
    const [originTokenAddress] = await App.ethcallProvider.all([pool.originToken()]);
    const dlpPool = await getArbitrumDlpPool(App, pool, tokenAddress, originTokenAddress, stakingAddress);
    window.localStorage.setItem(tokenAddress, "dlp");
    return dlpPool;
  }
  catch (err) {
  }
  try {
    const tri = new ethcall.Contract(tokenAddress, CURVE_ABI);
    const [triMinter] = await App.ethcallProvider.all([tri.minter()]);
    const minterContract = new ethcall.Contract(triMinter, TRITOKEN_MINTER_ABI);
    const [xcp_profit] = await App.ethcallProvider.all([minterContract.xcp_profit()]);
    const res = await getArbitrumTriCryptoToken(App, tri, tokenAddress, stakingAddress, triMinter);
    window.localStorage.setItem(tokenAddress, "triToken");
    return res;
  }
  catch (err) {
  }
  try {
    const crv = new ethcall.Contract(tokenAddress, CURVE_ABI);
    const [minter] = await App.ethcallProvider.all([crv.minter()]);
    const res = await getArbitrumCurveToken(App, crv, tokenAddress, stakingAddress, minter);
    window.localStorage.setItem(tokenAddress, "curve");
    return res;
  }
  catch (err) {
  }
  try {
    const stable = new ethcall.Contract(tokenAddress, STABLESWAP_ABI);
    const _coin0 = await App.ethcallProvider.all([stable.coins(0)]);
    window.localStorage.setItem(tokenAddress, "stableswap");
    return await getArbitrumStableswapToken(App, stable, tokenAddress, stakingAddress);
  }
  catch (err) {
  }
  try {
    const jar = new ethcall.Contract(tokenAddress, JAR_ABI);
    const _token = await App.ethcallProvider.all([jar.token()]);
    const [ratio] = await App.ethcallProvider.all([jar.getRatio()]);  //to see if its jar or a classic vault
    const res = await getArbitrumJar(App, jar, tokenAddress, stakingAddress);
    window.localStorage.setItem(tokenAddress, "jar");
    return res;
  }
  catch (err) {
  }
  try {
    const VAULT = new ethcall.Contract(tokenAddress, ARBITRUM_VAULT_TOKEN_ABI);
    const _token = await App.ethcallProvider.all([VAULT.token()]);
    const vault = await getArbitrumVault(App, VAULT, tokenAddress, stakingAddress);
    window.localStorage.setItem(tokenAddress, "arbitrumVault");
    return vault;
  }
  catch (err) {
  }
  try {
    const ARBIS_VAULT = new ethcall.Contract(tokenAddress, ARBIS_VAULT_UNDERLYING_ABI);
    const _token = await App.ethcallProvider.all([ARBIS_VAULT.getUnderlying()]);
    const arbisVault = await getArbitrumArbisVault(App, ARBIS_VAULT, tokenAddress, stakingAddress);
    window.localStorage.setItem(tokenAddress, "arbitrumArbisVault");
    return arbisVault;
  }
  catch (err) {
  }
  try {
    const WOM_VAULT = new ethcall.Contract(tokenAddress, ARBITRUM_WOM_TOKEN_ABI);
    const _token = await App.ethcallProvider.all([WOM_VAULT.underlyingToken()]);
    const arbisVault = await getArbitrumWomVault(App, WOM_VAULT, tokenAddress, stakingAddress);
    window.localStorage.setItem(tokenAddress, "arbitrumWomVault");
    return arbisVault;
  }
  catch (err) {
  }
  try {
    const pool = new ethcall.Contract(tokenAddress, DLP_ARBITRUM_DUAL_TOKEN_ABI);
    const _baseToken = await App.ethcallProvider.all([pool._BASE_TOKEN_()]);
    const doualDlpPool = await getDodoArbitrumDualPoolToken(App, pool, tokenAddress, stakingAddress);
    window.localStorage.setItem(tokenAddress, "doualArbitrumDlp");
    return doualDlpPool;
  }
  catch (err) {
  }
  try {
    const WANT_VAULT = new ethcall.Contract(tokenAddress, ARBITRUM_VAULT_WANT_ABI);
    const _want = await App.ethcallProvider.all([WANT_VAULT.want()]);
    const wantVault = await getArbitrumWantVault(App, WANT_VAULT, tokenAddress, stakingAddress);
    window.localStorage.setItem(tokenAddress, "arbitrumWantVault");
    return wantVault;
  }
  catch (err) {
  }
  try {
    const erc20 = new ethcall.Contract(tokenAddress, ERC20_ABI);
    const _name = await App.ethcallProvider.all([erc20.name()]);
    const erc20tok = await getErc20(App, erc20, tokenAddress, stakingAddress);
    window.localStorage.setItem(tokenAddress, "erc20");
    return erc20tok;
  }
  catch (err) {
    console.log(err);
    console.log(`Couldn't match ${tokenAddress} to any known token type.`);
  }
}

async function loadArbitrumSynthetixPoolInfo(App, tokens, prices, stakingAbi, stakingAddress,
  rewardTokenFunction, stakeTokenFunction) {
  const STAKING_POOL = new ethers.Contract(stakingAddress, stakingAbi, App.provider);
  const STAKING_MULTI = new ethcall.Contract(stakingAddress, stakingAbi);

  if (!STAKING_POOL.callStatic[stakeTokenFunction]) {
    console.log("Couldn't find stake function ", stakeTokenFunction);
  }
  const stakeTokenAddress = await STAKING_POOL.callStatic[stakeTokenFunction]();

  const rewardTokenAddress = await STAKING_POOL.callStatic[rewardTokenFunction]();

  var stakeToken = await getArbitrumToken(App, stakeTokenAddress, stakingAddress);

  if (stakeTokenAddress.toLowerCase() === rewardTokenAddress.toLowerCase()) {
    stakeToken.staked = await STAKING_POOL.totalSupply() / 10 ** stakeToken.decimals;
  }

  var newPriceAddresses = stakeToken.tokens.filter(x =>
    !getParameterCaseInsensitive(prices, x));
  var newPrices = await lookUpTokenPrices(newPriceAddresses);
  for (const key in newPrices) {
    if (newPrices[key]?.usd)
      prices[key] = newPrices[key];
  }
  var newTokenAddresses = stakeToken.tokens.filter(x =>
    !getParameterCaseInsensitive(tokens, x));
  for (const address of newTokenAddresses) {
    tokens[address] = await getArbitrumToken(App, address, stakingAddress);
  }
  if (!getParameterCaseInsensitive(tokens, rewardTokenAddress)) {
    tokens[rewardTokenAddress] = await getArbitrumToken(App, rewardTokenAddress, stakingAddress);
  }
  const rewardToken = getParameterCaseInsensitive(tokens, rewardTokenAddress);

  const rewardTokenTicker = rewardToken.symbol;

  const poolPrices = getPoolPrices(tokens, prices, stakeToken, "arbitrum");

  if (!poolPrices) {
    console.log(`Couldn't calculate prices for pool ${stakeTokenAddress}`);
    return null;
  }

  const stakeTokenTicker = poolPrices.stakeTokenTicker;

  const stakeTokenPrice =
    prices[stakeTokenAddress]?.usd ?? getParameterCaseInsensitive(prices, stakeTokenAddress)?.usd;
  const rewardTokenPrice = getParameterCaseInsensitive(prices, rewardTokenAddress)?.usd;

  const calls = [STAKING_MULTI.periodFinish(), STAKING_MULTI.rewardRate(),
  STAKING_MULTI.balanceOf(App.YOUR_ADDRESS), STAKING_MULTI.earned(App.YOUR_ADDRESS)]
  const [periodFinish, rewardRate, balance, earned_] = await App.ethcallProvider.all(calls);

  const weeklyRewards = (Date.now() / 1000 > periodFinish) ? 0 : rewardRate / 10 ** rewardToken.decimals * 604800;

  const usdPerWeek = weeklyRewards * rewardTokenPrice;

  const staked_tvl = poolPrices.staked_tvl;

  const userStaked = balance / 10 ** stakeToken.decimals;

  const userUnstaked = stakeToken.unstaked;

  const earned = earned_ / 10 ** rewardToken.decimals;

  return {
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

async function loadArbitrumSynthetixPool(App, tokens, prices, abi, address, rewardTokenFunction, stakeTokenFunction) {
  const info = await loadArbitrumSynthetixPoolInfo(App, tokens, prices, abi, address, rewardTokenFunction, stakeTokenFunction);
  if (!info) return null;
  return await printArbitrumSynthetixPool(App, info, "arbitrum");
}

async function loadArbitrumBasisFork(data) {
  const App = await init_ethers();

  _print(`Initialized ${App.YOUR_ADDRESS}`);
  _print("Reading smart contracts...\n");

  var tokens = {};
  var prices = {};
  var totalStaked = 0;

  let p1 = await loadArbitrumSynthetixPool(App, tokens, prices, data.PoolABI,
    data.SharePool.address, data.SharePool.rewardToken, data.SharePool.stakeToken);
  totalStaked += p1.staked_tvl;

  if (data.SharePool2) {
    let p3 = await loadArbitrumSynthetixPool(App, tokens, prices, data.PoolABI,
      data.SharePool2.address, data.SharePool2.rewardToken, data.SharePool2.stakeToken);
    totalStaked += p3.staked_tvl;
  }

  let p2 = await loadArbitrumSynthetixPool(App, tokens, prices, data.PoolABI,
    data.CashPool.address, data.CashPool.rewardToken, data.CashPool.stakeToken);
  totalStaked += p2.staked_tvl;

  if (data.SeedBanks) {
    let p = await loadMultipleArbitrumSynthetixPools(App, tokens, prices, data.SeedBanks)
    totalStaked += p.staked_tvl;
    if (p.totalUserStaked > 0) {
      _print(`You are staking a total of $${formatMoney(p.totalUserStaked)} at an APR of ${(p.totalApr * 100).toFixed(2)}%\n`);
    }
  }

  if (!data.SeedBanks) {
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


async function getArbitrumPoolInfo(app, chefContract, chefAddress, poolIndex, pendingRewardsFunction) {
  const poolInfo = await chefContract.poolInfo(poolIndex);
  if (poolInfo.allocPoint == 0) {
    return {
      address: poolInfo.lpToken,
      allocPoints: poolInfo.allocPoint ?? 1,
      poolToken: null,
      userStaked: 0,
      pendingRewardTokens: 0,
    };
  }
  const poolToken = await getArbitrumToken(app, poolInfo.lpToken ?? poolInfo.token ?? poolInfo.stakingToken, chefAddress);
  const userInfo = await chefContract.userInfo(poolIndex, app.YOUR_ADDRESS);
  const pendingRewardTokens = await chefContract.callStatic[pendingRewardsFunction](poolIndex, app.YOUR_ADDRESS);
  const staked = userInfo.amount / 10 ** poolToken.decimals;
  return {
    address: poolInfo.lpToken ?? poolInfo.token ?? poolInfo.stakingToken,
    allocPoints: poolInfo.allocPoint ?? 1,
    poolToken: poolToken,
    userStaked: staked,
    pendingRewardTokens: pendingRewardTokens / 10 ** 18,
    depositFee: (poolInfo.depositFeeBP ?? 0) / 100,
    withdrawFee: (poolInfo.withdrawFeeBP ?? 0) / 100
  };
}

async function loadArbitrumChefContract(App, tokens, prices, chef, chefAddress, chefAbi, rewardTokenTicker,
  rewardTokenFunction, rewardsPerBlockFunction, rewardsPerWeekFixed, pendingRewardsFunction,
  deathPoolIndices, claimFunction) {
  const chefContract = chef ?? new ethers.Contract(chefAddress, chefAbi, App.provider);

  const poolCount = parseInt(await chefContract.poolLength(), 10);
  const totalAllocPoints = await chefContract.totalAllocPoint();

  _print(`<a href='https://arbiscan.io/address/${chefAddress}' target='_blank'>Staking Contract</a>`);
  _print(`Found ${poolCount} pools.\n`)

  _print(`Showing incentivized pools only.\n`);

  const rewardTokenAddress = await chefContract.callStatic[rewardTokenFunction]();
  const rewardToken = await getArbitrumToken(App, rewardTokenAddress, chefAddress);
  const rewardsPerWeek = rewardsPerWeekFixed ??
    await chefContract.callStatic[rewardsPerBlockFunction]()
    / 10 ** rewardToken.decimals * 604800 / 13.5

  const poolInfos = await Promise.all([...Array(poolCount).keys()].map(async (x) =>
    await getArbitrumPoolInfo(App, chefContract, chefAddress, x, pendingRewardsFunction)));

  var tokenAddresses = [].concat.apply([], poolInfos.filter(x => x.poolToken).map(x => x.poolToken.tokens));

  await Promise.all(tokenAddresses.map(async (address) => {
    tokens[address] = await getArbitrumToken(App, address, chefAddress);
  }));

  if (deathPoolIndices) {   //load prices for the deathpool assets
    deathPoolIndices.map(i => poolInfos[i])
      .map(poolInfo =>
        poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, "arbitrum") : undefined);
  }

  const poolPrices = poolInfos.map(poolInfo => poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, "arbitrum") : undefined);


  _print("Finished reading smart contracts.\n");

  let aprs = []
  for (i = 0; i < poolCount; i++) {
    if (poolPrices[i]) {
      const apr = printArbitrumChefPool(App, chefAbi, chefAddress, prices, tokens, poolInfos[i], i, poolPrices[i],
        totalAllocPoints, rewardsPerWeek, rewardTokenTicker, rewardTokenAddress,
        pendingRewardsFunction, null, claimFunction, "arbitrum", poolInfos[i].depositFee, poolInfos[i].withdrawFee)
      aprs.push(apr);
    }
  }
  let totalUserStaked = 0, totalStaked = 0, averageApr = 0;
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
      + ` Day $${formatMoney(totalUserStaked * averageApr / 365)}`
      + ` Week $${formatMoney(totalUserStaked * averageApr / 52)}`
      + ` Year $${formatMoney(totalUserStaked * averageApr)}\n`);
  }
  return { prices, totalUserStaked, totalStaked, averageApr }
}

function printArbitrumChefPool(App, chefAbi, chefAddr, prices, tokens, poolInfo, poolIndex, poolPrices,
  totalAllocPoints, rewardsPerWeek, rewardTokenTicker, rewardTokenAddress,
  pendingRewardsFunction, fixedDecimals, claimFunction, chain = "eth", depositFee = 0, withdrawFee = 0) {
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
  printArbitrumChefContractLinks(App, chefAbi, chefAddr, poolIndex, poolInfo.address, pendingRewardsFunction,
    rewardTokenTicker, poolPrices.stakeTokenTicker, poolInfo.poolToken.unstaked,
    poolInfo.userStaked, poolInfo.pendingRewardTokens, fixedDecimals, claimFunction, rewardPrice, chain, depositFee, withdrawFee);
  return apr;
}

function printArbitrumChefContractLinks(App, chefAbi, chefAddr, poolIndex, poolAddress, pendingRewardsFunction,
  rewardTokenTicker, stakeTokenTicker, unstaked, userStaked, pendingRewardTokens, fixedDecimals,
  claimFunction, rewardTokenPrice, chain, depositFee, withdrawFee) {
  fixedDecimals = fixedDecimals ?? 2;
  const approveAndStake = async function () {
    return chefArbitrumContract_stake(chefAbi, chefAddr, poolIndex, poolAddress, App)
  }
  const unstake = async function () {
    return chefArbitrumContract_unstake(chefAbi, chefAddr, poolIndex, App, pendingRewardsFunction)
  }
  const claim = async function () {
    return chefArbitrumContract_claim(chefAbi, chefAddr, poolIndex, App, pendingRewardsFunction, claimFunction)
  }
  if (depositFee > 0) {
    _print_link(`Stake ${unstaked.toFixed(fixedDecimals)} ${stakeTokenTicker} - Fee ${depositFee}%`, approveAndStake)
  } else {
    _print_link(`Stake ${unstaked.toFixed(fixedDecimals)} ${stakeTokenTicker}`, approveAndStake)
  }
  if (withdrawFee > 0) {
    _print_link(`Unstake ${userStaked.toFixed(fixedDecimals)} ${stakeTokenTicker} - Fee ${withdrawFee}%`, unstake)
  } else {
    _print_link(`Unstake ${userStaked.toFixed(fixedDecimals)} ${stakeTokenTicker}`, unstake)
  }
  _print_link(`Claim ${pendingRewardTokens.toFixed(fixedDecimals)} ${rewardTokenTicker} ($${formatMoney(pendingRewardTokens * rewardTokenPrice)})`, claim)
  _print(`Staking or unstaking also claims rewards.`)
  _print("");
}

const chefArbitrumContract_stake = async function (chefAbi, chefAddress, poolIndex, stakeTokenAddr, App) {
  const signer = App.provider.getSigner()

  const STAKING_TOKEN = new ethers.Contract(stakeTokenAddr, ERC20_ABI, signer)
  const CHEF_CONTRACT = new ethers.Contract(chefAddress, chefAbi, signer)

  const currentTokens = await STAKING_TOKEN.balanceOf(App.YOUR_ADDRESS)
  const allowedTokens = await STAKING_TOKEN.allowance(App.YOUR_ADDRESS, chefAddress)

  let allow = Promise.resolve()

  if (allowedTokens / 1e18 < currentTokens / 1e18) {
    showLoading()
    allow = STAKING_TOKEN.approve(chefAddress, ethers.constants.MaxUint256)
      .then(function (t) {
        return App.provider.waitForTransaction(t.hash)
      })
      .catch(function () {
        hideLoading()
        alert('Try resetting your approval to 0 first')
      })
  }

  if (currentTokens / 1e18 > 0) {
    showLoading()
    allow
      .then(async function () {
        CHEF_CONTRACT.deposit(poolIndex, currentTokens)
          .then(function (t) {
            App.provider.waitForTransaction(t.hash).then(function () {
              hideLoading()
            })
          })
          .catch(function () {
            hideLoading()
            _print('Something went wrong.')
          })
      })
      .catch(function () {
        hideLoading()
        _print('Something went wrong.')
      })
  } else {
    alert('You have no tokens to stake!!')
  }
}

const chefArbitrumContract_unstake = async function (chefAbi, chefAddress, poolIndex, App, pendingRewardsFunction) {
  const signer = App.provider.getSigner()
  const CHEF_CONTRACT = new ethers.Contract(chefAddress, chefAbi, signer)

  const currentStakedAmount = (await CHEF_CONTRACT.userInfo(poolIndex, App.YOUR_ADDRESS)).amount

  if (currentStakedAmount / 1e18 > 0) {
    showLoading()
    CHEF_CONTRACT.withdraw(poolIndex, currentStakedAmount)
      .then(function (t) {
        return App.provider.waitForTransaction(t.hash)
      })
      .catch(function () {
        hideLoading()
      })
  }
}

const chefArbitrumContract_claim = async function (chefAbi, chefAddress, poolIndex, App,
  pendingRewardsFunction, claimFunction) {
  const signer = App.provider.getSigner()

  const CHEF_CONTRACT = new ethers.Contract(chefAddress, chefAbi, signer)

  const earnedTokenAmount = await CHEF_CONTRACT.callStatic[pendingRewardsFunction](poolIndex, App.YOUR_ADDRESS) / 1e18

  if (earnedTokenAmount > 0) {
    showLoading()
    if (claimFunction) {
      claimFunction(poolIndex)
        .then(function (t) {
          return App.provider.waitForTransaction(t.hash)
        })
    }
    else {
      CHEF_CONTRACT.deposit(poolIndex, 0)
        .then(function (t) {
          return App.provider.waitForTransaction(t.hash)
        })
        .catch(function () {
          hideLoading()
        })
    }
  }
}

async function loadMultipleArbitrumSynthetixPools(App, tokens, prices, pools) {
  let totalStaked = 0, totalUserStaked = 0, individualAPRs = [];
  const infos = await Promise.all(pools.map(p =>
    loadArbitrumSynthetixPoolInfo(App, tokens, prices, p.abi, p.address, p.rewardTokenFunction, p.stakeTokenFunction)));
  for (const i of infos) {
    let p = await printArbitrumSynthetixPool(App, i, "arbitrum");
    totalStaked += p.staked_tvl || 0;
    totalUserStaked += p.userStaked || 0;
    if (p.userStaked > 0) {
      individualAPRs.push(p.userStaked * p.apr / 100);
    }
  }
  let totalApr = totalUserStaked == 0 ? 0 : individualAPRs.reduce((x, y) => x + y, 0) / totalUserStaked;
  return { staked_tvl: totalStaked, totalUserStaked, totalApr };
}

async function printArbitrumSynthetixPool(App, info, chain = "eth", customURLs) {
  info.poolPrices.print_price(chain, 4, customURLs);
  _print(`${info.rewardTokenTicker} Per Week: ${info.weeklyRewards.toFixed(2)} ($${formatMoney(info.usdPerWeek)})`);
  const weeklyAPR = info.usdPerWeek / info.staked_tvl * 100;
  const dailyAPR = weeklyAPR / 7;
  const yearlyAPR = weeklyAPR * 52;
  _print(`APR: Day ${dailyAPR.toFixed(2)}% Week ${weeklyAPR.toFixed(2)}% Year ${yearlyAPR.toFixed(2)}%`);
  const userStakedUsd = info.userStaked * info.stakeTokenPrice;
  const userStakedPct = userStakedUsd / info.staked_tvl * 100;
  _print(`You are staking ${info.userStaked.toFixed(6)} ${info.stakeTokenTicker} ` +
    `$${formatMoney(userStakedUsd)} (${userStakedPct.toFixed(2)}% of the pool).`);
  if (info.userStaked > 0) {
    info.poolPrices.print_contained_price(info.userStaked);
    const userWeeklyRewards = userStakedPct * info.weeklyRewards / 100;
    const userDailyRewards = userWeeklyRewards / 7;
    const userYearlyRewards = userWeeklyRewards * 52;
    _print(`Estimated ${info.rewardTokenTicker} earnings:`
      + ` Day ${userDailyRewards.toFixed(2)} ($${formatMoney(userDailyRewards * info.rewardTokenPrice)})`
      + ` Week ${userWeeklyRewards.toFixed(2)} ($${formatMoney(userWeeklyRewards * info.rewardTokenPrice)})`
      + ` Year ${userYearlyRewards.toFixed(2)} ($${formatMoney(userYearlyRewards * info.rewardTokenPrice)})`);
  }
  const approveTENDAndStake = async function () {
    return rewardsContractArbitrum_stake(info.stakeTokenAddress, info.stakingAddress, App)
  }
  const unstake = async function () {
    return rewardsContractArbitrum_unstake(info.stakingAddress, App)
  }
  const claim = async function () {
    return rewardsContractArbitrum_claim(info.stakingAddress, App)
  }
  const exit = async function () {
    return rewardsContract_exit(info.stakingAddress, App)
  }
  const revoke = async function () {
    return rewardsContract_resetApprove(info.stakeTokenAddress, info.stakingAddress, App)
  }
  _print(`<a target="_blank" href="https://arbiscan.io/address/${info.stakingAddress}#code">Arbitrum Explorer</a>`);
  if (info.stakeTokenTicker != "ETH") {
    _print_link(`Stake ${info.userUnstaked.toFixed(6)} ${info.stakeTokenTicker}`, approveTENDAndStake)
  }
  else {
    _print("Please use the official website to stake ETH.");
  }
  _print_link(`Unstake ${info.userStaked.toFixed(6)} ${info.stakeTokenTicker}`, unstake)
  _print_link(`Claim ${info.earned.toFixed(6)} ${info.rewardTokenTicker} ($${formatMoney(info.earned * info.rewardTokenPrice)})`, claim)
  if (info.stakeTokenTicker != "ETH") {
    _print_link(`Revoke (set approval to 0)`, revoke)
  }
  _print_link(`Exit`, exit)
  _print("");

  return {
    staked_tvl: info.poolPrices.staked_tvl,
    userStaked: userStakedUsd,
    apr: yearlyAPR
  }
}

const rewardsContractArbitrum_stake = async function (stakeTokenAddr, rewardPoolAddr, App, maxAllowance) {
  const signer = App.provider.getSigner()

  const TEND_TOKEN = new ethers.Contract(stakeTokenAddr, ERC20_ABI, signer)
  const WEEBTEND_V2_TOKEN = new ethers.Contract(rewardPoolAddr, YFFI_REWARD_CONTRACT_ABI, signer)

  const balanceOf = await TEND_TOKEN.balanceOf(App.YOUR_ADDRESS)
  const currentTEND = maxAllowance ? (maxAllowance / 1e18 < balanceOf / 1e18
    ? maxAllowance : balanceOf) : balanceOf
  const allowedTEND = await TEND_TOKEN.allowance(App.YOUR_ADDRESS, rewardPoolAddr)

  let allow = Promise.resolve()

  if (allowedTEND / 1e18 < currentTEND / 1e18) {
    showLoading()
    allow = TEND_TOKEN.approve(rewardPoolAddr, ethers.constants.MaxUint256)
      .then(function (t) {
        return App.provider.waitForTransaction(t.hash)
      })
      .catch(function () {
        hideLoading()
        alert('Try resetting your approval to 0 first')
      })
  }

  if (currentTEND / 1e18 > 0) {
    showLoading()
    allow
      .then(async function () {
        WEEBTEND_V2_TOKEN.stake(currentTEND)
          .then(function (t) {
            App.provider.waitForTransaction(t.hash).then(function () {
              hideLoading()
            })
          })
          .catch(x => {
            hideLoading()
            console.log(x);
            _print('Something went wrong.')
          })
      })
      .catch(x => {
        hideLoading()
        console.log(x);
        _print('Something went wrong.')
      })
  } else {
    alert('You have no tokens to stake!!')
  }
}

const rewardsContractArbitrum_unstake = async function (rewardPoolAddr, App) {
  const signer = App.provider.getSigner()

  const REWARD_POOL = new ethers.Contract(rewardPoolAddr, Y_STAKING_POOL_ABI, signer)
  const currentStakedAmount = await REWARD_POOL.balanceOf(App.YOUR_ADDRESS)

  if (currentStakedAmount > 0) {
    showLoading()
    REWARD_POOL.withdraw(currentStakedAmount)
      .then(function (t) {
        return App.provider.waitForTransaction(t.hash)
      })
      .catch(function () {
        hideLoading()
      })
  }
}

const rewardsContractArbitrum_claim = async function (rewardPoolAddr, App) {
  const signer = App.provider.getSigner()

  const REWARD_POOL = new ethers.Contract(rewardPoolAddr, Y_STAKING_POOL_ABI, signer)

  console.log(App.YOUR_ADDRESS)

  const earnedYFFI = (await REWARD_POOL.earned(App.YOUR_ADDRESS)) / 1e18

  if (earnedYFFI > 0) {
    showLoading()
    REWARD_POOL.getReward()
      .then(function (t) {
        return App.provider.waitForTransaction(t.hash)
      })
      .catch(function () {
        hideLoading()
      })
  }
}

async function loadMultipleArbitrumSynthetixPoolsSequential(App, tokens, prices, pools) {
  let totalStaked = 0, totalUserStaked = 0, individualAPRs = [];
  for (const p of pools) {
    let res = await loadArbitrumSynthetixPool(App, tokens, prices, p.abi, p.address, p.rewardTokenFunction, p.stakeTokenFunction);
    if (!res) continue;
    totalStaked += res.staked_tvl || 0;
    totalUserStaked += res.userStaked || 0;
    if (res.userStaked > 0) {
      individualAPRs.push(res.userStaked * res.apr / 100);
    }
  }
  let totalApr = totalUserStaked == 0 ? 0 : individualAPRs.reduce((x, y) => x + y, 0) / totalUserStaked;
  return { staked_tvl: totalStaked, totalUserStaked, totalApr };
}
