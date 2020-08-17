import Character from '../character';

test('short name should throw an exception', () => {
  expect(() => { new Character('I', 'Bowman'); }).toThrow('Слишком короткое имя');
});

test('long name should throw an exception', () => {
  expect(() => { new Character('MyNameIsVeryLong', 'Bowman'); }).toThrow('Слишком длинное имя');
});

test('invalid type must throw an exception', () => {
  expect(() => new Character('warrior', 'Warrior')).toThrow('Недопустимый тип персонажа');
});

test('unit name must match the passed name', () => {
  const warrior = new Character('warrior1', 'Swordsman');
  expect(warrior.name).toEqual('warrior1');
});

test('unit type must match the passed type', () => {
  const warrior = new Character('warrior1', 'Swordsman');
  expect(warrior.type).toEqual('Swordsman');
});

test('new unit health should be equal to 100', () => {
  const warrior = new Character('warrior1', 'Swordsman');
  expect(warrior.health).toEqual(100);
});

test('new unit level should be equal to 1', () => {
  const warrior = new Character('warrior1', 'Swordsman');
  expect(warrior.level).toEqual(1);
});

test('damage to the character must decrease health', () => {
  const warrior = new Character('warrior1', 'Swordsman');
  warrior.attack = 40;
  warrior.defence = 10;
  warrior.damage(50);
  const expected = 55; // 100 - 50 * (1 - 10/100)
  expect(warrior.health).toEqual(expected);
});

test('method levelUp should raise the level of a living unit', () => {
  const warrior = new Character('warrior1', 'Swordsman');
  warrior.levelUp();
  expect(warrior.level).toEqual(2);
});

test('method levelUp should increase attack by 20%', () => {
  const warrior = new Character('warrior1', 'Swordsman');
  warrior.attack = 40;
  warrior.defence = 10;
  warrior.levelUp();
  expect(warrior.attack).toEqual(48);
});

test('method levelUp should increase defence by 20%', () => {
  const warrior = new Character('warrior1', 'Swordsman');
  warrior.attack = 40;
  warrior.defence = 10;
  warrior.levelUp();
  expect(warrior.defence).toEqual(12);
});

test('method levelUp should increase health to 100%', () => {
  const warrior = new Character('warrior1', 'Swordsman');
  warrior.health = 20;
  warrior.levelUp();
  expect(warrior.health).toEqual(100);
});

test('damage health should not be less than zero', () => {
  const warrior = new Character('warrior1', 'Swordsman');
  warrior.defence = 10;
  warrior.damage(100000);
  expect(warrior.health).toEqual(0);
});

test('dead character levelUp should throw an exception', () => {
  const warrior = new Character('warrior1', 'Swordsman');
  warrior.defence = 10;
  warrior.damage(100000);
  expect(() => { warrior.levelUp(); }).toThrow('Нельзя повысить левел умершего');
});
