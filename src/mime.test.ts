import { fromMime } from './mime';

describe('fromMime', () => {
  describe('images', () => {
    test.each([
      ['image/png', 'image'],
      ['image/jpeg', 'image'],
      ['image/svg', 'image'],
    ])('%s should return %s', function (input, expected) {
      expect(fromMime(input)).toBe(expected);
    });
  });
});
