const URL = 'https://platzi-avo.vercel.app/api/avo';

const DOMAIN = 'https://platzi-avo.vercel.app';

function formatPrice(price) {
  const newPrice = window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
  return newPrice;
}

const app = document.querySelector('div#app');
app.className = 'mt-10 grid grid-cols-2 gap-2';

window
  .fetch(URL)
  .then((resp) => resp.json())
  .then((respJson) => {
    const items = [];
    respJson.data.forEach((item) => {
      const image = document.createElement('img');
      image.src = `${DOMAIN}/${item.image}`;
      image.className = 'h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6';

      const title = document.createElement('h2');
      title.textContent = item.name;
      title.className = 'text-lg';

      const price = document.createElement('div');
      price.textContent = formatPrice(item.price);
      price.className = 'text-gray-600';

      const priceAndTitle = document.createElement('div');
      priceAndTitle.className = 'text-center md:text-left';
      priceAndTitle.append(title, price);

      const container = document.createElement('div');
      container.className = 'md:flex bg-white rounded-lg p-6 hover:bg-gray-300';

      container.append(image, priceAndTitle);
      items.push(container);
    });

    app.append(...items);
  });
