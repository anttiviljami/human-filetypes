import { FileKind } from './data';
import { fromExtension, getExtensions } from './ext';

describe('extension', () => {
  describe('fromExtension', () => {
    describe('uppercase extensions', () => {
      test.each([
        ['asd', 'ASD'],
        ['.asd', '.ASD'],
        ['jpg', 'JPG'],
        ['mp4', 'MP4'],
      ])('fromExtension("%s") should be equal fromExtension("%s")', function (lowerCase, upperCase) {
        expect(fromExtension(lowerCase)).toBe(fromExtension(upperCase));
      });
    });

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
        ['tsv', 'spreadsheet'],
        ['xls', 'spreadsheet'],
        ['xlsx', 'spreadsheet'],
        ['ods', 'spreadsheet'],
        ['xlsm', 'spreadsheet'],
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
        ['.', 'unknown'],
      ])('%s should return %s', function (input, expected) {
        expect(fromExtension(input as string)).toBe(expected);
      });
    });
  });

  describe('getExtensions', () => {
    describe('image', () => {
      test.each([
        [
          FileKind.Image,
          ['.bmp', '.gif', '.ico', '.jpeg', '.jpg', '.png', '.svg', '.svg', '.tif', '.vsd', '.webp', '.heic', '.heif'],
        ],
      ])('%s should return %s', function (input, expected) {
        expect(getExtensions(input)).toEqual(expected);
      });
    });

    describe('video', () => {
      test.each([[FileKind.Video, ['.avi', '.mp4', '.mpeg', '.ogv', '.ogx', '.ts', '.webm', '.3gp', '.3g2']]])(
        '%s should return %s',
        function (input, expected) {
          expect(getExtensions(input)).toEqual(expected);
        },
      );
    });

    describe('audio', () => {
      test.each([
        [
          FileKind.Audio,
          [
            '.aac',
            '.cda',
            '.mid',
            '.midi',
            '.mid',
            '.midi',
            '.mp3',
            '.oga',
            '.ogg',
            '.opus',
            '.wav',
            '.weba',
            '.3gp',
            '.3g2',
          ],
        ],
      ])('%s should return %s', function (input, expected) {
        expect(getExtensions(input)).toEqual(expected);
      });
    });

    describe('archive', () => {
      test.each([[FileKind.Archive, ['.arc', '.bz', '.bz2', '.gz', '.gzip', '.rar', '.tar', '.zip', '.7z']]])(
        '%s should return %s',
        function (input, expected) {
          expect(getExtensions(input)).toEqual(expected);
        },
      );
    });

    describe('document', () => {
      test.each([[FileKind.Document, ['.abw', '.azw', '.doc', '.docx', '.epub', '.odt', '.pdf', '.rtf']]])(
        '%s should return %s',
        function (input, expected) {
          expect(getExtensions(input)).toEqual(expected);
        },
      );
    });

    describe('spreadsheet', () => {
      test.each([[FileKind.Spreadsheet, ['.csv', '.tsv', '.ods', '.xls', '.xlsm', '.xlsx']]])(
        '%s should return %s',
        function (input, expected) {
          expect(getExtensions(input)).toEqual(expected);
        },
      );
    });

    describe('presentation', () => {
      test.each([[FileKind.Presentation, ['.odp', '.ppt', '.pptx']]])(
        '%s should return %s',
        function (input, expected) {
          expect(getExtensions(input)).toEqual(expected);
        },
      );
    });

    describe('font', () => {
      test.each([[FileKind.Font, ['.eot', '.otf', '.ttf', '.woff', '.woff2']]])(
        '%s should return %s',
        function (input, expected) {
          expect(getExtensions(input)).toEqual(expected);
        },
      );
    });

    describe('text', () => {
      test.each([
        [
          FileKind.Text,
          [
            '.csh',
            '.css',
            '.htm',
            '.html',
            '.ics',
            '.js',
            '.mjs',
            '.jsx',
            '.ts',
            '.tsx',
            '.json',
            '.jsonld',
            '.php',
            '.sh',
            '.txt',
            '.xhtml',
            '.xml',
            '.xml',
          ],
        ],
      ])('%s should return %s', function (input, expected) {
        expect(getExtensions(input)).toEqual(expected);
      });
    });

    describe('application', () => {
      test.each([[FileKind.Application, ['.bin', '.exe', '.dll', '.so', '.dmg', '.jar', '.mpkg', '.swf']]])(
        '%s should return %s',
        function (input, expected) {
          expect(getExtensions(input)).toEqual(expected);
        },
      );
    });
  });
});
