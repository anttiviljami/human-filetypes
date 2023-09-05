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

export const getMimeTypes = (fileType: FileKind): string[] => {
  if (!fileType) return [];

  const fileKind = `${fileType}`.toLowerCase().trim();

  // human readable file Kinds image/ video/ audio/ font/
  switch (fileKind) {
    case 'image':
      return getAllowedMimeTypes(FileKind.Image);
    case 'video':
      return getAllowedMimeTypes(FileKind.Video);
    case 'audio':
      return getAllowedMimeTypes(FileKind.Audio);
    case 'font':
      return getAllowedMimeTypes(FileKind.Font);
    case 'archive':
      return getAllowedMimeTypes(FileKind.Archive);
    case 'presentation':
      return getAllowedMimeTypes(FileKind.Presentation);
    case 'text':
      return getAllowedMimeTypes(FileKind.Text);
    case 'spreadsheet':
      return getAllowedMimeTypes(FileKind.Spreadsheet);
    case 'document':
      return getAllowedMimeTypes(FileKind.Document);
    case 'application':
      return getAllowedMimeTypes(FileKind.Application);
  }

  return [];
};

const getAllowedMimeTypes = (fileKind: FileKind): string[] => {
  return Object.keys(mimeData)?.filter((key) => mimeData[key].kind === fileKind);
};
