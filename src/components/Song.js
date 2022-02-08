const Song = (props) => {
  return (
    <div className="song">
      <h1>{props.song.title}</h1>
      <h2>{props.song.artist}</h2>
      <h3>{props.song.time}</h3>
    </div>
  );
};

export default Song;
