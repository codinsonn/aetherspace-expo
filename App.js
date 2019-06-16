import React from 'react';
import { Text, View } from 'react-native';
import styled, { css } from 'styled-components/native';
// Components
import { Image } from './src/node_modules/components';

/* --- TODO: ------------------------------------------------------------------------------ */

// SSR: https://github.com/necolas/react-native-web/blob/master/docs/guides/server-side-rendering.md
// Stories: https://storybook.js.org/docs/guides/guide-react-native/

/* --- Styles ------------------------------------------------------------------------------ */

const Container = styled(View)`
  flex: 1;
  background-color: #FFF;
  align-items: center;
  justify-content: center;
`;

const TestImage = css`
  margin-top: 20px;
  border-radius: 10px;
  width: 850px;
  height: auto;
`;

const S = { Container };
const CSS = { TestImage };

/* --- <App/> ------------------------------------------------------------------------------ */

const App = () => {
  return (
    <S.Container>
      {/* <Text>Open up App.js to start wokking on your app!</Text> */}
      <Image css={CSS.TestImage} src="https://cdn.dribbble.com/users/3192114/screenshots/6630974/power_4x.png" />
    </S.Container>
  );
};

/* --- export App ------------------------------------------------------------------------------ */

export default App;
