function scuberGreetingForFeet(value) {
  if (value <= 400) {
    return 'This one is on me!'
  } else if (value <= 2000 && value > 400) {
    return 'That will be twenty bucks.'
  } else if (value <= 2500 && value > 2000) {
    return 'I will gladly take your thirty bucks.'
  } else if (value > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city) {
  if (city == 'NYC') {
    return 'Ok, sounds good.'
  } else if (city != 'NYC') {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip) {
  if (tip == 'generous') {
    return 'Thank you so much.'
  } else if (tip == 'not as generous') {
    return 'Thank you.'
  } else {
    return 'Bye.'
  }
}