import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import ClassesPage from './pages/ClassesPage';
import MyBookingsPage from './pages/MyBookingsPage';
const AdminPanel = lazy(() => import('./pages/AdminPanel'));
export default function App() { return <><Navigation /><main className="container"><Routes><Route path="/" element={<LoginPage />} /><Route element={<ProtectedRoute />}><Route path="/classes" element={<ClassesPage />} /><Route path="/my-bookings" element={<MyBookingsPage />} /></Route><Route path="/admin" element={<Suspense fallback={<p>Loading admin...</p>}><AdminPanel /></Suspense>} /><Route path="*" element={<Navigate to="/" replace />} /></Routes></main></>; }