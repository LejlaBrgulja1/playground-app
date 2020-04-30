import React from 'react';
import SimpleInput from './SimpleInput';
import DropdownInput from './DropdownInput';

function GeneratorForm() {

  const values = ['A', 'B', 'C'];
  return (
    <form >
        <SimpleInput id="numberOfQs" labelName="Number of Questions" name="numberOfQuestions" placeholder="Number of Questions" />
        <DropdownInput id="categoryId" labelName="Select Category" name="category" values={values}/>
        <DropdownInput id="difficultyId" labelName="Select Difficulty" name="difficulty" values={values}/>
        <DropdownInput id="typeId" labelName="Select Type" name="type" values={values}/>
        <DropdownInput id="encodingId" labelName="Select Encoding" name="encoding" values={values}/>
    </form>
  );
}

export default GeneratorForm;
