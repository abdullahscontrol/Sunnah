import './App.css';
import Header from './header';
function App() {
  return (
    <div>
      <Header />
      <Media />
      <Media />
    </div>
  );
}
function Media() {
  return (
    <div className='media'>
      <div className='media-data'>
        {/* <video  >
          <source src='one.mp4' type='video/mgitp4'></source>
        </video> */}
        <embed src='suffer.mp4' width={"100%"}></embed>
        {/* <img src='dorm.png' alt='hoto' /> */}

      </div>
      <div className='medi'>
        <div className='med'>is coding still worth in
          2024 (s an ex-google</div>
        <div className='med'><button>Download</button></div>
      </div>
      <div className='media-name'></div>
      <div className='media-button'></div>
    </div>
  )
}
export default App;