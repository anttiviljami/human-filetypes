import { FileKind } from './data';
import { fromExtension, getExtensions } from './ext';

describe('extension', () => {
  const getTestCases = (extensions: string[], type: string) => {
    const testCases: Array<[string, string]> = [];
    extensions.forEach((ext) => {
      testCases.push([ext, type]);
      testCases.push([ext?.toUpperCase(), type]);
    });
    return testCases;
  };

  describe('fromExtension', () => {
    describe('image', () => {
      const extensions = ['png', 'jpg', 'jpeg', 'svg', 'webp', 'gif'];
      const testCases = getTestCases(extensions, 'image');
      test.each(testCases)('%s should return %s', function (input, expected) {
        expect(fromExtension(input)).toBe(expected);
        expect(fromExtension(`.${input}`)).toBe(expected);
      });
    });

    describe('video', () => {
      const extensions = ['mp4', 'avi', 'ogv', 'ogx'];
      const testCases = getTestCases(extensions, 'video');
      test.each(testCases)('%s should return %s', function (input, expected) {
        expect(fromExtension(input)).toBe(expected);
        expect(fromExtension(`.${input}`)).toBe(expected);
      });
    });

    describe('audio', () => {
      const extensions = ['wav', 'mp3', 'mid', 'oga', 'ogg'];
      const testCases = getTestCases(extensions, 'audio');
      test.each(testCases)('%s should return %s', function (input, expected) {
        expect(fromExtension(input)).toBe(expected);
        expect(fromExtension(`.${input}`)).toBe(expected);
      });
    });

    describe('archive', () => {
      const extensions = ['zip', 'gzip', 'gz', 'tar.gz', 'tar', '7z'];
      const testCases = getTestCases(extensions, 'archive');
      test.each(testCases)('%s should return %s', function (input, expected) {
        expect(fromExtension(input)).toBe(expected);
        expect(fromExtension(`.${input}`)).toBe(expected);
      });
    });

    describe('document', () => {
      const extensions = ['pdf', 'doc', 'docx', 'odt', 'rtf'];
      const testCases = getTestCases(extensions, 'document');
      test.each(testCases)('%s should return %s', function (input, expected) {
        expect(fromExtension(input)).toBe(expected);
        expect(fromExtension(`.${input}`)).toBe(expected);
      });
    });

    describe('spreadsheet', () => {
      const extensions = ['csv', 'tsv', 'xls', 'xlsx', 'ods'];
      const testCases = getTestCases(extensions, 'spreadsheet');
      test.each(testCases)('%s should return %s', function (input, expected) {
        expect(fromExtension(input)).toBe(expected);
        expect(fromExtension(`.${input}`)).toBe(expected);
      });
    });

    describe('presentation', () => {
      const extensions = ['ppt', 'pptx', 'odp'];
      const testCases = getTestCases(extensions, 'presentation');
      test.each(testCases)('%s should return %s', function (input, expected) {
        expect(fromExtension(input)).toBe(expected);
        expect(fromExtension(`.${input}`)).toBe(expected);
      });
    });

    describe('font', () => {
      const extensions = ['otf', 'ttf', 'woff', 'woff2'];
      const testCases = getTestCases(extensions, 'font');
      test.each(testCases)('%s should return %s', function (input, expected) {
        expect(fromExtension(input)).toBe(expected);
        expect(fromExtension(`.${input}`)).toBe(expected);
      });
    });

    describe('text', () => {
      const extensions = ['txt', 'css', 'html', 'js', 'jsx', 'json'];
      const testCases = getTestCases(extensions, 'text');
      test.each(testCases)('%s should return %s', function (input, expected) {
        expect(fromExtension(input)).toBe(expected);
        expect(fromExtension(`.${input}`)).toBe(expected);
      });
    });

    describe('application', () => {
      const extensions = ['swf', 'exe', 'dmg', 'jar'];
      const testCases = getTestCases(extensions, 'application');
      test.each(testCases)('%s should return %s', function (input, expected) {
        expect(fromExtension(input)).toBe(expected);
        expect(fromExtension(`.${input}`)).toBe(expected);
      });
    });

    describe('unknown', () => {
      const extensions = ['asd', '.asd', '', null, undefined, '.'];
      const testCases = getTestCases(extensions as string[], 'unknown');
      test.each(testCases)('%s should return %s', function (input, expected) {
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
      test.each([[FileKind.Spreadsheet, ['.csv', '.tsv', '.ods', '.xls', '.xlsx']]])(
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
