describe('root module', () => {
  it('should export fromMime', async () => {
    const module = await import('.');
    expect(typeof module.fromMime).toBe('function');
  });

  it('should export fromExtension', async () => {
    const module = await import('.');
    expect(typeof module.fromExtension).toBe('function');
  });

  it('should export getMimeTypes', async () => {
    const module = await import('.');
    expect(typeof module.getMimeTypes).toBe('function');
  });

  it('should export getExtensions', async () => {
    const module = await import('.');
    expect(typeof module.getExtensions).toBe('function');
  });
});
