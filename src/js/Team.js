export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    if (this.members.has(person)) {
      throw new Error('Персонаж уже присутсвует');
    } else { this.members.add(person); }
  }

  addAll(...persons) {
    persons.forEach((item) => this.members.add(item));
  }

  toArray() {
    const result = [];
    this.members.forEach((item) => result.push(item));
    return result;
  }

  [Symbol.iterator]() {
    let count = 0;
    const props = Array.from(this.members);
    return {
      next() {
        if (count < props.length) {
          count += 1;
          return { done: false, value: props[count] };
        } return { done: true };
      },
    };
  }
}
