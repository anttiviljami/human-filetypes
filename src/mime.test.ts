import { fromMime } from './mime';

describe('fromMime', () => {
  describe('image', () => {
    test.each([
      ['image/png', 'image'],
      ['image/jpg', 'image'],
      ['image/jpeg', 'image'],
      ['image/svg', 'image'],
      ['image/webp', 'image'],
      ['image/gif', 'image'],
    ])('%s should return %s', function (input, expected) {
      expect(fromMime(input)).toBe(expected);
    });
  });

  describe('video', () => {
    test.each([
      ['video/mp4', 'video'],
      ['video/webm', 'video'],
      ['video/quicktime', 'video'],
      ['video/x-msvideo', 'video'],
      ['video/mpeg', 'video'],
      ['video/ogg', 'video'],
    ])('%s should return %s', function (input, expected) {
      expect(fromMime(input)).toBe(expected);
    });
  });

  describe('audio', () => {
    test.each([
      ['audio/wav', 'audio'],
      ['audio/mpeg', 'audio'],
      ['audio/midi', 'audio'],
      ['audio/ogg', 'audio'],
      ['audio/webm', 'audio'],
    ])('%s should return %s', function (input, expected) {
      expect(fromMime(input)).toBe(expected);
    });
  });

  describe('archive', () => {
    test.each([
      ['application/zip', 'archive'],
      ['application/gzip', 'archive'],
      ['application/vnd.rar', 'archive'],
      ['application/x-tar', 'archive'],
      ['application/x-7z-compressed', 'archive'],
    ])('%s should return %s', function (input, expected) {
      expect(fromMime(input)).toBe(expected);
    });
  });

  describe('document', () => {
    test.each([
      ['application/pdf', 'document'],
      ['application/msword', 'document'],
      ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'document'],
      ['application/vnd.oasis.opendocument.text', 'document'],
      ['application/rtf', 'document'],
    ])('%s should return %s', function (input, expected) {
      expect(fromMime(input)).toBe(expected);
    });
  });

  describe('spreadsheet', () => {
    test.each([
      ['text/csv', 'spreadsheet'],
      ['application/vnd.ms-excel', 'spreadsheet'],
      ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'spreadsheet'],
      ['application/vnd.oasis.opendocument.spreadsheet', 'spreadsheet'],
    ])('%s should return %s', function (input, expected) {
      expect(fromMime(input)).toBe(expected);
    });
  });

  describe('presentation', () => {
    test.each([
      ['application/vnd.ms-powerpoint', 'presentation'],
      ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'presentation'],
      ['application/vnd.oasis.opendocument.presentation', 'presentation'],
    ])('%s should return %s', function (input, expected) {
      expect(fromMime(input)).toBe(expected);
    });
  });

  describe('font', () => {
    test.each([
      ['font/otf', 'font'],
      ['font/ttf', 'font'],
      ['font/woff', 'font'],
      ['font/woff2', 'font'],
    ])('%s should return %s', function (input, expected) {
      expect(fromMime(input)).toBe(expected);
    });
  });

  describe('text', () => {
    test.each([
      ['text/plain', 'text'],
      ['text/javascript', 'text'],
      ['application/json', 'text'],
    ])('%s should return %s', function (input, expected) {
      expect(fromMime(input)).toBe(expected);
    });
  });

  describe('application', () => {
    test.each([
      ['application/octet-stream', 'application'],
      ['application/java-archive', 'application'],
      ['application/x-shockwave-flash', 'application'],
    ])('%s should return %s', function (input, expected) {
      expect(fromMime(input)).toBe(expected);
    });
  });

  describe('unknown', () => {
    test.each([
      ['application/x-thing', 'unknown'],
      ['not-a-mime', 'unknown'],
      ['', 'unknown'],
      [null, 'unknown'],
      [undefined, 'unknown'],
    ])('%s should return %s', function (input, expected) {
      expect(fromMime(input as string)).toBe(expected);
    });
  });
});
