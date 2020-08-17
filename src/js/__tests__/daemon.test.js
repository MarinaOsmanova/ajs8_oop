import Daemon from '../daemon';

test('attack of daemon should be 10', () => {
  const unit = new Daemon('warrior');
  expect(unit.attack).toEqual(10);
});

test('defence of daemon should be 40', () => {
  const unit = new Daemon('warrior');
  expect(unit.defence).toEqual(40);
});
