// import App from './App.jsx'
function User(){
return (<div className="car-contaainer">
        <p className="pro">online</p>
        <img className="img" src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png" alt="" />
        <h3>full name</h3>
        <h4>salem</h4>
        <p>web developer</p>
        <div className="skills">
            <ul>
                <li>skill</li>
                <li>skill</li>
                <li>skill</li>
                <li>skill</li>
                
            </ul>
        </div>
    </div>)
}

export const Usercard = () => {
  return (
    <User />
  )
}
