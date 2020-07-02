import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './Gallery.module.scss';

class Gallery extends Component {
  render() {
    return (
      <div className={`${style.pageContent} appContentWidth`}>
        <span className={style.title}>
          <FormattedMessage
            id="components.gallery.title"
            defaultMessage="Gallery"
          />
        </span>
        <span className={style.content}>
          <FormattedMessage
            id="components.gallery.content"
            defaultMessage="Comming soon"
            values={{
              br: <span><br /><br /></span>,
            }}
          />
        </span>
        {/* <span className={style.ourTeamTitle}>
          <FormattedMessage
            id="components.about.title.ourTeam"
            defaultMessage="Our Troupe"
          />
        </span>
        <span className={style.ourTeamContent}>
        </span> */}
      </div>
    );
  }
}

export default Gallery;
