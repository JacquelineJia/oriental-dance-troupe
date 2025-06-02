import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './Programs.module.scss';

class Programs extends Component {
  render() {
    return (
      <div className={`${style.pageContent} appContentWidth`}>
        <span className={style.title}>
          <FormattedMessage
            id="components.programs.title"
            defaultMessage="Programs"
          />
        </span>
        <span className={style.content}>
          <FormattedMessage
            id="components.programs.content"
            defaultMessage="We have adult and children's programs. Contact us for schedules."
            values={{
              br: <span><br /><br /></span>,
            }}
          />
        </span>
        {/* <span><br /><br /></span>
        <span className={style.content}>
          <FormattedMessage
            id="components.programs.children"
            defaultMessage="For children programs, go to: {fengdance}"
            values={{
              br: <span><br /><br /></span>,
              fengdance: <a href="https://fengdance.ca">Feng Dance</a>,
            }}
          />
        </span> */}
      </div>
    );
  }
}

export default Programs;
