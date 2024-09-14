import { useState } from "react";
import AnimatedText from "../../components/AnimatedText/AnimatedText";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import './Home.scss';

const Home = () => {
  const [text, setText] = useState<string>('Animated text');
  const [value, setValue] = useState<string>('');

  const buttonClickHandler = () => {
    setText(value);
  }

  return (
    <div className="Home">
      <AnimatedText text={text} />
      <div className="controls">
        <Input value={value} onChange={(event) => setValue(event.target.value)}/>
        <Button onClick={buttonClickHandler} >
          Save
        </Button>
      </div>
    </div>
  )
};

export default Home;