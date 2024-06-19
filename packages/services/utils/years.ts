const currentYear = new Date().getFullYear();

const years = Array(currentYear - 1900 + 1)
  .fill(0)
  .map((_, index) => (currentYear - index).toString());

const yearsOptions = years.map((year) => ({
  value: String(year),
  label: String(year),
}));

export { currentYear, years, yearsOptions };
