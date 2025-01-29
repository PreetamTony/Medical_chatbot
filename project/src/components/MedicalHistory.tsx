import React from 'react';
import { useStore } from '../store/useStore';
import { Calendar, FileText } from 'lucide-react';
import { format } from 'date-fns';

export function MedicalHistory() {
  const currentPatient = useStore((state) => state.currentPatient);

  if (!currentPatient) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <p>No patient selected</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Medical History</h2>
      <div className="space-y-4">
        {currentPatient.medicalHistory.map((record) => (
          <div
            key={record.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span className="font-semibold">
                  {format(new Date(record.date), 'PPP')}
                </span>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {record.diagnosis}
              </span>
            </div>
            
            <div className="mt-3">
              <h4 className="font-medium mb-1">Symptoms:</h4>
              <div className="flex flex-wrap gap-2">
                {record.symptoms.map((symptom, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 rounded-md text-sm"
                  >
                    {symptom}
                  </span>
                ))}
              </div>
            </div>

            {record.doctorNotes && (
              <div className="mt-3 flex items-start gap-2">
                <FileText className="w-5 h-5 text-gray-500 mt-1" />
                <p className="text-gray-600">{record.doctorNotes}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}