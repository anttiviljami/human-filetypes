import { FileKind } from './data';
import { fromMime, getMimeTypes } from './mime';

describe('mime', () => {
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

  describe('getMimeTypes', () => {
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
        expect(getMimeTypes(input)).toEqual(expected);
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
        expect(getMimeTypes(input)).toEqual(expected);
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
        expect(getMimeTypes(input)).toEqual(expected);
      });
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
        expect(getMimeTypes(input)).toEqual(expected);
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
        expect(getMimeTypes(input)).toEqual(expected);
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
        expect(getMimeTypes(input)).toEqual(expected);
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
        expect(getMimeTypes(input)).toEqual(expected);
      });
    });

    describe('font', () => {
      test.each([
        [FileKind.Font, ['application/vnd.ms-fontobject', 'font/otf', 'font/ttf', 'font/woff', 'font/woff2']],
      ])('%s should return %s', function (input, expected) {
        expect(getMimeTypes(input)).toEqual(expected);
      });
    });

    describe('text', () => {
      test.each([
        [
          FileKind.Text,
          [
            'application/x-csh',
            'text/css',
            'text/html',
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
        expect(getMimeTypes(input)).toEqual(expected);
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
        expect(getMimeTypes(input)).toEqual(expected);
      });
    });

    describe('unknown', () => {
      test.each([[FileKind.Unknown, []]])('%s should return %s', function (input, expected) {
        expect(getMimeTypes(input)).toEqual(expected);
      });
    });
  });
});
