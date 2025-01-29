import React, { useState } from 'react';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import 'react-calendar/dist/Calendar.css';
import 'react-time-picker/dist/TimePicker.css';

export function AppointmentScheduler() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('10:00');
  const [doctor, setDoctor] = useState('');

  const doctors = [
    { id: '1', name: 'Dr. Sarah Johnson', specialty: 'Cardiologist' },
    { id: '2', name: 'Dr. Michael Chen', specialty: 'Neurologist' },
    { id: '3', name: 'Dr. Emily Brown', specialty: 'General Practitioner' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6">Schedule Appointment</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Select Date</h3>
          <Calendar
            onChange={setDate}
            value={date}
            className="rounded-lg border p-2"
            minDate={new Date()}
          />
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Select Time</h3>
            <div className="flex items-center gap-2 p-2 border rounded-lg">
              <Clock className="w-5 h-5 text-gray-500" />
              <TimePicker
                onChange={setTime}
                value={time}
                className="w-full"
                clearIcon={null}
                format="HH:mm"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Select Doctor</h3>
            <div className="space-y-2">
              {doctors.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => setDoctor(doc.id)}
                  className={`w-full p-3 rounded-lg border transition-colors flex items-center gap-3 ${
                    doctor === doc.id
                      ? 'bg-blue-50 border-blue-200'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <User className="w-5 h-5 text-gray-500" />
                  <div className="text-left">
                    <p className="font-medium">{doc.name}</p>
                    <p className="text-sm text-gray-500">{doc.specialty}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Schedule Appointment
          </button>
        </div>
      </div>
    </motion.div>
  );
}