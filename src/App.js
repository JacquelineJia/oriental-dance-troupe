import React from 'react';
import { IntlProvider } from 'react-intl';

import messages from './translations/messages';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import NavigationBar from './components/NavigationBar';
import logo from './logo.svg';
import './App.scss';

let locale = (navigator.languages && navigator.languages[0])
    || navigator.language
    || navigator.userLanguage
    || 'en-US';

if (locale.startsWith('zh')) locale = 'zh';
else locale = 'en';

let i18nConfig = {
  locale: locale,
  messages: messages[locale]
};

class App extends React.Component {
  state = {
    i18nConfig: {
      key: locale,
      locale: locale,
      messages: messages[locale],
    }
  }

  onChangeLanguage = lang => {
    const { i18nConfig } = this.state;
    let language = lang;
    if (!language) {
      if (i18nConfig.locale === 'en') {
        language = 'zh';
      }
      else language = 'en';
    }
    i18nConfig.key = language;
    i18nConfig.locale = language;
    i18nConfig.messages = messages[language];
    this.setState({ i18nConfig });
  }

  render() {
    const { i18nConfig } = this.state;
    return (
      <IntlProvider {...i18nConfig}>
        <div className="app">
          <NavigationBar onChangeLanguage={this.onChangeLanguage} />
          <Homepage />
          <Footer />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
