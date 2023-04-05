const react = require("react");

function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copeyright @ {currYear}</p>
    </footer>
  );
}

export default Footer;
