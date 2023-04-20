import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import Schedule from './components/Schedule';
import Users from './components/Users';
import Settings from './components/Settings';
import Contact from './components/Contact';
import Help from './components/Help';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="transactions" element={<Transactions />} />
                    <Route path="schedule" element={<Schedule />} />
                    <Route path="users" element={<Users />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="help" element={<Help />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
                <Route Route path="login" element={<div>This is login page</div>} />
            </Routes>
        </Router>
    );
}
export default App;
