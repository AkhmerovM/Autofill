const express = require('express');
const React =   require('react');
const ReactDOM = require("react-dom");
const {App}  = require("./assetsSource/App");

const app = express();

app.use((req, res) => {
    const componentHTML = ReactDOM.renderToString(<App />);

    return res.end(renderHTML(componentHTML));
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

function renderHTML(componentHTML) {
    return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello React</title>
          <link rel="stylesheet" href="${assetUrl}/www/build/main.min.css">
      </head>
      <body>
        <div id="root">${componentHTML}</div>
        <script type="application/javascript" src="${assetUrl}/www/build/main.min.js"></script>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
});