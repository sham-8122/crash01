const App = () => {
const name = 'john';
const x=10;
const y=15;
const names = ['john', 'doe', 'smith'];
const loggedIn = true;
const styles = { color: 'red', fontSize: '55px' };

  
  return (
    <>
     <div className='text-5xl'>App</div>
     <p style={{color:'red', fontSize:'24'}}>Hello{name}</p>
     <p>
      The sum of {x} and {y} is {x + y}
     </p>
     <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
     </ul>
     {loggedIn && <h1>Hello guru</h1>}
    </>
  );
};
  export default App;