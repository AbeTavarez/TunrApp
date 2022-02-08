import { Component } from "react";
import "./App.css";
import playlist from "./data";
import Song from "./components/Song";

// console.log(playlist);
class App extends Component {
  state = {
    playlist: playlist,
    title: '',
    artist: '',
    time: ''
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, artist, time } = this.state;
    const newSong = {
     title,
     artist,
     time
    }
    
    this.setState({
      playlist:{
        songs: [...this.state.playlist.songs, newSong],
        created: this.state.playlist.created,
        title: this.state.playlist.title
      },
      title: '',
      artist: '',
      time: ''
    })
    console.log(this.state);
  }

  render() {
    return (
      <div className="tunr-container">
        <header>
          <h1>Tunr.</h1>
          <h2>For all your playlists needs</h2>
        </header>

        <div className="playlist">
          <h1>{this.state.playlist.title}</h1>

          <div className="songs">
            {this.state.playlist.songs.map((song, index) => (
              <Song song={song} key={index} />
            ))}
          </div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" value={this.state.title} id="title" onChange={this.handleChange}/>

          <label htmlFor="title">Artist</label>
          <input type="text" value={this.state.artist} id="artist" onChange={this.handleChange}/>

          <label htmlFor="title">Time</label>
          <input type="text" value={this.state.time} id="time" onChange={this.handleChange}/>

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
