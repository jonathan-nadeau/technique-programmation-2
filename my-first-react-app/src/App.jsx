import Card from './components/Card/Card';
import './app.css';
import CardImage from './components/CardImage/CardImage';
import CardTitle from './components/CardTitle/CardTitle';
import CardDescription from './components/CardDescription/CardDescription';
import CardInfo from './components/CardInfo/CardInfo';
import CardFooter from './components/CardFooter/CardFooter';
import { Button } from './components/Button/Button';

function App() {
  const handleButtonClick = (event) => {
    alert('Button clicked!');
  };
  return (
    <div className='app'>
      <Card>
        <CardImage src={'images/image-equilibrium.jpg'} alt={'equilibrium'} />
        <CardTitle title={'Equilibrium #3429'} />
        <Button textField={'Click me'} onClick={handleButtonClick} />
        <CardDescription description={'Our Equilibrium collection promotes balance and calm.'} />
        <CardInfo value={'0.0-41'} timeLeft={'3 days'} />
        <CardFooter src={'images/image-avatar.png'} name={'Jules Wyvern'} />
      </Card>
    </div>
  );
}

export default App;
