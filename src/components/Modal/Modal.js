import React, { Component } from "react";
import $ from "jquery";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
  }

  componentDidMount() {
    $(this.modalRef.current).hide();
  }

  hideScreen = () => {
    $(this.modalRef.current).fadeIn(200);
    // document.getElementsByTagName("html")[0].classList.add("hidden");
  };

  showScreen = () => {
    $(this.modalRef.current).fadeOut(200);
    // document.getElementsByTagName("html")[0].classList.remove("hidden");
  };

  render() {
    let theChild = undefined;
    if (this.props.model === true) {
      this.hideScreen();
    } else {
      this.showScreen();
    }
    if (this.props.model) {
      theChild = (
        <div ref={this.modalRef} class="fixed backdrop-blur-sm top-0 left-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
          <div class="relative m-auto w-full h-full max-w-2xl md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {this.props.children}
            </div>
          </div>
        </div>
      );
    }

    return <div>{theChild}</div>;
  }
}

Modal.propTypes = {};

export default Modal;
