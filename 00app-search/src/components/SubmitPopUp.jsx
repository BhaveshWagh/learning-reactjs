import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const SubmitPopUp = () => {
  return (
    <div>
      <h2>Popup</h2>
      <Popup trigger={<button>Click to open modal</button>} modal nested>
        {(close) => (
          <div className="modal">
            <div className="content">Welcome to My World!</div>
            <div>
              <button onClick={() => close()}>X</button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default SubmitPopUp;
