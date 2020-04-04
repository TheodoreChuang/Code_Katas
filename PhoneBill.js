/** 
 * PHONE BILL (90 mins, Codility)
 * Your monthly phone bill has just arrived, and it's unexpectedly large. You decide to verify the amount by recalculating
 * the bill based on your phone call logs and the phone company's charges. The logs are given as a string S consisting of 
 * N lines separated by end-of-line characters (ASCII code 10). Each line describes one phone call using the following 
 * format: "hh:mm:ss,nnn-nnn-nnn", where "hh:mm:ss" denotes the duration of the call (in "hh" hours, "mm" minutes and 
 * "ss" seconds) and "nnn-nnn-nnn" denotes the 9-digit phone number of the recipient (with no leading zeros).
 * 
 * Each call is billed separately. The billing rules are as follows:
 *    * If the call was shorter than 5 minutes, then you pay 3 cents for every started second of the call (e.g. for duration
 *      "00:01:07" you pay 67 * 3 = 201 cents).
 *    * If the call was at least 5 minutes long, then you pay 150 cents for every started minute of the call (e.g. for 
 *      duration "00:05:00" you pay 5 * 150 = 750 cents and for duration "00:05:01" you pay 6 * 150 = 900 cents).
 *    * All calls to the phone number that has the longest total duration of calls are free. In the case of a tie, if more 
 *      than one phone number shares the longest total duration, the promotion is applied only to the phone number whose 
 *      numerical value is the smallest among these phone numbers.
 * 
 * Write a function:
 *    function solution(S) that, given a string S describing phone call logs, returns the amount of money you have to pay 
 *    in cents.
 * 
 * For example, given string S with N = 3 lines:
 *    "00:01:07,400-234-090
 *    00:05:01,701-080-080
 *    00:05:00,400-234-090"
 * the function should return 900 (the total duration for number 400-234-090 is 6 minutes 7 seconds, and the total duration 
 * for number 701-080-080 is 5 minutes 1 second; therefore, the free promotion applies to the former phone number).
 * 
 * Assume that:
 *    * N is an integer within the range 1..100
 *    * every phone number follows the format "nnn-nnn-nnn" strictly; there are no leading zeros;
 *    * the duration of every call follows the format "hh:mm:ss" strictly (00 ≤ hh ≤ 99, 00 ≤ mm, ss ≤ 59);
 *    * each line follows the format "hh:mm:ss,nnn-nnn-nnn" strictly; there are no empty lines and spaces.
 * 
 * In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

// Assessment: scored 75%. No break down provided.

/**
 * Converts a time string into its equivalent duration in seconds
 * @param {string} timeString (ex. HH:MM:SS)
 * @return {number} seconds
 */
function timeStringToSeconds(timeString) {
  const hours = parseInt(timeString.slice(0, 2))
  const minutes = parseInt(timeString.slice(3, 5))
  const seconds = parseInt(timeString.slice(6, 8))

  return hours * 3600 + minutes * 60 + seconds
}

/**
 * Calculates the cost of a call
 * @param {string} timeString (ex. HH:MM:SS)
 * @return {number} cost in cents
 */
function costOfCall(timeString) {
  const durationSeconds = timeStringToSeconds(timeString)

  // < 5 mins (3 cents / sec)
  if (durationSeconds <= 300) {
    return durationSeconds * 3
  }

  // > 5 mins (150 cents / minute, minute rounded up)
  if (durationSeconds > 300) {
    durationMinutesRoundedUp = Math.ceil(durationSeconds / 60)
    return durationMinutesRoundedUp * 150
  }
}

/**
 * Phone number with longest total duration
 * In case of tie breaker, number with lowest numerical value wins
 * @param {object} callerLogs
 * @returns {string} favoriteNumber (ex. "400-234-090")
 */
function favoriteNumberIs(callerLogs) {
  let favoriteNumber = null
  let longestDuration = 0

  for (let [number, data] of Object.entries(callerLogs)) {
    const totalDuration = data.calls
      .map((timeString) => timeStringToSeconds(timeString))
      .reduce((acc, cur) => acc + cur)

    if (totalDuration >= longestDuration) {
      if (totalDuration === longestDuration) {
        favoriteNumber = number < favoriteNumber ? number : favoriteNumber
      } else {
        favoriteNumber = number
        longestDuration = totalDuration
      }
    }
  }

  return favoriteNumber
}

/**
 * Parse phone bill logs into callerLogs object is easier analysis
 * @param {string} logsString (ex. "00:01:07,400-234-090\n00:05:01,701-080-080\n00:05:00,400-234-090")
 * @returns {object} (ex .
 *  {
 *    "400-234-090": {
 *      "calls": [
 *        "00:01:07",
 *        "00:05:00"
 *      ]
 *    },
 *    "701-080-080": {
 *      "calls": [
 *        "00:05:01"
 *      ]
 *    }
 *  }
 * )
 */
function parseLogs(logsString) {
  const callerLogs = {}
  const logStrings = logsString.split('\n')

  logStrings.forEach((call) => {
    const tuple = call.split(',')

    if (callerLogs[tuple[1]]) {
      callerLogs[tuple[1]].calls.push(tuple[0])
    } else {
      callerLogs[tuple[1]] = { calls: [tuple[0]], totalCost: undefined }
    }
  })

  return callerLogs
}

/**
 * Calculates the total cost (in cents) of a phone bill
 * @param {string} logsString
 * @returns {number} totalCost in cents
 */
function solution(logsString) {
  let totalCost = 0

  const callerLogs = parseLogs(logsString)

  // calculate favoriteNumber
  const favoriteNumber = favoriteNumberIs(callerLogs)

  // Promo: remove favorite caller before calculating cost
  delete callerLogs[favoriteNumber]

  // calculate total cost of each caller and aggregrate total costs
  for (let [number, data] of Object.entries(callerLogs)) {
    const totalCallerCost = data.calls.map((timeString) => costOfCall(timeString)).reduce((acc, cur) => acc + cur)

    callerLogs[number] = { totalCallerCost, ...data }
    totalCost += totalCallerCost
  }

  return totalCost
}
