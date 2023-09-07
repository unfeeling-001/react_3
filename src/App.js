import './App.css';

function App() {


  const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
    
  const positive = array.filter(Number => Number > 0);
  
  console.log(positive);


  const messages = [
    {message: 'hello', error: true},  
    {message: 'javascript', error: false},  
    {message: 'expovisiov', error: true},  
    {message: 'react', error: true},  
    {message: 'angular', error: false}, 
    {message: 'es6', error: false}, 
  ];

  const filterMessages = messages.filter (messages => messages.error === false);

  console.log(filterMessages);



  const words= ['экспо', 'js', 'react', 'css', 'angular', 'vue', 'html'];

  const wordsMod = words.map(word => word.length > 5 ? '*' : word);

  console.log(wordsMod);



  const sendMessage = message =>   {
    /*
    * тут какой-то большой код для отправки сообщения
    */
  }
  
  const half = number => number / 2;
  
  const showConsole = () => {
    console.log('Экспо');
  }; 
  showConsole()

  const concatWords = (first,second) => first + second;

  console.log(concatWords);


  function justText() {
    return ('expo')
  }

  function logging(text) {
    console.log(text);
  }

  const add1 = (x,y) => {
  const z = 3; 
  }

  function add(x,y) {
    const z = 3;
    
    return z * x * y;
  }

  // const onlyPositive = (number) => {
  //   if(number < 0) {
  //     return false;
  //   }
  
  //   return true;
  // }

  function onlyPositive(number) {
    if(number < 0) {
          return false;
        }
      
        return true;
  }

  
      return (
    <div></div>
      );


}



export default App;
