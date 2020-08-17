import Zombie from '../zombie';

test('attack of zombie should be 40', () => {
  const unit = new Zombie('warrior');
  expect(unit.attack).toEqual(40);
});

test('defence of zombie should be 10', () => {
  const unit = new Zombie('warrior');
  expect(unit.defence).toEqual(10);
});
