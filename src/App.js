import './App.css';
import Background from './jobreed.png'
import logo from './logo.png'
//component added
const Hello = ({ arr }) => {
    return (

        <div >

            <div style={{ alignItems: 'right' }}>
                <img src={logo} alt="react logo" style={{ width: '200px' }} />
                {
                    arr.map(title => {

                        var header_text = {
                            display: 'inline',
                            margin: '30px'
                        
                        }

                        return <div style={header_text} key={title}>{title}   </div>
                       //printing the array using map function
                    })
             
                }
            </div>
            
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
