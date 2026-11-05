(async function () {
  const strip = document.getElementById('newsStrip');
  if (!strip || location.protocol === 'file:') return;
  function node(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  }
  try {
    const response = await fetch(new URL('news.json', document.baseURI), { cache: 'no-store' });
    if (!response.ok) throw new Error('News response ' + response.status);
    const items = await response.json();
    if (!Array.isArray(items)) throw new Error('Invalid news data');
    const fragment = document.createDocumentFragment();
    items.sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id));
    for (const item of items) {
      const url = new URL(item.url);
      if (!['https:', 'http:'].includes(url.protocol)) continue;
      const card = node('a', 'news-card');
      card.href = url.href;
      card.target = '_blank';
      card.rel = 'noopener';
      card.draggable = false;
      const image = node('div', 'news-image');
      const photo = node('img');
      photo.draggable = false;
      photo.alt = item.title;
      photo.loading = 'lazy';
      photo.decoding = 'async';
      photo.width = 900;
      photo.height = 900;
      const imageUrl = new URL(item.image, document.baseURI);
      imageUrl.searchParams.set('v', '20261008');
      photo.src = imageUrl.href;
      photo.style.cssText = 'display:block;width:100%;height:100%;object-fit:cover';
      image.append(photo);
      const meta = node('div', 'news-meta-row');
      const time = node('time', '', item.date.split('-').reverse().join('.'));
      time.dateTime = item.date;
      meta.append(node('span', 'news-category', item.category), time);
      card.append(image, meta, node('h3', '', item.title), node('p', '', item.description), node('span', 'news-more', 'Подробнее ↗'));
      fragment.append(card);
    }
    strip.replaceChildren(fragment);
  } catch (error) {
    console.warn('News feed unavailable; keeping existing cards.', error);
  }
})();
