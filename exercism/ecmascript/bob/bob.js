class Bob {
  hey(msg) {
    if(msg === msg.toUpperCase() && msg.match(/[A-Z]/) !== null) return 'Whoa, chill out!'
    if(msg.match(/[?]$/)) return 'Sure.'
    if(msg.match(/[^ ]/)) return 'Whatever.' 
    return 'Fine. Be that way!'
  }
}

export default Bob;