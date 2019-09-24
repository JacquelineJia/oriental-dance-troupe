import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import './Homepage.scss';

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="pageImage" />
        <div className="pageContent">
          <span className="aboutUsTitle">
          <FormattedMessage
              id="components.homepage.title.aboutUs"
              defaultMessage="About us"
            />
          </span>
          <span className="aboutUsContent">
            <FormattedMessage
              id="components.homepage.content.aboutUs"
              // defaultMessage=""
              values={{
                br: <span><br /><br /></span>,
              }}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default Homepage;
