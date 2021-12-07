# human-filetypes

Human-friendly taxonomy dictionary for file types. Fully tested.

Uses data from [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)

## Example usage

```js
import { fromMime, fromExtension } from 'human-filetypes';
import assert from 'assert';

assert.equal(fromMime('application/pdf'), 'document');
assert.equal(fromMime('application/pdf'), 'document');
assert.equal(fromMime('image/png'), 'image');
assert.equal(fromMime('image/jpeg'), 'image');
assert.equal(fromMime('video/mpeg'), 'video');
assert.equal(fromMime('text/javascript'), 'text');
assert.equal(fromMime('application/json'), 'text');

assert.equal(fromMime('application/pdf'), 'document');
assert.equal(fromMime('image/png'), 'image');
assert.equal(fromMime('image/jpeg'), 'image');
assert.equal(fromMime('video/quicktime'), 'video');
assert.equal(fromMime('application/json'), 'video');
```
