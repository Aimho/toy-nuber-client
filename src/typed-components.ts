import * as styledComponents from 'styled-components';
import { ThemeStyledComponentsModule } from 'styled-components';

interface IThemeInterface {
  blueColor: string;
}

const {
  default: styled,
  css,
  injectionGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemeStyledComponentsModule<IThemeInterface>;

export { css, injectionGlobal, keyframes, ThemeProvider };
export default styled;
