const MAX_DOT = 3;
const DELAY = 500;
let INIT = 0;

const pTyping = document.getElementById("p-typing");

const updateInnerHtml = () => {
  INIT > MAX_DOT && (INIT = 0);
  pTyping.innerHTML = ".".repeat(parseInt(INIT));
  INIT += 1;
};

setInterval(() => {
  try {
    updateInnerHtml();
  } catch (e) {}
}, DELAY);
