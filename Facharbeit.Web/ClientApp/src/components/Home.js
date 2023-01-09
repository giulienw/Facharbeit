import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService';

export class Home extends Component {
  static displayName = Home.name;

  async test() {
      const token = await authService.getAccessToken();
      console.log(token)
  }

  constructor(props) {
    super(props);
    this.state = { videos: [], loading: true };
  }
  
  render() {
      let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : this.renderVideos(this.state.videos);

      return (
        <div>
          {contents}
        </div>
      );
  }

  async componentDidMount() {
    await this.getVideos();
  }

  renderVideos(videos) {
    return (
      <ul>
          {videos.map(video =>
            <li key={video.ID}>
              <span>{video.Name}</span>
            </li>
          )}
      </ul>
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
    this.setState({ videos: data, loading: false });
  }
}
