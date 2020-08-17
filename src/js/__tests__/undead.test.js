import Undead from '../undead';

test('attack of undead should be 25', () => {
  const unit = new Undead('warrior');
  expect(unit.attack).toEqual(25);
});

test('defence of undead should be 25', () => {
  const unit = new Undead('warrior');
  expect(unit.defence).toEqual(25);
});
