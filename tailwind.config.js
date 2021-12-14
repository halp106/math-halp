const production = !process.env.ROLLUP_WATCH;

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [
    require('@tailwindcss/ui')
  ],
  purge: {
    content: [
      "./src/*.svelte",
    ],
    enabled: production  // disable purge in dev,
  },
};
