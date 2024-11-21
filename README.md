# human-filetypes

[![CI](https://github.com/anttiviljami/human-filetypes/workflows/CI/badge.svg)](https://github.com/anttiviljami/human-filetypes/actions?query=workflow%3ACI)
[![npm version](https://img.shields.io/npm/v/human-filetypes.svg)](https://www.npmjs.com/package/human-filetypes)
[![bundle size](https://img.shields.io/bundlephobia/minzip/human-filetypes?label=gzip%20bundle)](https://www.npmjs.com/package/human-filetypes)
[![License](http://img.shields.io/:license-mit-blue.svg)](https://github.com/anttiviljami/human-filetypes/blob/master/LICENSE)
[![Buy me a coffee](https://img.shields.io/badge/donate-buy%20me%20a%20coffee-orange)](https://buymeacoff.ee/anttiviljami)

Human-friendly taxonomy for file types. Zero dependencies.

List of mime types sourced from [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types).

## Usage

```
npm i human-filetypes
```

The module exports two main operations `fromMime()` and `fromExtension()`


```js
import { fromMime, fromExtension  } from 'human-filetypes'
```

### fromMime

`fromMime()` converts a MIME type identifier to a human-redable file kind.

```js
const assert = require('assert')

assert.equal(fromMime('image/png'), 'image')
assert.equal(fromMime('image/webp'), 'image')
assert.equal(fromMime('application/pdf'), 'document')
assert.equal(fromMime('application/msword'), 'document')
assert.equal(fromMime('image/jpeg'), 'image')
assert.equal(fromMime('video/mpeg'), 'video')
assert.equal(fromMime('video/webm'), 'video')
assert.equal(fromMime('text/javascript'), 'text')
assert.equal(fromMime('application/json'), 'text')
assert.equal(fromMime('text/csv'), 'spreadsheet')
assert.equal(fromMime('application/zip'), 'archive')
```

### fromExtension

`fromExtension()` converts a file extension or a filename to a human-redable file kind.

```js
assert.equal(fromExtension('.png'), 'image')
assert.equal(fromExtension('.webp'), 'image')
assert.equal(fromExtension('.gif'), 'image')
assert.equal(fromExtension('.pdf'), 'document')
assert.equal(fromExtension('.docx'), 'document')
assert.equal(fromExtension('.mp4'), 'video')
assert.equal(fromExtension('.webm'), 'video')
assert.equal(fromExtension('.json'), 'text')
assert.equal(fromExtension('.exe'), 'application')
assert.equal(fromExtension('.zip'), 'archive')
```

### Human-readable file kinds

The following taxonomy is used:

| File Kind      | Description                    | Examples                  |
|----------------|--------------------------------|---------------------------|
| `image`        | Image file                     | `.png`, `.gif`, `.webp`   |
| `video`        | Video file                     | `.mp4`, `.webm`           |
| `audio`        | Audio file                     | `.mp3`, `.wav`            |
| `archive`      | Archive file                   | `.zip`, `.tar`, `.tar.gz` |
| `document`     | Text Document                  | `.pdf`, `.docx`, `.odt`   |
| `spreadsheet`  | Spreadsheet                    | `.xlsx`, `.csv`, `.tsv`   |
| `presentation` | Presentation                   | `.ppt`, `.pptx`, `.odp`   |
| `font`         | Font package                   | `.ttf`, `.otf`, `.woff2`  |
| `text`         | Plain text file                | `.txt`, `.html`, `.json`  |
| `application`  | Executable/application package | `.exe`, `.jar`, `.swf`    |
| `unknown`      | Unknown                        | -                         |

File kinds are also available to import as an `enum`:

```ts
import { FileKind } from 'human-filetypes'

assert.equal(fromExtension('.zip'), FileKind.Archive)
```

### Reverse operations

In addition, we provide reverse operations `getMimeTypes()` and `getExtensions()`.

`getMimeTypes()` returns the list of known mime types for a given file kind.

```js
getMimeTypes('image') // ['image/gif', 'image/jpeg', 'image/png', ...]
getMimeTypes('audio') // ['audio/midi', 'audio/x-midi', 'audio/mpeg', ...]
getMimeTypes('video') // ['video/mp4', 'video/mpeg', 'video/ogg', ...]
getMimeTypes('document') // ['application/pdf', 'application/rtf', ...]
getMimeTypes('font') // ['font/ttf', 'font/woff', ...]
getMimeTypes('text') // ['text/css', 'application/html', ...]
getMimeTypes('application') // ['application/octet-stream', 'application/java-archive', ...]
getMimeTypes('archive') // ['application/gzip', 'application/x-tar', ...]
```

`getExtensions()` returns the list of known extensions for a given file kind.

```js
getExtensions('image') // ['png', 'jpeg', ...]
getExtensions('audio') // ['mp3', 'ogg', 'wav', ...]
getExtensions('video') // ['mp4', 'mpeg', 'ogv', ...]
getExtensions('document') // ['docx', 'pdf', ...]
getExtensions('font') // ['ttf', 'woff', ...])
getExtensions('text') // ['css', 'txt', 'csh', ...]
getExtensions('application') // ['bin', 'exe', 'dll', ...]
getExtensions('archive') // ['zip', 'rar', ...]
```

## Contributing

human-filetypes is Free and Open Source Software. Issues and pull requests are more than welcome!
