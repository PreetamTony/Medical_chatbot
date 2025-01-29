import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { SymptomChecker } from './components/SymptomChecker';
import { MedicalHistory } from './components/MedicalHistory';
import { ScanAnalysis } from './components/ScanAnalysis';
import { MedicationReminder } from './components/MedicationReminder';
import { HealthMetrics } from './components/dashboard/HealthMetrics';
import { AppointmentScheduler } from './components/appointments/AppointmentScheduler';

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="ml-64 flex-1 p-8">{children}</main>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SymptomChecker />
        <HealthMetrics />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MedicalHistory />
        <MedicationReminder />
      </div>
      <ScanAnalysis />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/appointments" element={<AppointmentScheduler />} />
          <Route path="/records" element={<MedicalHistory />} />
          <Route path="/reminders" element={<MedicationReminder />} />
          <Route path="/doctors" element={<AppointmentScheduler />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;