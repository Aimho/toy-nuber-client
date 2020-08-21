import * as styledComponents from 'styled-components';
import { ThemeStyledComponentsModule } from 'styled-components';

interface IThemeInterface {
  blueColor: string;
}

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemeStyledComponentsModule<IThemeInterface>;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
