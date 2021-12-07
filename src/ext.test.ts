import { fromExtension } from './ext';

describe('fromExtension', () => {
  describe('images', () => {
    test.each([
      ['png', 'image'],
      ['.png', 'image'],
      ['jpeg', 'image'],
      ['.jpeg', 'image'],
      ['svg', 'image'],
      ['.svg', 'image'],
    ])('%s should return %s', function (input, expected) {
      expect(fromExtension(input)).toBe(expected);
    });
  });
});
