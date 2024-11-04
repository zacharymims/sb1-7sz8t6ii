import React, { useState } from 'react';
import { StateSelection } from './components/StateSelection';
import { StateLanding } from './components/StateLanding';
import { Quiz } from './components/Quiz';
import { states } from './data/states';

function App() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleStateSelect = (stateCode: string) => {
    setSelectedState(stateCode);
    setSelectedCategory(null);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleBackToState = () => {
    setSelectedCategory(null);
  };

  const handleBackToStates = () => {
    setSelectedState(null);
    setSelectedCategory(null);
  };

  // If no state is selected, show state selection
  if (!selectedState) {
    return <StateSelection states={states} onStateSelect={handleStateSelect} />;
  }

  // Get the selected state data
  const currentState = states.find(state => state.code === selectedState);
  if (!currentState) return null;

  // If no category is selected, show state landing page
  if (!selectedCategory) {
    return (
      <StateLanding
        stateName={currentState.name}
        categories={currentState.categories}
        onCategorySelect={handleCategorySelect}
        onBackToStates={handleBackToStates}
      />
    );
  }

  // Show the quiz for the selected category
  return (
    <Quiz
      stateCode={selectedState}
      categoryId={selectedCategory}
      onBack={handleBackToState}
    />
  );
}

export default App;