import React from 'react'
import ReactDOM from 'react-dom';
import Greetings from './Greetings'
import Counter from './Counter'
import MyForm from './MyForm'
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
        <MyForm onSubmit={onSubmit}/>
        <ReducerSample />
    </React.StrictMode>,
  document.getElementById('root')
)