import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './Footer.module.scss';

class Footer extends Component {
  render() {
    const currentYear = new Date().getFullYear();
    
    return (
      <div className={`${style.footer} appPaddingWrapper`}>
        <div className={`${style.body} appContentWidth`}>
          <span className={style.title}>
            <FormattedMessage
              id="components.footer.title.contactUs"
              defaultMessage="Contact Us"
            />
          </span>
          <span>
            <a className={style.link} 
              href="mailto:dongfangwudaotuan@gmail.com"
              target="_blank">
              dongfangwudaotuan@gmail.com
            </a>
          </span>
          <span>
            (613) 864-6588
          </span>
          {/* <div className="divider" /> */}
          <span className={style.copyright}>
            <FormattedMessage
              id="components.footer.copyright"
              defaultMessage="© {year} Oriental Dance Troupe of Ottawa"
              values={{ year: currentYear }}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
