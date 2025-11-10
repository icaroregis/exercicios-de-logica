function checkSuitabilityForMission(crewMemberHealth) {
  if (crewMemberHealth !== 'fit') {
    throw new Error('The crew member is not ready for space adventure!');
  }
  console.log('Crew member is ready for the space adventure!');
}

try {
  checkSuitabilityForMission('unfit');
} catch (exception) {
  console.log('Space mission launch aborted:', exception.message);
}
