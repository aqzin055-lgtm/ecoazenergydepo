import { useState } from 'react';
import { Sun, ShieldAlert } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onLogin(username, password);
    if (!success) {
      setError('Kullanıcı adı veya şifre hatalı!');
    }
  };

  return (
    <div className="app-container" style={{ alignItems: 'center', justifyContent: 'center' }}>
      <div className="glass-panel animate-fade-in" style={{ padding: '3rem', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{ background: 'var(--primary)', padding: '1rem', borderRadius: '50%', boxShadow: '0 0 20px rgba(245,158,11,0.5)' }}>
            <Sun size={40} color="#000" />
          </div>
        </div>
        
        <h2 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Eco Az Energy</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Depo Yönetim Sistemi</p>

        {error && (
          <div style={{ background: 'rgba(239,68,68,0.1)', color: 'var(--danger)', padding: '0.75rem', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
            <ShieldAlert size={18} />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ textAlign: 'left' }}>
            <label>Kullanıcı Adı</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="admin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group" style={{ textAlign: 'left' }}>
            <label>Şifre</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem', display: 'flex', justifyContent: 'center', padding: '1rem' }}>
            Sisteme Giriş Yap
          </button>
        </form>

        <p style={{ marginTop: '2rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Eco Az Energy. Tüm hakları saklıdır.
        </p>
      </div>
    </div>
  );
};

export default Login;
