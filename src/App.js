import './App.css';
import Header from './header';
import './desktop.css';
function App() {
  return (
    <div className='thehole'>
      <Header />
      <Media />
      <Media />
      <Media />
      <Media />
      <Media />
      <Welcomebox />
    </div>
  );
}
function Media() {
  return (
    <div className='media'>
      <div className='media-data'>
        <embed src='coder.mp4' width={"100%"}></embed>
      </div>
      <div className='medi'>
        <div className='med'>is coding still worth in
          2024 </div>
        <div classN66ame='med'><button>Download</button></div>
      </div>
      <div className='mede'>
        <a href='https://www.youtube.com/watch?v=wiIR8t8qQsM' target='_blank' >Watch full video here</a>
      </div>
      <div className='media-name'></div>
      <div className='media-button'></div>
    </div>
  )
}
function Welcomebox() {
  return (
    <div className='welcomebox'>
      <img src='dorm.png' alt='hoto' />
      Advertesing! <br />

    </div>
  )
};
export default App;