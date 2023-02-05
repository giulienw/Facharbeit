import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService';
import { Billboard} from "./HomeComponents/Billboard";
import {Layout} from "./Layout";

export class Browse extends Component {
  static displayName = Browse.name;

  async test() {
      const token = await authService.getAccessToken();
      console.log(token)
  }

  constructor(props) {
    super(props);
    this.state = { 
        videos: [], 
        loading: true
    };
  }

  async componentDidMount() {
      await this.getVideos();
  }
  
  render() {
      let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : this.renderVideos(this.state.videos);

      return (
          <Layout currentPage="Startseite">
              {contents}
          </Layout>
      );
  }
  
  renderVideos(videos) {
      return(
          <div className="lolomo is-fullbleed">
              <h1 className="visually-hidden">Netflix-Startseite</h1>
              <Billboard video={videos[0]}/>
              <div className="lolomoRow lolomoRow_title_card ltr-0">
                  <h2 className="rowHeader ltr-0">
                        <span className="rowTitle ltr-0">
                            <div className="row-header-title">Alle Videos</div>
                        </span>
                  </h2>
                  <div className="rowContainer rowContainer_title_card">
                      <div className="ptrack-container">
                          <div className="rowContent slider-hover-trigger-layer">
                              <div className="slider">
                                  <div className="sliderMask showPeek">
                                      <div className="sliderContent row-with-x-columns">
                                          {videos.map(video =>
                                              <div key={video.id} className={`slider-item slider-item-${video.id}`}>
                                                  <div className="title-card-container ltr-0">
                                                      <div className="title-card">
                                                          <div className="ptrack-content">
                                                              <a href={`/watch/${video.id}`} role="link" aria-label="Physical: 100" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                                  <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                      <img className="boxart-image boxart-image-in-padded-container" src={video.cover} alt="" />
                                                                      <div className="fallback-text-container" aria-hidden="true">
                                                                          <p className="fallback-text">{video.label}</p>
                                                                      </div>
                                                                  </div>
                                                                  <div className="click-to-change-JAW-indicator">
                                                                      <div className="bob-jawbone-chevron">
                                                                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                               xmlns="http://www.w3.org/2000/svg"
                                                                               className="svg-icon svg-icon-chevron-down">
                                                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                                                    d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                                                                    fill="currentColor"></path>
                                                                          </svg>
                                                                      </div>
                                                                  </div>
                                                              </a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          )}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  }

  async getVideos() {
    const token = await authService.getAccessToken();
    console.log(token);
    const response = await fetch('api/video/GetAllVideos', {
      method: 'POST',
      headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    console.log(data)
    this.setState({ videos: data, loading: false });
  }
}
