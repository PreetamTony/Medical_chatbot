import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const commonSymptoms = [
  'Fever',
  'Headache',
  'Cough',
  'Fatigue',
  'Shortness of breath',
  'Body aches',
  'Nausea',
];

export function SymptomChecker() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [diagnosis, setDiagnosis] = useState<string>('');

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const analyzeSymptomsAndDiagnose = () => {
    // This is a placeholder for the actual ML model integration
    // In a production environment, this would call an API with a trained model
    if (selectedSymptoms.length === 0) {
      setDiagnosis('Please select at least one symptom');
      return;
    }
    setDiagnosis('Based on your symptoms, you might have...');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Symptom Checker</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Select Your Symptoms</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {commonSymptoms.map((symptom) => (
            <button
              key={symptom}
              onClick={() => handleSymptomToggle(symptom)}
              className={`p-2 rounded-md transition-colors ${
                selectedSymptoms.includes(symptom)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {symptom}
            </button>
          ))}
        </div>
      </div>
      
      <button
        onClick={analyzeSymptomsAndDiagnose}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Analyze Symptoms
      </button>

      {diagnosis && (
        <div className="mt-4 p-4 bg-blue-50 rounded-md flex items-start gap-2">
          <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
          <p>{diagnosis}</p>
        </div>
      )}
    </div>
  );
}