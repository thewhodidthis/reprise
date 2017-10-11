'use strict';

function cutaway() {
  const body = document.body;
  const jack = document.createElement('pre');
  const papa = console.log;

  const echo = (text) => {
    if (jack.innerHTML !== '') {
      jack.innerHTML += '\n';
    }

    jack.innerHTML += text;
  };

  console.log = (...args) => {
    const text = args.map(m => (typeof m === 'object' ? JSON.stringify(m) : m.toString()));

    const main = text.shift().replace(/%[soOfid]/g, m => text.shift() || m);
    const rest = text.reduce((p, n) => `${p} ${n}`, '');

    echo(main + rest);
    papa(...args);
  };

  body.insertBefore(jack, body.firstChild);
}

module.exports = cutaway;
