import { createContext, useContext, useState } from 'react';
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [member, setMember] = useState(null); const [token, setToken] = useState(''); const [role, setRole] = useState('member');
  async function login(email) { const response = await fetch('/api/v1/auth/login', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ email }) }); const data = await response.json(); if (!response.ok) throw new Error(data.message || 'Login failed'); setMember(data.member); setToken(data.token); setRole(data.role); }
  function logout() { setMember(null); setToken(''); setRole('member'); }
  return <AuthContext.Provider value={{ member, token, role, login, logout }}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);