const React = require("react");

function Def(html) {
  return (
    <html>
      <head>
        <title>REST-Rant</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/places">Places</a>
          </li>
          <li>
            <a href="/places/new">Add Place</a>
          </li>
        </ul>
      </nav>

      <body>{html.children}</body>
    </html>
  );
}

module.exports = Def;
