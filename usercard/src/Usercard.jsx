// import App from './App.jsx'
const users = [
  {
    name:"Vijay Krishna",
    place:"Chennai",
    decs:"web developer",
    skills:[
      "javascript",
      "CSS",
      "HTML",
      "WEB DESINGING",
      "UI/UX",
      "React",
      "developer"],
    online:true
  },
  {
    name:"Vijay kumar",
    place:"salem",
    decs:"web designer",
    skills:[
      "flutter",
      "figma",
      "WEB DESINGING",
      "UI/UX",
      "React native",
      "developer"],
      online:false
  },
  {
    name:"Vijay kumar",
    place:"salem",
    decs:"web designer",
    skills:[
      "flutter",
      "figma",
      "WEB DESINGING",
      "UI/UX",
      "React native",
      "developer"],
      online:false
  },
];
function User(props) {
  return (
    <div className="car-contaainer">
      <p className= {props.online ? 'pro online' : 'pro offline'} >{props.online ? 'online' : 'offline'}</p>
      <img
        className="img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3flIHsvZtK3eU7tEnp-LSEjNznTZCn0dkcA&s"
        alt=""
      />
      <h3>{props.name}</h3>
      <h4>{props.place}</h4>
      <p>{props.decs}</p>
      <div className="skills">
        <h2>Skills :</h2>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}> {skill} </li>
          ))
          }
        </ul>
      </div>
    </div>
  );
}

export const Usercard = () => {
  return (
  <>
  {users.map((user)=>(
    <User   name={user.name}
    place={user.place}
    decs={user.decs}
    skills={user.skills}
    online={user.online}
    /> 
  ))}
  </>
  );
};
