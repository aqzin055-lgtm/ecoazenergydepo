import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, History, LogOut, Sun } from 'lucide-react';

const Sidebar = ({ onLogout }) => {
  return (
    <aside className="glass-panel" style={{ width: '280px', margin: '1rem', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 2rem)' }}>
      
      {/* Brand */}
      <div style={{ padding: '2rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ background: 'var(--primary)', padding: '0.5rem', borderRadius: '12px' }}>
          <Sun size={24} color="#000" />
        </div>
        <div>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--text-main)', margin: 0 }}>Eco Az</h2>
          <span style={{ fontSize: '0.75rem', color: 'var(--primary)' }}>Energy Systems</span>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <NavLink 
          to="/" 
          style={({isActive}) => ({
            display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.875rem 1rem', 
            borderRadius: '8px', color: isActive ? 'var(--primary)' : 'var(--text-muted)',
            background: isActive ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
            fontWeight: isActive ? 600 : 500, transition: 'all 0.2s'
          })}
        >
          <LayoutDashboard size={20} />
          Özet Ekranı
        </NavLink>

        <NavLink 
          to="/inventory" 
          style={({isActive}) => ({
            display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.875rem 1rem', 
            borderRadius: '8px', color: isActive ? 'var(--primary)' : 'var(--text-muted)',
            background: isActive ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
            fontWeight: isActive ? 600 : 500, transition: 'all 0.2s'
          })}
        >
          <Package size={20} />
          Depo Envanteri
        </NavLink>

        <NavLink 
          to="/logs" 
          style={({isActive}) => ({
            display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.875rem 1rem', 
            borderRadius: '8px', color: isActive ? 'var(--primary)' : 'var(--text-muted)',
            background: isActive ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
            fontWeight: isActive ? 600 : 500, transition: 'all 0.2s'
          })}
        >
          <History size={20} />
          İşlem Kayıtları
        </NavLink>
      </nav>

      {/* Footer / User */}
      <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
            AD
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600 }}>Admin User</p>
            <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>Depo Sorumlusu</p>
          </div>
        </div>
        <button 
          onClick={onLogout}
          style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)', transition: 'all 0.2s' }}
          onMouseOver={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'}
        >
          <LogOut size={18} />
          Çıkış Yap
        </button>
      </div>

    </aside>
  );
};

export default Sidebar;
