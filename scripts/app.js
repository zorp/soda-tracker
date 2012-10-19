/**
* Soda-tracker app
* A collection of functions making soda-tracker possible.
*/

/**
 * Get the info for selected user
 *
 * @var userid int
 * @var callback function
 * @return mixed false || array[userid, name, balance, countervalue] && callback
 *
 * ToDo: Implement functionality
 */
function userGetInfo ( userid, callback ) {

}

/**
 * Change weight of users
 *
 * @var userid int
 * @var oldweight int
 * @var newweight int
 * @var callback function
 * @return mixed false || callback
 *
 * ToDo: Implement functionality
 */
function userOrder ( userid, oldweight, newweight, callback ) {

}

/**
 * Add new user
 *
 * @var username string
 * @var callback function
 * @return mixed false || callback
 *
 * ToDo: Implement functionality
 */
function userAdd ( username, callback ) {

}

/**
 * Get a list of users
 *
 * @return array[userid,username]
 *
 * ToDo: Implement functionality
 */
function userGetList ( ) {

}

/**
 * Increase users counter and balance with amount
 *
 * @var userid int
 * @var amount int
 * @var callback function
 * @return mixed false || callback
 *
 * ToDo: Implement functionality
 */
function balanceIncrease ( userid, amount, callback ) {

}

/**
 * Decrease users counter and balance with amount
 *
 * @var userid int
 * @var amount int
 * @var callback function
 * @return mixed false || callback
 *
 * ToDo: Consider merging with balanceIncrease()
 */
function balanceDecrease ( userid, amount, callback ) {

}

/**
 * Get users balance and counter value
 *
 * @var userid int
 * @var callback function
 * @return mixed false || array[balance, counter] && callback
 *
 * ToDo: Implement functionality
 */
function balanceGetAmount ( userid, callback ) {

}

/**
 * Calculate units from currency
 *
 * @var amount int
 * @var callback function
 * @return mixed false || units && callback
 *
 * ToDo: Implement functionality
 */
function calcUnits ( amount, callback ) {

}

/**
 * Calculate currency from units
 *
 * @var units int
 * @var callback function
 * @return mixed false || amount && callback
 *
 * ToDo: Implement functionality
 */
function calcCurrency ( units, callback ) {

}

/**
 * Add entry to log
 *
 * @var userid int
 * @var values array[datetime, newcounter, newbalance]
 * @return mixed false || true
 *
 * ToDo: Implement functionality
 */
function logAdd ( userid, values ) {

}

/**
 * Delete entry from log
 *
 * @var logid int
 * @return mixed false || true
 *
 * ToDo: Implement functionality
 */
function logDelete ( logid ) {

}

/**
 * Get log item
 *
 * @var logid int
 * @return mixed false || array[values]
 *
 * ToDo: Implement functionality
 */
function logGet ( logid ) {

}

/**
 * Get log item list
 *
 * @return mixed false || array[values]
 *
 * ToDo: Implement functionality
 */
function logGetList ( ) {

}
