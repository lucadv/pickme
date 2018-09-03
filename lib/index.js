class Pickme {

  constructor(elements = []) {
    const allowedTypes = ['number', 'string', 'boolean'];
    elements.forEach((el) => {
      if (!allowedTypes.includes(typeof el)) {
        throw new Error(`Elements of type ${typeof el} are not supported, supported types are ${allowedTypes.join(', ')}`);
      }  
    });
    this.elements = elements;
  }

  pickOne() {
    const max = this.elements.length - 1;
    const pos = Math.floor(Math.random() * (max + 1));
    return this.elements[pos] || null;
  }
}

module.exports = Pickme;
