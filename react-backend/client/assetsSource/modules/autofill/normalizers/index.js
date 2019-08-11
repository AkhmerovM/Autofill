function getNameCities(cities) {
    return Object.values(cities).map((city) => city.name);
}
export {getNameCities}