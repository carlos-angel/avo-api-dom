const URL = 'https://platzi-avo.vercel.app/api/avo';

window
  .fetch(URL)
  .then((resp) => resp.json())
  .then((respJson) => {
    const items = [];
    respJson.data.forEach((item) => {
      const image = document.createElement('img');
      const title = document.createElement('h2');
      const price = document.createElement('div');

      const container = document.createElement('div');

      container.append(image, title, price);
      items.push(container);
    });

    document.body.append(...items);
  });
