import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './Footer.module.scss';

class Footer extends Component {
  render() {
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
            dongfangwudaotuan@gmail.com
          </span>
          <span>
            (613) 864-6588
          </span>
          {/* <div className="divider" /> */}
          <span className={style.copyright}>
            <FormattedMessage
              id="components.footer.copyright"
              defaultMessage="© 2019 Oriental Dance Troupe of Ottawa"
            />
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
