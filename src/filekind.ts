import { mimeData, FileKind } from './data';

export const fromFileKind = (input: FileKind): string[] => {
  if (!input) return [];

  const fileKind = `${input}`.toLowerCase().trim();

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
  return Object.keys(mimeData).filter((key) => mimeData[key].kind === fileKind);
};
