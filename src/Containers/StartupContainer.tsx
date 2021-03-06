import React, { useEffect } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/Hooks';
import { Brand } from 'src/Components';
import { setDefaultTheme } from 'src/Store/Theme';
import { navigateAndSimpleReset } from 'src/Navigators/utils';

const StartupContainer = () => {
  const { Layout, Gutters, Fonts } = useTheme();

  const { t } = useTranslation();

  const init = async () => {
    // await new Promise(resolve =>
    //   setTimeout(() => {
    //     resolve(true)
    //   }, 0),
    // )
    await setDefaultTheme({ theme: 'default', darkMode: null });
    navigateAndSimpleReset('Main');
  };

  useEffect(() => {
    init();
  });

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size="large" style={[Gutters.largeVMargin]} />
      <Text style={Fonts.textCenter}>{t('welcome')}</Text>
    </View>
  );
};

export default StartupContainer;
