import React, { useState } from 'react';
import { Clock, Bell } from 'lucide-react';
import { useStore } from '../store/useStore';
import type { Medication } from '../types';

export function MedicationReminder() {
  const currentPatient = useStore((state) => state.currentPatient);
  const addReminder = useStore((state) => state.addReminder);
  const [selectedMed, setSelectedMed] = useState<Medication | null>(null);

  const handleAddReminder = (time: string) => {
    if (currentPatient && selectedMed) {
      addReminder(currentPatient.id, selectedMed.id, time);
    }
  };

  if (!currentPatient) {
    return null;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <Bell className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-bold">Medication Reminders</h2>
      </div>

      <div className="space-y-4">
        {currentPatient.medications.map((med) => (
          <div
            key={med.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{med.name}</h3>
                <p className="text-gray-600">
                  {med.dosage} - {med.frequency}
                </p>
              </div>
              <button
                onClick={() => setSelectedMed(med)}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                Add Reminder
              </button>
            </div>

            {med.reminderTime.length > 0 && (
              <div className="mt-3">
                <p className="text-sm font-medium mb-2">Reminders set for:</p>
                <div className="flex flex-wrap gap-2">
                  {med.reminderTime.map((time, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md"
                    >
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}