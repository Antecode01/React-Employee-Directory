import React from "react";
import "./style.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="center">
        <div className="loader">
          <div className="first">
            {this.props.loadBar >= 0 ? (
              <div className="greybg"></div>
            ) : (
              <div className="whitebg"></div>
            )}
          </div>
          <div className="second">
            {this.props.loadBar >= 1 ? (
              <div className="greybg"></div>
            ) : (
              <div className="whitebg"></div>
            )}
          </div>
          <div className="third">
            {this.props.loadBar >= 2 ? (
              <div className="greybg"></div>
            ) : (
              <div className="whitebg"></div>
            )}
          </div>
          <div className="fourth">
            {this.props.loadBar >= 3 ? (
              <div className="greybg"></div>
            ) : (
              <div className="whitebg"></div>
            )}
          </div>
          <div className="fifth">
            {this.props.loadBar >= 4 ? (
              <div className="greybg"></div>
            ) : (
              <div className="whitebg"></div>
            )}
          </div>
          <div className="six">
            {this.props.loadBar >= 5 ? (
              <div className="greybg"></div>
            ) : (
              <div className="whitebg"></div>
            )}
          </div>
          <div className="seven">
            {this.props.loadBar >= 6 ? (
              <div className="greybg"></div>
            ) : (
              <div className="whitebg"></div>
            )}
          </div>
          <div className="eight">
            {this.props.loadBar >= 7 ? (
              <div className="greybg"></div>
            ) : (
              <div className="whitebg"></div>
            )}
          </div>
          <div className="nine">
            {this.props.loadBar >= 8 ? (
              <div className="greybg"></div>
            ) : (
              <div className="whitebg"></div>
            )}
          </div>
          <div className="ten">
            {this.props.loadBar >= 9 ? (
              <div className="greybg"></div>
            ) : (
              <div className="whitebg"></div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
