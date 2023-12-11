module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'babel-plugin-styled-components', // 디버깅 시 class명 확인을 쉽게 만들어줌
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@types': './src/types',
          '@components': './src/components',
          '@pages': './src/pages',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};
