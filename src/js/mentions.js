const mentionsUrl =
  "https://webmention.io/api/mentions?page=0&per-page=20&sort-by=published&target=https://sophieswebsite1999.neocities.org/guestbook/";

async function fetchWebmentions() {
  const rsp = await fetch(mentionsUrl);
  const mentions = await rsp.json();
  const links = mentions.links;
  const listItems = links.map(
    (webmention) =>
      `<li>
        <article class="webmention flow h-cite" id="webmention-${
          webmention.id
        }">
          <div class="webmention-meta">
            <a class="webmention-author p-author h-card u-url" href="${
              webmention.data.url
            }" target="_blank" rel="noopener noreferrer">
              <img class="u-photo" src="${webmention.data.author.photo}" alt="${
        webmention.data.author.name
      }">
              <span class="p-name">${webmention.data.author.name}</span>
            </a>
            <time class="webmention-pubdate dt-published" datetime="${
              webmention.data.published
            }">${new Date(webmention.data.published).toDateString()}</time>
          </div>
          <div class="webmention__content p-content">
            ${webmention.data.content}
          </div>
      </article>
  </li>`
  );
  document.getElementById("mentions-list").innerHTML = listItems.join("");
}

fetchWebmentions();
