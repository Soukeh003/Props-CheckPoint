import './App.css';
import ChildrenComp from './Components/ChildrenComp';
import Profile from './Components/profile';

function App() {
  const styleImage= {width: 350}
  return (
    <div className="App">
      <Profile styleImage={styleImage} FullName="Ahmed Soukeh" Bio="Student" Profession="Full Stack Web Developper">
        <ChildrenComp styleImage={styleImage}/>
      </Profile>
      <Profile FullName="Selim Daoud"/>
    </div>
  )
}

export default App;
