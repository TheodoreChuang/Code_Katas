function nbYear(p0, percent, migration, minimumPopulation) {
  let numOfYears = 0;
  let currentPopulation = p0;

  while (currentPopulation < minimumPopulation) {
    currentPopulation =
      currentPopulation + currentPopulation * percent * 0.01 + migration;
    numOfYears++;
  }
  return numOfYears;
}

module.exports = nbYear;
