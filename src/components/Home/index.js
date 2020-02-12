import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './Home.module.scss';

class Home extends Component {
  render() {
    return (
      <div className={`${style.pageContent} appContentWidth`}>
        <span className={style.aboutUsTitle}>
          <FormattedMessage
            id="components.home.title.aboutUs"
            defaultMessage="About us"
          />
        </span>
        <span className={style.aboutUsContent}>
          <FormattedMessage
            id="components.home.content.aboutUs"
            defaultMessage="Established in 1988, Oriental Dance Troupe of Ottawa has the longest performing history of Chinese dance in national capital region."
            values={{
              br: <span><br /><br /></span>,
            }}
          />
        </span>
      </div>
    );
  }
}

export default Home;
