import Magician from '../magician';

test('attack of magician should be 10', () => {
  const unit = new Magician('warrior');
  expect(unit.attack).toEqual(10);
});

test('defence of magician should be 40', () => {
  const unit = new Magician('warrior');
  expect(unit.defence).toEqual(40);
});
