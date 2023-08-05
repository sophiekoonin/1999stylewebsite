const EleventyFetch = require("@11ty/eleventy-fetch");

const MAX_COUNTER_LENGTH = 8;

async function fetchCounter() {
  const url = "https://sophies1999webpage.goatcounter.com/counter//.json";
  return EleventyFetch(url, {
    type: "json", // we’ll parse JSON for you
  });
}
module.exports = async function () {
  const { count_unique: count } = await fetchCounter();
  return count.toString().padStart(MAX_COUNTER_LENGTH, "0");
};
