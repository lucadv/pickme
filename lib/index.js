const Hoek = require('hoek');

class RandomPicker {

  constructor(elements = []) {
    const allowedTypes = ['number', 'string', 'boolean'];
    elements.forEach(el => Hoek.assert(allowedTypes.includes(typeof el),
      `Elements of type ${typeof el} are not supported, supported types are ${allowedTypes.join(', ')}`));
    this.elements = elements;
  }

  pickOne() {
    const max = this.elements.length - 1;
    const pos = Math.floor(Math.random() * (max + 1));
    return this.elements[pos] || null;
  }
}

module.exports = RandomPicker;
