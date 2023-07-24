const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1 className="text-center">404: PAGE NOT FOUND</h1>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <img src="/images/kitty-404.jpg" alt="Kitty 404 Error" />
          <p className="text-center">Oops, sorry, we can't find this page!</p>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
