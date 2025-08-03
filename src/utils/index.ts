import React from "react";
import ReactDOM from 'react-dom';

export const loader = (show = true) => {
    if(!show) return null;
    return ReactDOM.createPortal(
    React.createElement(
      'div',
      { className: 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50' },
      React.createElement(
        'div',
        { className: 'relative' },
        React.createElement(
          'div',
          { className: 'w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin' }
        )
      )
    ),
    document.getElementById('root')!
  );
}