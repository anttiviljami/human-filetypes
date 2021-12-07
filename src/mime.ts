import { mimeData, FileKind } from './data';

export const fromMime = (input: string): FileKind => {
  if (!input) return FileKind.Unknown;

  const mime = `${input}`.toLowerCase().trim();

  // human readable mime types image/ video/ audio/ font/
  const [type] = mime.split('/');
  switch (type) {
    case 'image':
      return FileKind.Image;
    case 'video':
      return FileKind.Video;
    case 'audio':
      return FileKind.Audio;
    case 'font':
      return FileKind.Font;
  }

  // non-human readable types: application/ text/
  const match = mimeData[mime];
  if (match) {
    return match.kind;
  }

  return FileKind.Unknown;
};
