export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  medicalHistory: MedicalRecord[];
  medications: Medication[];
}

export interface MedicalRecord {
  id: string;
  date: string;
  diagnosis: string;
  symptoms: string[];
  prescriptions: string[];
  doctorNotes: string;
  scans?: ScanRecord[];
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate: string;
  reminderTime: string[];
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  availability: string[];
  rating: number;
}

export interface ScanRecord {
  id: string;
  type: 'MRI' | 'X-Ray' | 'CT';
  date: string;
  imageUrl: string;
  diagnosis: string;
  doctorId: string;
}