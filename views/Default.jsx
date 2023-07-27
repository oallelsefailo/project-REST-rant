const React = require("react");

function Def(html) {
  const currentYear = new Date().getFullYear();
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
      <footer className="d-flex justify-content-end align-items-end fixed-bottom">
        <span>Author: Brandon &copy; 2020-{currentYear}</span>
      </footer>
    </html>
  );
}

module.exports = Def;
