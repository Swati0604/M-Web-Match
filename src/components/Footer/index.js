import React, { Component } from 'react';

//Custom Component
import Emoji from '../EmojiImport';

// Style
import './styles.scss';

class Footer extends Component {
  render() {
    return (
      <div className='footer-style'>
        <p className='sub-title coming-soon-container'>
          Building an awesome knowledge base for designers.{' '}
          <span className='coming-soon'>Coming Soon 😉</span>
        </p>
        <p className='sub-title footer-text'>
          Copyright 2020 - Made with <Emoji symbol='❤️' /> by{' '}
          <a href='https://designsundays.in/' className='highlighted-text'>
            Design Sundays
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
