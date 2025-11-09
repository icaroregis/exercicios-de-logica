function welcomeGuest(name = 'Star Traveler') {
  return `Welcome to the Cosmic Restaurant, ${name}!`;
}

function finalGreet(guestName) {
  const message = welcomeGuest(guestName);
  console.log(message + ' Your table is ready.');
}

finalGreet(undefined);
