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
        <span className={style.videoGroup}>
          <span className={style.videoContainer}>
            <iframe
              src="https://www.youtube.com/embed/CqV3vmUUdno"
              allowfullscreen="allowfullscreen"
            >
            </iframe>
          </span>
          <span className={style.videoContainer}>
            <iframe
              src="https://www.youtube.com/embed/MZ8exzP0Fwo"
              allowfullscreen="allowfullscreen"
            >
            </iframe>
          </span>
          <span className={style.videoContainer}>
            <iframe
              src="https://www.youtube.com/embed/ONrJVQcSHks"
              allowfullscreen="allowfullscreen"
            >
            </iframe>
          </span>
        </span>
        <span>
          <FormattedMessage
            id="components.gallery.content"
            defaultMessage="More comming soon"
            values={{
              br: <span><br /><br /></span>,
            }}
          />
        </span>
      </div>
    );
  }
}

export default Gallery;
