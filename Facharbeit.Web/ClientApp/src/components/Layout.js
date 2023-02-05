import React, { Component } from 'react';
//import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className="netflix-sans-font-loaded">
        <div dir="ltr" class>
          <div>
            <div className="bd dark-background">
              <NavMenu currentPage={this.props.currentPage}/>
              <div className="mainView">{this.props.children}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
