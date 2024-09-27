import { Routes } from './src/routes';
import { AuthProvider } from './src/contexts/auth';
import Toasts from './src/components/toasts';

export default function App() {
  return (
    <AuthProvider>
      <Routes /> 
      <Toasts />
    </AuthProvider>
  )
}
