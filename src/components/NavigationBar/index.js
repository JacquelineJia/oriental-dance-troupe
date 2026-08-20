import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink, withRouter } from "react-router-dom";

import style from './NavigationBar.module.scss';

class NavigationBar extends React.Component {
  render() {
    return (
      <div className={`${style.navBar} appPaddingWrapper`}>
        <div className={`${style.body} appContentWidth`}>
          <div className={style.header}>
            <div className={style.logoWrapper}>
              <NavLink exact to="/">
                <div className={`${style.logo} ${style.imageLogo}`}/>
              </NavLink>
            </div>
            <div className={style.name}>
              <span>
                <NavLink exact to="/" activeClassName={style.pageOpen}>
                  <FormattedMessage
                    id="components.navigationBar.menu.title"
                    defaultMessage="Oriental Dance Troupe of Ottawa"
                  />
                </NavLink>
              </span>
            </div>
            <div className={style.menu}>
              <span>
                <NavLink to="/programs" activeClassName={style.pageOpen}>
                  <FormattedMessage
                    id="components.navigationBar.menu.programs"
                    defaultMessage="Programs"
                  />
                </NavLink>
              </span>
              <span>
                <NavLink to="/team" activeClassName={style.pageOpen}>
                  <FormattedMessage
                    id="components.navigationBar.menu.team"
                    defaultMessage="Our Team"
                  />
                </NavLink>
              </span>
              <span>
                <NavLink to="/gallery" activeClassName={style.pageOpen}>
                  <FormattedMessage
                    id="components.navigationBar.menu.gallery"
                    defaultMessage="Gallery"
                  />
                </NavLink>
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
