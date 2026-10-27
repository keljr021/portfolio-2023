const images = import.meta.glob('../../assets/**/*.{png,jpg,jpeg,webp,svg,gif}', {
  eager: true,
  import: 'default',
  query: '?url'
});

export function imageSrc(input) {
  const asset = images[`../../assets/${input}`];

  if (typeof asset !== 'string') {
    throw new Error(`Unable to resolve work image asset "${input}"`);
  }

  return asset;
}

export default {
  install(app) {
    app.config.globalProperties.$imageSrc = imageSrc;
  }
};
