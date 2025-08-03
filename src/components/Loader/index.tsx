import ReactDOM from 'react-dom';

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black opacity-50 flex items-center justify-center z-50">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>,
    document.getElementById('root')!
  );
};

export default Loader;
