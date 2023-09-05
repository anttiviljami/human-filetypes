import { mimeData, FileKind, MimeData } from './data';

export const fromExtension = (input: string) => {
  if (!input) return FileKind.Unknown;

  const extension = `.${input?.replace(/^\./, '')}`;

  const match = Object.entries(mimeData).find(([, data]) => data.extensions?.find((ext) => extension.endsWith(ext)));
  if (match) {
    const [, mimeData] = match;
    return mimeData.kind;
  }

  return FileKind.Unknown;
};

export const getExtensions = (fileType: FileKind): string[] => {
  if (!fileType) return [];

  const fileKind = `${fileType}`.toLowerCase().trim();

  // human readable file Kinds image/ video/ audio/ font/
  switch (fileKind) {
    case 'image':
      return getAllowedExtensions(FileKind.Image);
    case 'video':
      return getAllowedExtensions(FileKind.Video);
    case 'audio':
      return getAllowedExtensions(FileKind.Audio);
    case 'font':
      return getAllowedExtensions(FileKind.Font);
    case 'archive':
      return getAllowedExtensions(FileKind.Archive);
    case 'presentation':
      return getAllowedExtensions(FileKind.Presentation);
    case 'text':
      return getAllowedExtensions(FileKind.Text);
    case 'spreadsheet':
      return getAllowedExtensions(FileKind.Spreadsheet);
    case 'document':
      return getAllowedExtensions(FileKind.Document);
    case 'application':
      return getAllowedExtensions(FileKind.Application);
  }

  return [];
};

const getAllowedExtensions = (fileKind: FileKind): string[] => {
  return Object.values(mimeData).flatMap((mimeData: MimeData) => {
    if (mimeData.kind === fileKind) {
      return mimeData.extensions ?? [];
    }

    return [];
  });
};
