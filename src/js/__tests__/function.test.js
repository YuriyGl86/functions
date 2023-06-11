import showHealthColor from '../app';

test.each([
  ['health', 51, 'green'],
  ['wounded', 50, 'yellow'],
  ['critical', 1, 'red'],
  ['dead', 0, undefined],
])(
  ('should return color for %s condition with %i level'),
  (_, level, expectedColor) => {
    const result = showHealthColor({ health: level });
    expect(result).toBe(expectedColor);
  },
);
