import './App.css';
import ChildrenComp from './Components/ChildrenComp';
import Profile from './Components/profile';

function App() {
  const styleImage= {width: 350}
  return (
    <div className="App">
      <Profile FullName="Ahmed Soukeh" Bio="Student" Profession="Full Stack Web Developper">
        <ChildrenComp styleImage={styleImage}/>
      </Profile>
    </div>
  )
}

export default App;
