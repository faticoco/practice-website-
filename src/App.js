import logo from './logo.svg';
import './App.css';

//component added
const Hello = ({arr}) => {
    return (
        <div>
            {
                arr.map(title => {
                    return <div key={title}>{title}</div>    //printing the array using map function
                })
            }
        </div>
    )
}
//


function App() {

    const arr = ['A', 'B', 'C', 'D'];
    console.log(arr);
  return (
      <div>
            
              <Hello arr={arr} />;  //calling a component and passing array
     </div>
  );
}

export default App;
