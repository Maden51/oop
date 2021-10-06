export default class Character {
  static types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  constructor(name, type, attack, defence) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть от 2 до 10 символов');
    }
    if (!(Character.types.includes(type))) {
      throw new Error('неверный класс');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}
