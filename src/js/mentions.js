const mentionsUrl =
  "https://webmention.io/api/mentions?page=0&per-page=20&sort-by=published&target=https://sophie-sotb22.neocities.org/guestbook/";

async function fetchWebmentions() {
  const rsp = await fetch(mentionsUrl);
  const mentions = await rsp.json();
  const links = mentions.links;
}
