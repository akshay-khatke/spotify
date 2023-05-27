module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [

    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          screens: './src/screens',
          components: './src/components',
          navigation: './src/navigation',
          assets: './src/assets',
          utils: './src/utils',
          theme: './src/theme',
          service: './src/service',
          store: './src/store',
          model: './src/model',
          translation: ['./src/translation'],
        },
      },
    ],
  ],
};
