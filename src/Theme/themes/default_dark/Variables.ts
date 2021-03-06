import { ThemeColors, ThemeNavigationColors } from 'src/Theme/theme.type';

const Colors: ThemeColors = {
  primary: 'lightblue',
  text: 'white',
  inputBackground: 'gray'
};

const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary
};

export default {
  Colors,
  NavigationColors
};
