import { useEffect } from "react";
import ReactDOM from "react-dom";

function Model ({ onClose, children, onAction }) {

//this useEffect is used for stop scrolling when model is open, bcoz it's not good to scroll down when the model is open; by this class overflow-hidden will added to body
    useEffect(() => {
        document.body.classList.add("overflow-hidden");
//this return is used for when model is closed remove overflow-hidden, which is allow user to scroll down; otherwise model is open or closed the scroll will not happen
        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    }, []);
    
    return ReactDOM.createPortal(
        <div>
{/* here className was absolute instead of fixed but when u set model button in below the the model was shown in upper side bcoz of absolute, but we want to show model where the model button is, so we will use fixed class */}
            <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
            <div className="fixed inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    { children }
                    <div className="flex justify-end">{ onAction }</div>
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    );
}

export default Model;

// we are using this ReactDOM.createPortal(), bcoz absolute and inset are working with patent comp.,if patent comp has position class then gray backgorund class will not work correcly it hasto have html document as parent comp. so we are using this to make bath div child of html doc, so the gray background class work nicely (watch index.html file), there we set class modal-container, both the div will be set there by this method (for more watch Udemy-lec-239)