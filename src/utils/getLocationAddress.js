import { GOOGLE_API_KEY } from "@env";

export default async function getLocationAddress(
  latitude,
  longitude,
  characters
) {
  let formattedAddress = "";

  await fetch(
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      latitude +
      "," +
      longitude +
      "&key=" +
      GOOGLE_API_KEY
  )
    .then((response) => response.json())
    .then((responseJson) => {
      formattedAddress =
        responseJson.results[0].formatted_address.slice(0, characters) + "...";
    });

  return formattedAddress;
}
