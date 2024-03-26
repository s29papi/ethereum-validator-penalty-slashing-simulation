/**
 * penalties
 * validators which do not fulfil their assigned duties are penalized by losing small amounts of stake 
 * 
 * penalty != slashed || slashing
 * 
 * random info: break-even uptime for a validator is around 43%
 * 
 * Note: penalties are subtracted from validators balances on the beacon chain and effectively burned, so 
 * they reduce the net issuance of the beacon chain
 * 
 * There are two penalties 
 * 1) Attestation penalties
 * 2) Sync committee penalties 
 * 
 * 
 * */ 


/**
 * Balance Simulation
 * 1. Effective Balance
 * 2. Actual Balance 
 * 
 * 1. Actual Balance: ( sum of Effective balance + accrued beacon chain rewards ) - penalties - withdrawals
 *    ( this balance is updated once every epoch for all active validators, and every slot for sync committee participants )  
 *    can be any number of gwei.
 * 
 * 
 * 2. Effective Balance is derived from actual balance. 
 *    (units of effective balance are whole Eth, and changes to effective balances are subject to hysteresis)
 *    (they can only be whole multiples of effective_balance_increment, called increment)
 *    (this increment shows up when calculating base reward, other rewards and penalties calculations. )
 * 
 * what is effective_balance_increment ? 32 ether
 * what is base reward ?
 * what is base reward per increment ?
 * Hysterisis ?
 * 
 * 
 * Engineering aspects of effective
*/