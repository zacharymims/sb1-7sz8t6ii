import React from 'react';
import { MapPin, BookOpen, Award, Brain, CheckCircle2, Truck, Shield } from 'lucide-react';
import { State } from '../types';

interface StateSelectionProps {
  states: State[];
  onStateSelect: (stateCode: string) => void;
}

export const StateSelection: React.FC<StateSelectionProps> = ({
  states,
  onStateSelect
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Truck className="w-10 h-10 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Free CDL Practice Tests by State
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Prepare for your Commercial Driver's License exam with state-specific practice tests updated for 2024.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">State-Specific Tests</h3>
                <p className="text-gray-600">Tailored to your state's requirements and regulations.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-green-50 rounded-lg">
              <div className="bg-green-100 p-3 rounded-lg">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Smart Learning</h3>
                <p className="text-gray-600">Detailed explanations and progress tracking.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-lg">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Updated Content</h3>
                <p className="text-gray-600">Latest questions and regulations for 2024.</p>
              </div>
            </div>
          </div>

          {/* State Selection Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-600" />
              Select Your State
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {states.map((state) => (
                <button
                  key={state.code}
                  onClick={() => onStateSelect(state.code)}
                  className={`p-4 text-left rounded-lg border-2 transition-all ${
                    state.categories.length > 0
                      ? 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                      : 'border-gray-100 bg-gray-50 cursor-not-allowed'
                  }`}
                  disabled={state.categories.length === 0}
                >
                  <div className="font-medium text-gray-800">{state.name}</div>
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    {state.categories.length > 0 ? (
                      <>
                        <BookOpen className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-600">
                          {state.categories.length} Tests Available
                        </span>
                      </>
                    ) : (
                      <span className="text-gray-400">Coming Soon</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Study Tips */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600" />
              CDL Study Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Preparation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Study your state's CDL manual thoroughly
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Take practice tests regularly
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Focus on challenging topics
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Test Day</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Get plenty of rest before the exam
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Arrive early to your test location
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Review your notes one final time
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};