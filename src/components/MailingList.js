import React from 'react';

import classnames from 'classnames';
import SVG from 'react-inlinesvg';

import './styles.css';

function MailingList({block, buttonClass, center, description, size, width}) {
  return (
    <div className={classnames('mailing-list', {'mailing-list--block': block, 'mailing-list--center': center, [`mailing-list--${size}`]: size})}>
      {description !== false && (
        <div className="mailing-list--description">
          <SVG className="navbar__logo" src="/img/icon.svg" alt="acert" width="32" height="auto" /><br/>
          The easiest way to stay up-to-date. No spam, ever.
        </div>
      )}
      <form action="https://acert.us19.list-manage.com/subscribe/post?u=95e509837bc956a123b301385&amp;id=2052317feb" method="post" className="mailing-list--form">
        <input required className={classnames('input', `input--${size}`)} name="EMAIL" placeholder="you@email.com" type="email" style={{width: width}} />
        <button className={classnames('button', `button--${buttonClass || 'primary'}`, `button--${size}`)} type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default MailingList;
