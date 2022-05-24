const ACCESS_TOKEN_MAP_BOX = `access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`;

export const fetchLocal = (local) => {
  return fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}%20.json?limit=1&types=postcode%2Caddress&${ACCESS_TOKEN_MAP_BOX}`
  );
};
