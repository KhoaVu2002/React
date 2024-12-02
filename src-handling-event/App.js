import React from 'react';
import ButtonClick from './components/ButtonClick/ButtonClick';
import ToggleButton from './components/ToggleButton/ToggleButton';
import InputChange from './components/InputChange/InputChange';
import FormSubmission from './components/FormSubmission/FormSubmission';
import ImageClick from './components/ImageClick/ImageClick';
import DragAndDrop from './components/Drag/DragAndDrop';
import DynamicButton from './components/DynamicButton/DynamicButton';
import ButtonChange from './components/ChangeColor/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ButtonClick /> */}
        <ToggleButton/>
        <InputChange/>
        <FormSubmission/>
        <ImageClick/>
        <DragAndDrop/>
        <DynamicButton/>
        <ButtonChange/>
      </header>
    </div>
  );
}

export default App;
