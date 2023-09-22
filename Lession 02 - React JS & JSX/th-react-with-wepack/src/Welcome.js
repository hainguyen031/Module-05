//Cách 1
function Welcome({student}) {
    return (
      <h1>
        Hello: {student.name}, Your's age: {student.age}
      </h1>
    );
}

//Cách 2
// function Welcome({name, age}) {
//     return (
//         <h1>Hello: {name}, Your's age: {age}</h1>
//     );
// }

//Cách 3
// function Welcome(props) {
//     return (
//       <h1>
//         Hello: {props.name}, Your's age: {props.age}
//       </h1>
//     );
// }

export default Welcome;