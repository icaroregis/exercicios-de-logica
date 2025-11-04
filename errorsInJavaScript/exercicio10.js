let missionStatus = 'success';

try {
  if (missionStatus !== 'success') {
    throw new Error('Mission encountered a critical failure.');
  }
  console.log('Mission proceeding...');
} catch (error) {
  console.log('Mission failed:', error.message);
} finally {
  console.log('Cleaning up resources...');
}
