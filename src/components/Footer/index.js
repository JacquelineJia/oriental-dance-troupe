import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span className="title">
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
        <span className="copyright">
          <FormattedMessage
            id="components.footer.copyright"
            defaultMessage="© 2019 Oriental Dance Troupe of Ottawa"
          />
        </span>
      </div>
    );
  }
}

export default Footer;
