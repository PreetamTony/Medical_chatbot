import { create } from 'zustand';
import type { Patient, Doctor, MedicalRecord } from '../types';

interface Store {
  patients: Patient[];
  doctors: Doctor[];
  currentPatient: Patient | null;
  setCurrentPatient: (patient: Patient | null) => void;
  addMedicalRecord: (patientId: string, record: MedicalRecord) => void;
  addReminder: (patientId: string, medicationId: string, time: string) => void;
}

export const useStore = create<Store>((set) => ({
  patients: [],
  doctors: [],
  currentPatient: null,
  setCurrentPatient: (patient) => set({ currentPatient: patient }),
  addMedicalRecord: (patientId, record) =>
    set((state) => ({
      patients: state.patients.map((p) =>
        p.id === patientId
          ? { ...p, medicalHistory: [...p.medicalHistory, record] }
          : p
      ),
    })),
  addReminder: (patientId, medicationId, time) =>
    set((state) => ({
      patients: state.patients.map((p) =>
        p.id === patientId
          ? {
              ...p,
              medications: p.medications.map((m) =>
                m.id === medicationId
                  ? { ...m, reminderTime: [...m.reminderTime, time] }
                  : m
              ),
            }
          : p
      ),
    })),
}));