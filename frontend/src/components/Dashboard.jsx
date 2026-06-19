import { Package, TrendingUp, AlertTriangle, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Özet Ekranı</h1>
        <p style={{ color: 'var(--text-muted)' }}>Eco Az Energy depo durumuna genel bakış.</p>
      </header>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '1rem', borderRadius: '12px' }}>
            <Package size={28} color="var(--primary)" />
          </div>
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Toplam Ürün Çeşidi</p>
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>142</h3>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '12px' }}>
            <TrendingUp size={28} color="var(--secondary)" />
          </div>
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Aylık Giriş (Adet)</p>
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>+1,250</h3>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1rem', borderRadius: '12px' }}>
            <AlertTriangle size={28} color="var(--danger)" />
          </div>
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Azalan Stoklar</p>
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>8</h3>
          </div>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="glass-panel" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ margin: 0 }}>Son Hareketler</h3>
          <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Tümünü Gör</button>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>İşlem</th>
                <th>Ürün</th>
                <th>Adet</th>
                <th>Tarih</th>
                <th>Kullanıcı</th>
                <th>Açıklama</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="badge in"><ArrowDownRight size={12} style={{marginRight:'4px'}}/> GİRİŞ</span></td>
                <td>Güneş Paneli 400W Monokristal</td>
                <td style={{ color: 'var(--secondary)', fontWeight: 600 }}>+50</td>
                <td>19 Haziran 2026</td>
                <td>Admin User</td>
                <td style={{ color: 'var(--text-muted)' }}>Tedarikçiden yeni alım yapıldı.</td>
              </tr>
              <tr>
                <td><span className="badge out"><ArrowUpRight size={12} style={{marginRight:'4px'}}/> ÇIKIŞ</span></td>
                <td>Inverter 5kW</td>
                <td style={{ color: 'var(--danger)', fontWeight: 600 }}>-2</td>
                <td>18 Haziran 2026</td>
                <td>Admin User</td>
                <td style={{ color: 'var(--text-muted)' }}>Merkez proje sahasına gönderildi.</td>
              </tr>
              <tr>
                <td><span className="badge in"><ArrowDownRight size={12} style={{marginRight:'4px'}}/> GİRİŞ</span></td>
                <td>Solar Kablo 6mm (Rulo)</td>
                <td style={{ color: 'var(--secondary)', fontWeight: 600 }}>+10</td>
                <td>17 Haziran 2026</td>
                <td>Ahmet Y.</td>
                <td style={{ color: 'var(--text-muted)' }}>Depoya iade edildi.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
