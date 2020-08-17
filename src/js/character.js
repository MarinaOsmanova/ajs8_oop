export default class Character {
  constructor(name, type) {
    const allowTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (name.length < 2) {
      throw new Error('Слишком короткое имя');
    }
    if (name.length > 10) {
      throw new Error('Слишком длинное имя');
    }
    if (allowTypes.indexOf(type) === -1) {
      throw new Error('Недопустимый тип персонажа');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack += 0.2 * this.attack;
    this.defence += 0.2 * this.defence;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
