import { fromExtension } from './ext';

describe('fromExtension', () => {
  describe('image', () => {
    test.each([
      ['png', 'image'],
      ['jpg', 'image'],
      ['jpeg', 'image'],
      ['svg', 'image'],
      ['webp', 'image'],
      ['gif', 'image'],
    ])('%s should return %s', function (input, expected) {
      expect(fromExtension(input)).toBe(expected);
      expect(fromExtension(`.${input}`)).toBe(expected);
    });
  });

  describe('video', () => {
    test.each([
      ['mp4', 'video'],
      ['avi', 'video'],
      ['ogv', 'video'],
      ['ogx', 'video'],
    ])('%s should return %s', function (input, expected) {
      expect(fromExtension(input)).toBe(expected);
      expect(fromExtension(`.${input}`)).toBe(expected);
    });
  });

  describe('audio', () => {
    test.each([
      ['wav', 'audio'],
      ['mp3', 'audio'],
      ['mid', 'audio'],
      ['oga', 'audio'],
      ['ogg', 'audio'],
    ])('%s should return %s', function (input, expected) {
      expect(fromExtension(input)).toBe(expected);
      expect(fromExtension(`.${input}`)).toBe(expected);
    });
  });

  describe('archive', () => {
    test.each([
      ['zip', 'archive'],
      ['gzip', 'archive'],
      ['gz', 'archive'],
      ['tar.gz', 'archive'],
      ['tar', 'archive'],
      ['7z', 'archive'],
    ])('%s should return %s', function (input, expected) {
      expect(fromExtension(input)).toBe(expected);
      expect(fromExtension(`.${input}`)).toBe(expected);
    });
  });

  describe('document', () => {
    test.each([
      ['pdf', 'document'],
      ['doc', 'document'],
      ['docx', 'document'],
      ['odt', 'document'],
      ['rtf', 'document'],
    ])('%s should return %s', function (input, expected) {
      expect(fromExtension(input)).toBe(expected);
      expect(fromExtension(`.${input}`)).toBe(expected);
    });
  });

  describe('spreadsheet', () => {
    test.each([
      ['csv', 'spreadsheet'],
      ['xls', 'spreadsheet'],
      ['xlsx', 'spreadsheet'],
      ['ods', 'spreadsheet'],
    ])('%s should return %s', function (input, expected) {
      expect(fromExtension(input)).toBe(expected);
      expect(fromExtension(`.${input}`)).toBe(expected);
    });
  });

  describe('presentation', () => {
    test.each([
      ['ppt', 'presentation'],
      ['pptx', 'presentation'],
      ['odp', 'presentation'],
    ])('%s should return %s', function (input, expected) {
      expect(fromExtension(input)).toBe(expected);
      expect(fromExtension(`.${input}`)).toBe(expected);
    });
  });

  describe('font', () => {
    test.each([
      ['otf', 'font'],
      ['ttf', 'font'],
      ['woff', 'font'],
      ['woff2', 'font'],
    ])('%s should return %s', function (input, expected) {
      expect(fromExtension(input)).toBe(expected);
      expect(fromExtension(`.${input}`)).toBe(expected);
    });
  });

  describe('text', () => {
    test.each([
      ['txt', 'text'],
      ['css', 'text'],
      ['html', 'text'],
      ['js', 'text'],
      ['jsx', 'text'],
      ['json', 'text'],
    ])('%s should return %s', function (input, expected) {
      expect(fromExtension(input)).toBe(expected);
      expect(fromExtension(`.${input}`)).toBe(expected);
    });
  });

  describe('application', () => {
    test.each([
      ['swf', 'application'],
      ['exe', 'application'],
      ['dmg', 'application'],
      ['jar', 'application'],
    ])('%s should return %s', function (input, expected) {
      expect(fromExtension(input)).toBe(expected);
      expect(fromExtension(`.${input}`)).toBe(expected);
    });
  });

  describe('unknown', () => {
    test.each([
      ['asd', 'unknown'],
      ['.asd', 'unknown'],
      ['', 'unknown'],
      [null, 'unknown'],
      [undefined, 'unknown'],
    ])('%s should return %s', function (input, expected) {
      expect(fromExtension(input as string)).toBe(expected);
    });
  });
});
