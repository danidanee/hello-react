import React from 'react';
//import Counter from './Counter';
import MyForm from './MyForm';

const App: React.FC = () => {

  const onSubmit = (form: {name:string; description:string}) =>{
    console.log(form);
  };

  return (
    //<Counter />
    <MyForm onSubmit={onSubmit} />
  );
}

export default App;
