import { mimeData, FileKind } from './data';

export const fromExtension = (input: string) => {
  if (!input) return FileKind.Unknown;

  const extension = `.${input?.replace(/^\./, '')}`;

  const match = Object.entries(mimeData).find(([, data]) => data.extensions?.find((ext) => extension.endsWith(ext)));
  if (match) {
    const [_, mimeData] = match;
    return mimeData.kind;
  }

  return FileKind.Unknown;
};
