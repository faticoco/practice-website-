import './App.css';
import Background from './jobreed.png'
import logo from './logo.png'
//component added
function Center({children}) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {children}
        </div>
    );
}
const Hello = ({ arr }) => {
    return (

            <div>
                <Center>
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
                </Center>
            </div>
   
    )
    
}
//adding image in background
const Backgroundimage = () =>
{
    return (
        <div >
            <img src={Background} alt="react background" style={{ width: '400px' }} />
        </div>
        )
};

//adding divs on the page
const Adding_divs_home_page =()=>
{

    return (
        <div className="d-inline-flex p-2">
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
            <div className="d-flex p-2">
                <Adding_divs_home_page />
                <Backgroundimage />
            </div>
      </div>


  );
}

export default App;
