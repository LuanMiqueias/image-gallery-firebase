import React from 'react';
import * as C from './styles';

const Loading: React.FC = () => {
  return (
    <C.Loading>
      {/* <div className="emoji">⌛</div> */}
      <span className="spinner"></span>
    </C.Loading>
  )
}
export default Loading