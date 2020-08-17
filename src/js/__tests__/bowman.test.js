import Bowman from '../bowman';

test('attack of bowman should be 25', () => {
  const unit = new Bowman('warrior');
  expect(unit.attack).toEqual(25);
});

test('defence of bowman should be 25', () => {
  const unit = new Bowman('warrior');
  expect(unit.defence).toEqual(25);
});
