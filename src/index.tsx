import React from 'react'
import ReactDOM from 'react-dom';
import Greetings from './Greetings'
import Counter from './Counter'
import Counter2 from './Counter2'
import MyForm from './MyForm'
import MyForm2 from './MyForm2'
import ReducerSample from './ReducerSample';

const onClick = (name: string) => {
  console.log(`${name} says Hello!`)
}

const onSubmit = (form: { name: string, description: string }) => {
  console.log(form)
}

ReactDOM.render(
    <React.StrictMode>
        <Greetings name="youme" mark="!" onClick={onClick} />
        <Counter />
        <Counter2 />
        <MyForm onSubmit={onSubmit}/>
        <MyForm2 onSubmit={onSubmit}/>
        <ReducerSample />
    </React.StrictMode>,
  document.getElementById('root')
)