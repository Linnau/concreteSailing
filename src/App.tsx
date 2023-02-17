import React from 'react';
import { WithTheme } from './shared/theme/theme';
import Header from './header/Header';
import { AppContent } from './content/AppContent';

export function App(): JSX.Element {

  return (
    <WithTheme>
      <Header />
      <AppContent />
    </WithTheme>
  );
}

export default App;