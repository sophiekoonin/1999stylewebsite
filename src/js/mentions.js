const mentionsUrl =
  "https://webmention.io/api/mentions.jf2?target=https://sophieswebsite1999.neocities.org/guestbook/";

/*
       "type": "entry",
      "author": {
        "type": "card",
        "name": "Sophie",
        "photo": "https://webmention.io/avatar/files.mastodon.social/bc9982878ca1c39bd4b7bcf9f5cccae37a2235005dc7b11bcadf7b45bca05064.jpg",
        "url": "https://social.lol/@sophie"
      },
      "url": "https://social.lol/@sophie/110984085004344231",
      "published": "2023-08-31T11:52:22",
      "wm-received": "2023-08-31T11:52:31Z",
      "wm-id": 1711150,
      "wm-source": "https://brid.gy/comment/mastodon/@sophieswebmentiondemo@mastodon.social/110803776985994470/110984085030402384",
      "wm-target": "https://sophieswebsite1999.neocities.org/guestbook/",
      "wm-protocol": "webmention",
      "content": {
        "html": "<p><span class=\"h-card\"><a href=\"https://mastodon.social/@sophieswebmentiondemo\" class=\"u-url\">@<span>sophieswebmentiondemo</span></a></span> test</p>",
        "text": "@sophieswebmentiondemo test"
      },
      "mention-of": "https://sophieswebsite1999.neocities.org/guestbook/",
      "wm-property": "mention-of",
      "wm-private": false
    },
    */
async function fetchWebmentions() {
  const rsp = await fetch(mentionsUrl);
  const mentions = await rsp.json();
  const replies = mentions.children.filter(
    (mention) => mention["wm-property"] === "mention-of"
  );
  const likes = mentions.children.filter(
    (mention) => mention["wm-property"] === "like-of"
  );
  const listItems = replies.map((webmention) => {
    return `<li>
        <article class="webmention h-cite" id="webmention-${
          webmention["wm-id"]
        }">
          <div class="webmention-meta">
            <a class="webmention-author p-author h-card u-url" href="${
              webmention.url
            }" target="_blank" rel="noopener noreferrer">
              <img class="u-photo" src="${webmention.author.photo}" alt="${
      webmention.author.name
    }">
              <span class="p-name">${webmention.author.name}</span>
            </a>
            <time class="webmention-pubdate dt-published" datetime="${
              webmention.published
            }">${new Date(webmention.published).toDateString()}</time>
          </div>
          <div class="webmention__content p-content">
            ${webmention.content.text.replace("@sophieswebmentiondemo ", "")}
          </div>
      </article>
  </li>`;
  });
  if (listItems.length === 0) {
    document.getElementById("mentions-placeholder").innerHTML =
      "No mentions yet!";
  } else {
    document.getElementById("mentions-placeholder").classList.add("hidden");
    document.getElementById("mentions-list").classList.remove("hidden");
  }
  document.getElementById("mentions-likes").innerHTML = `${likes.length} like${
    likes.length === 1 ? "" : `s`
  }`;
  document.getElementById("mentions-list").innerHTML = listItems.join("");
  document.getElementById("mentions-likes-avatars").innerHTML = likes
    .map((like) => {
      return `<img class="u-photo" src="${like.author.photo}" alt="${like.author.name}" />`;
    })
    .join("");
}

fetchWebmentions();
