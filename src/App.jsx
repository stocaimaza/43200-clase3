import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
//import Contador from './componentes/Contador/Contador';
//import Categorias from './componentes/Categorias/Categorias';
//import UseRef from './componentes/UseRef/UseRef';
//import UseRefDom from './componentes/UseRefDom/UseRefDom';
//import Promesas from './componentes/Promesas/Promesas';
import JsonPlaceHolder from './componentes/JsonPlaceHolder/JsonPlaceHolder';

function App() {
  return (
    <>
      <h1>Hola Mundo</h1>
      {
        /*
        <Contador inicial={1} stock={10} />
        <Contador inicial={5} stock={8} />
        <Categorias/>
        <UseRef/>
        <UseRefDom/>
        */
      }
      {
        //<Promesas/>
      }
      <ItemListContainer/>
      <JsonPlaceHolder/>
    </>
  );
}

export default App;
