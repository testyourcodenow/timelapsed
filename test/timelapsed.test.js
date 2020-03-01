const TimeLapsed = require('../index');

test('just now', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now());
  expect(duration).toBe('just now');
});

test('just now twitter notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now(), notation='twitter');
  expect(duration).toBe('now');
});

test('just now mid notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now(), notation='mid');
  expect(duration).toBe('just now');
});

test('just now long notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now(), notation='lng');
  expect(duration).toBe('just now');
});

test('1 minute ago', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60);
  expect(duration).toBe('1 minute ago');
});

test('1 mn ago twitter notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60, notation='twitter');
  expect(duration).toBe('1m');
});

test('1 min ago mid notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60, notation='mid');
  expect(duration).toBe('1min');
});

test('1 minute ago long notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60, notation='lng');
  expect(duration).toBe('1 minute ago');
});

test('17 minutes ago', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 17000 * 60);
  expect(duration).toBe('17 minutes ago');
});

test('42 minutes ago', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 42000 * 60);
  expect(duration).toBe('42 minutes ago');
});

test('1 hour ago', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60 * 60);
  expect(duration).toBe('1 hour ago');
});

test('19 hours ago', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 19000 * 60 * 60);
  expect(duration).toBe('19 hours ago');
});

test('1 day ago', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60 * 60 * 24);
  expect(duration).toBe('yesterday');
});

test('6 days ago', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 6000 * 60 * 60 * 24);
  expect(duration).toBe('6 days ago');
});

test('1 week ago', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60 * 60 * 24 * 7);
  expect(duration).toBe('1 week ago');
});

test('3 weeks ago', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 3000 * 60 * 60 * 24 * 7);
  expect(duration).toBe('3 weeks ago');
});

