import React, { Component } from 'react';
import "./Billboard.scss";

export class Billboard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            video: this.props.video
        }
    }

    render() {
        return (
            <span className="volatile-billboard-animations-container">
                <div className="billboard-row" aria-label="Besondere Empfehlungen">
                  <div className="ptrack-container billboard-presentation-tracking">
                    <div className="billboard-presentation-tracking ptrack-content">
                      <div className="billboard-presentation-tracking ptrack-content">
                        <div className="billboard billboard-pane billboard-originals trailer-billboard">
                          <div className="hero-image-wrapper">
                            <img className="hero static-image image-layer" src={this.state.video.cover} />
                            <div className="trailer-vignette vignette-layer"></div>
                            <div className="hero-vignette vignette-layer"></div>
                            <div className="embedded-components button-layer">
                              <span className="maturity-rating ">
                                <span className="maturity-number">{this.state.video.usk}</span>
                              </span>
                            </div>
                          </div>
                          <div className="fill-container">
                            <div className="info meta-layer">
                              <div className="logo-and-text meta-layer">
                                <div className="titleWrapper">
                                  <div className="billboard-title">
                                    <span className="title-logo">{this.state.video.label}</span>
                                  </div>
                                </div>
                                <div className="info-wrapper">
                                    <div className="info-wrapper-fade">
                                        <div className="episode-title-container"></div>
                                        <div className="synopsis-fade-container">
                                            <div className="synopsis no-supplemental">
                                                <div className="ptrack-content">
                                                    {this.state.video.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="billboard-links button-layer forward-leaning">
                                    <a aria-label="Abspielen" className=" playLink isToolkit">
                                        <button className="color-primary hasLabel hasIcon ltr-1jtux27">
                                            <div className="ltr-1ol9m1e">
                                                <div className="medium ltr-1evcx25">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         className="Hawkins-Icon Hawkins-Icon-Standard"><path
                                                        d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                                                        fill="currentColor"></path></svg>
                                                </div>
                                            </div>
                                            <div className="ltr-14rufaj"></div>
                                            <span className="ltr-j0gpa2">Abspielen</span>
                                        </button>
                                    </a>
                                </div>  
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </span>
        );
    }
}
