import './App.css';
import Background from './jobreed.png'

//component added
const Hello = ({ arr }) => {
    return (
        <div >
            {
                arr.map(title => {
                    return <div style={{ display: 'inline' }, { margin :20 }} key={title}>{title}   </div>    //printing the array using map function
                })
            }
        </div>
    )
}
//adding image in background
var backgroundimage = {
    width: "500%",
    height: "800px",
    backgroundRepeat: 'no-repeat',
    backgroundImage: "url(" + Background + ")",
};

//adding divs on the page
const Adding_divs_home_page =()=>
{

    return (
        <div style={backgroundimage }>
            <h1>I AM JO BREED</h1>
            <p>CREATIVE ART DIRECTOR & DESIGNER</p>
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
            <Adding_divs_home_page />;
     </div>

  );
}

export default App;
