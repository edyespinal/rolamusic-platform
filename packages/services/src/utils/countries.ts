const countries: Record<string, string> = {
  ES: "España",
};

const countriesOptions = Object.entries(countries).map(([key, value]) => ({
  value: key,
  label: value,
}));

export { countries, countriesOptions };
