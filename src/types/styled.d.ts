import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      mainBg: string;
      white: string;
      black: string;
    };
  }
}
