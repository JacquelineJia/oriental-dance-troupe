import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, withRouter } from "react-router-dom";

import style from './NavigationBar.module.scss';

class NavigationBar extends React.Component {
  isOpen = path => this.props.location.pathname === path;

  render() {
    return (
      <div className={`${style.navBar} appPaddingWrapper`}>
        <div className={`${style.body} appContentWidth`}>
          <div className={style.header}>
            <div className={style.name}>
              <Link to="/">
                <FormattedMessage
                  id="components.navigationBar.menu.title"
                  defaultMessage="Oriental Dance Troupe of Ottawa"
                />
              </Link>
            </div>
            <div className={style.menu}>
              <span
                className={
                  this.isOpen('/programs') ? style.pageOpen : null
                }
              >
                <Link to="/programs">
                  <FormattedMessage
                    id="components.navigationBar.menu.programs"
                    defaultMessage="Programs"
                  />
                </Link>
              </span>
              <span
                className={
                  this.isOpen('/team') ? style.pageOpen : null
                }
              >
                <Link to="/team">
                  <FormattedMessage
                    id="components.navigationBar.menu.team"
                    defaultMessage="Out Team"
                  />
                </Link>
              </span>
              <span
                className={
                  this.isOpen('/gallery') ? style.pageOpen : null
                }
              >
                <Link to="/gallery">
                  <FormattedMessage
                    id="components.navigationBar.menu.gallery"
                    defaultMessage="Gallery"
                  />
                </Link>
              </span>
            </div>
          </div>
          <button
              className={style.languageButton}
              onClick={() => this.props.onChangeLanguage()}
            >
              <FormattedMessage
                id="languageChange"
                defaultMessage="English/中文"
              />
            </button>
        </div>
      </div>
    );
  }
}

export default withRouter(NavigationBar);
