import Message from './Message';
import Alert from './components/Alert';
import Buttton from './components/Buttton';
import ListGroup from './components/ListGroup';

function App() {

  let items = [
    'New york',
    'Los Angeles',
    'Paris',
    'Barcelona'
  ];

  const handleSelectItem = (item: string) => {
    console.log(item)
  }
  return (
    <div>
      <Message/>

      <ListGroup 
        items={items} 
        heading='Cities'
        onSelectItem={handleSelectItem}/>

      <br />
      <br />

      <Alert>Hello <span>World</span></Alert>

      <br />
      <br />

      <Buttton color='primary' onClick={() => console.log('Clicked')}>My button</Buttton>
    </div>
  )
}

export default App;