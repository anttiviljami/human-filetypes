describe('root module', () => {
  it('should export fromMime', async () => {
    const module = await import('.');
    expect(typeof module.fromMime).toBe('function');
  });

  it('should export fromExtension', async () => {
    const module = await import('.');
    expect(typeof module.fromExtension).toBe('function');
  });

  it('should export fromFileKind', async () => {
    const module = await import('.');
    expect(typeof module.fromFileKind).toBe('function');
  });
});
