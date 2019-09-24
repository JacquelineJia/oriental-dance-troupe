import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import './NavigationBar.scss';

class NavigationBar extends Component {
  render() {
    return (
      <div className="navBar">
        <div className="menu">
          <div className="header">
            <FormattedMessage
              id="components.navigationBar.menu.title"
              defaultMessage="Oriental Dance Troupe of Ottawa"
            />
          </div>
          {/* <span>
            <FormattedMessage
              id="components.navigationBar.menu.programs"
              defaultMessage="Programs"
            />
          </span>
          <span>
            <FormattedMessage
              id="components.navigationBar.menu.faculty"
              defaultMessage="Faculty"
            />
          </span>
          <span>
            <FormattedMessage
              id="components.navigationBar.menu.contact"
              defaultMessage="Contact"
            />
          </span>
          <span>
            <FormattedMessage
              id="components.navigationBar.menu.gallery"
              defaultMessage="Gallery"
            />
          </span> */}
        </div>
        <button 
            className="languageButton"
            onClick={() => this.props.onChangeLanguage()}
          >
            <FormattedMessage
              id="languageChange"
              defaultMessage="English/中文"
            />
          </button>
      </div>
    );
  }
}

export default NavigationBar;
