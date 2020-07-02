import React from 'react';
import { Helmet } from "react-helmet";
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import About from './components/About';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import HeaderImage from './components/HeaderImage';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Programs from './components/Programs';
import Team from './components/Team';
import logo from './logo.svg';
import messages from './translations/messages';
import './App.scss';

let locale = (navigator.languages && navigator.languages[0])
    || navigator.language
    || navigator.userLanguage
    || 'en-US';

if (locale.startsWith('zh')) locale = 'zh';
else locale = 'en';

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
          <Helmet>
            <title>Oriental Dance Troupe of Ottawa</title>
            <meta name="keywords" content="ottawa,oriental,dance,troupe,chinese,traditional,classical,odto,dongfangwudaotuan,渥太华东方舞蹈团,渥太华,东方舞蹈团"/>
            <meta name="description" content="Established in 1988, Oriental Dance Troupe of Ottawa has the longest performing history of Chinese dance in national capital region."/>
            <meta name="subject" content="Oriental Dance Troupe of Ottawa"/>
            <meta name="copyright"content="Oriental Dance Troupe of Ottawa"/>
            <meta name="language" content="EN"/>
          </Helmet>
          <Router>
            <NavigationBar onChangeLanguage={this.onChangeLanguage} />
            <HeaderImage />
            <div className="appPaddingWrapper pageContent">
              <Switch>
                <Route exact path="/" component={About} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/programs" component={Programs} />
                <Route path="/team" component={Team} />
                <Redirect to="/" />
              </Switch>
            </div>
            <Footer />
          </Router>
        </div>
      </IntlProvider>
    );
  }
}

export default App;
