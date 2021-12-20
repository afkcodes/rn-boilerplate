import { ThemeImages, ThemeVariables } from 'src/Theme/theme.type';

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({}: ThemeVariables): ThemeImages {
  return {
    logo: require('src/Assets/Images/TOM.png')
  };
}
