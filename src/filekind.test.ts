import { FileKind } from './data';
import { fromFileKind } from './filekind';

describe('fromFileKind', () => {
  describe('image', () => {
    test.each([
      [
        FileKind.Image,
        [
          'image/bmp',
          'image/gif',
          'image/vnd.microsoft.icon',
          'image/jpeg',
          'image/png',
          'image/svg+xml',
          'image/svg',
          'image/tiff',
          'application/vnd.visio',
          'image/webp',
          'image/heic',
        ],
      ],
    ])('%s should return %s', function (input, expected) {
      expect(fromFileKind(input)).toEqual(expected);
    });
  });

  describe('video', () => {
    test.each([
      [
        FileKind.Video,
        [
          'video/x-msvideo',
          'video/mp4',
          'video/mpeg',
          'video/ogg',
          'application/ogg',
          'video/mp2t',
          'video/webm',
          'video/3gpp',
          'video/3gpp2',
        ],
      ],
    ])('%s should return %s', function (input, expected) {
      expect(fromFileKind(input)).toEqual(expected);
    });
  });

  describe('audio', () => {
    test.each([
      [
        FileKind.Audio,
        [
          'audio/aac',
          'application/x-cdf',
          'audio/midi',
          'audio/x-midi',
          'audio/mpeg',
          'audio/ogg',
          'audio/opus',
          'audio/wav',
          'audio/webm',
          'audio/3gpp',
          'audio/3gpp2',
        ],
      ],
    ])('%s should return %s', function (input, expected) {
      expect(fromFileKind(input)).toEqual(expected);
    });
  });

  describe('font', () => {
    test.each([[FileKind.Font, ['application/vnd.ms-fontobject', 'font/otf', 'font/ttf', 'font/woff', 'font/woff2']]])(
      '%s should return %s',
      function (input, expected) {
        expect(fromFileKind(input)).toEqual(expected);
      },
    );
  });

  describe('archive', () => {
    test.each([
      [
        FileKind.Archive,
        [
          'application/x-freearc',
          'application/x-bzip',
          'application/x-bzip2',
          'application/gzip',
          'application/vnd.rar',
          'application/x-tar',
          'application/zip',
          'application/x-7z-compressed',
        ],
      ],
    ])('%s should return %s', function (input, expected) {
      expect(fromFileKind(input)).toEqual(expected);
    });
  });

  describe('presentation', () => {
    test.each([
      [
        FileKind.Presentation,
        [
          'application/vnd.oasis.opendocument.presentation',
          'application/vnd.ms-powerpoint',
          'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        ],
      ],
    ])('%s should return %s', function (input, expected) {
      expect(fromFileKind(input)).toEqual(expected);
    });
  });

  describe('text', () => {
    test.each([
      [
        FileKind.Text,
        [
          'application/x-csh',
          'text/css',
          'application/html',
          'text/calendar',
          'text/javascript',
          'application/json',
          'application/ld+json',
          'application/x-httpd-php',
          'application/x-sh',
          'text/plain',
          'application/xhtml+xml',
          'application/xml',
          'text/xml',
        ],
      ],
    ])('%s should return %s', function (input, expected) {
      expect(fromFileKind(input)).toEqual(expected);
    });
  });

  describe('spreadsheet', () => {
    test.each([
      [
        FileKind.Spreadsheet,
        [
          'text/csv',
          'text/tsv',
          'application/vnd.oasis.opendocument.spreadsheet',
          'application/vnd.ms-excel',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ],
      ],
    ])('%s should return %s', function (input, expected) {
      expect(fromFileKind(input)).toEqual(expected);
    });
  });

  describe('document', () => {
    test.each([
      [
        FileKind.Document,
        [
          'application/x-abiword',
          'application/vnd.amazon.ebook',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'application/epub+zip',
          'application/vnd.oasis.opendocument.text',
          'application/pdf',
          'application/rtf',
        ],
      ],
    ])('%s should return %s', function (input, expected) {
      expect(fromFileKind(input)).toEqual(expected);
    });
  });

  describe('application', () => {
    test.each([
      [
        FileKind.Application,
        [
          'application/octet-stream',
          'application/java-archive',
          'application/vnd.apple.installer+xml',
          'application/x-shockwave-flash',
        ],
      ],
    ])('%s should return %s', function (input, expected) {
      expect(fromFileKind(input)).toEqual(expected);
    });
  });
});
