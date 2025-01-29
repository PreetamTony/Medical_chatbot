import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Activity,
  Calendar,
  FileText,
  Bell,
  Users,
  Settings,
  LogOut,
} from 'lucide-react';

const navItems = [
  { icon: Activity, label: 'Dashboard', path: '/' },
  { icon: Calendar, label: 'Appointments', path: '/appointments' },
  { icon: FileText, label: 'Medical Records', path: '/records' },
  { icon: Bell, label: 'Reminders', path: '/reminders' },
  { icon: Users, label: 'Doctors', path: '/doctors' },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 shadow-lg">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <Activity className="w-8 h-8 text-blue-600" />
          <h1 className="text-xl font-bold">MedAssist</h1>
        </div>
        
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="absolute bottom-0 w-full p-4 border-t">
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors w-full p-2">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
        <button className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors w-full p-2 mt-2">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}