import logo from './logo.svg';
import './App.css';


//component added
const Hello = ({ arr }) => {
    return (
        <div >
            {
                arr.map(title => {
                    return <div style={{ display: 'inline' }} key={title}>{title}   </div>    //printing the array using map function
                })
            }
        </div>
    )
}
//

//adding divs on the page
const adding_divs_home_page =()=>
{
    <style >
        .bgimg
        {
            <img src="pink.jpg" width="500" height="600"/>
        }
    </style>

    return (
        <div class="bgimg">
        <h2>This is a heading in a div element</h2>
        <p>This is some text in a div element.</p>
    </div>
        )
}


function App() {

    const arr = ["HOME", "ABOUT", "PORTFOLIO", "PAGES","BLOG","CONTACT"];
    console.log(arr);
    return (
        //calling a component and passing array
      <div>
            
            <Hello arr={arr} />;
            <adding_divs_home_page />;
     </div>

  );
}

export default App;
