import React from 'react';
import Icon from '@ant-design/icons';

const copyLinkSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 32 40" x="0px" y="0px">
    <path d="M24,29H12a3,3,0,0,1-3-3V10a3,3,0,0,1,3-3H24a3,3,0,0,1,3,3V26A3,3,0,0,1,24,29ZM12,9a1,1,0,0,0-1,1V26a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V10a1,1,0,0,0-1-1Z" fill="#006699" />
    <path d="M10,25H8a3,3,0,0,1-3-3V6A3,3,0,0,1,8,3H20a3,3,0,0,1,3,3V8a1,1,0,0,1-2,0V6a1,1,0,0,0-1-1H8A1,1,0,0,0,7,6V22a1,1,0,0,0,1,1h2a1,1,0,0,1,0,2Z" fill="#006699" />
  </svg>
);

const CopyLinkIcon = props => <Icon {...props} component={copyLinkSvg} />;

export default CopyLinkIcon;
