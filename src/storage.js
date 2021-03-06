const searchLocation = localStorage.getItem('searched')
  ? JSON.parse(localStorage.getItem('searched'))
  : [];
localStorage.setItem('searched', JSON.stringify(searchLocation));
JSON.parse(localStorage.getItem('searched'));

const unit = localStorage.getItem('unit')
  ? JSON.parse(localStorage.getItem('unit'))
  : [];

localStorage.setItem('unit', JSON.stringify(unit));
JSON.parse(localStorage.getItem('unit'));

const desc = localStorage.getItem('desc')
  ? JSON.parse(localStorage.getItem('desc'))
  : [];

localStorage.setItem('desc', JSON.stringify(desc));
JSON.parse(localStorage.getItem('desc'));

const clear = () => {
  if (sessionStorage.length === 0) {
    localStorage.clear();
  }
};

clear();
const defaultLocal = () => {
  if (unit.length < 1) {
    unit.push('celsius');
    searchLocation.push('Nairobi');
    desc.push('clouds');
    localStorage.setItem('desc', JSON.stringify(desc));
    localStorage.setItem('unit', JSON.stringify(unit));
    localStorage.setItem('searched', JSON.stringify(searchLocation));
  }
};
defaultLocal();
sessionStorage.setItem('greetings', 'Hello there!');
const addAndDisplay = (() => {
  document.getElementById('formsearch').onsubmit = () => {
    const text = document.getElementById('textsearch').value;
    searchLocation.push(text);
    if (document.getElementById('inlineRadio1').checked) {
      const celsius = document.getElementById('inlineRadio1').value;
      unit.push(celsius);
      localStorage.setItem('unit', JSON.stringify(unit));
    } else if (document.getElementById('inlineRadio2').checked) {
      const fahrenheit = document.getElementById('inlineRadio2').value;
      unit.push(fahrenheit);
      localStorage.setItem('unit', JSON.stringify(unit));
    }
    localStorage.setItem('searched', JSON.stringify(searchLocation));
  };
  return {
    defaultLocal,
  };
})();
export default addAndDisplay;
