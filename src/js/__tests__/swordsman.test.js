import Swordsman from '../swordsman';

test('attack of swordsman should be 40', () => {
  const unit = new Swordsman('warrior');
  expect(unit.attack).toEqual(40);
});

test('defence of swordsman should be 10', () => {
  const unit = new Swordsman('warrior');
  expect(unit.defence).toEqual(10);
});
