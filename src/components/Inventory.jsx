import { useState } from 'react';
import { Search, Plus, Edit2, Trash2 } from 'lucide-react';

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  // Mock Data
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Güneş Paneli 400W Monokristal', brand: 'EcoPower', quantity: 150, price: '120$', status: 'Yeterli' },
    { id: 2, name: 'Güneş Paneli 550W Half-Cut', brand: 'SunTech', quantity: 45, price: '160$', status: 'Yeterli' },
    { id: 3, name: 'Inverter 5kW Akıllı', brand: 'Growatt', quantity: 8, price: '450$', status: 'Kritik' },
    { id: 4, name: 'Solar Jel Akü 100Ah', brand: 'Lexron', quantity: 24, price: '180$', status: 'Yeterli' },
    { id: 5, name: 'Solar Kablo 6mm (100m)', brand: 'Hes Kablo', quantity: 12, price: '80$', status: 'Yeterli' },
  ]);

  const filteredInventory = inventory.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fade-in" style={{ position: 'relative', height: '100%' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Depo Envanteri</h1>
          <p style={{ color: 'var(--text-muted)' }}>Depodaki tüm ürünleri görüntüleyin ve yönetin.</p>
        </div>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => setShowAddModal(true)}>
          <Plus size={20} />
          Yeni Ürün Ekle
        </button>
      </header>

      {/* Controls */}
      <div className="glass-panel" style={{ padding: '1rem', marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input 
            type="text" 
            className="form-control" 
            placeholder="Ürün adı veya marka ara..." 
            style={{ width: '100%', paddingLeft: '3rem' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select className="form-control" style={{ width: '200px' }}>
          <option value="">Tüm Kategoriler</option>
          <option value="panel">Güneş Panelleri</option>
          <option value="inverter">İnverterler</option>
          <option value="battery">Aküler</option>
          <option value="cable">Kablolar</option>
        </select>
      </div>

      {/* Data Table */}
      <div className="glass-panel" style={{ padding: '1.5rem' }}>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Ürün Adı</th>
                <th>Marka</th>
                <th>Adet</th>
                <th>Birim Fiyat</th>
                <th>Durum</th>
                <th style={{ textAlign: 'right' }}>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.map(item => (
                <tr key={item.id}>
                  <td style={{ color: 'var(--text-muted)' }}>#{item.id}</td>
                  <td style={{ fontWeight: 500 }}>{item.name}</td>
                  <td>{item.brand}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>
                    <span className={`badge ${item.status === 'Kritik' ? 'out' : 'in'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <button style={{ background: 'transparent', color: 'var(--text-muted)', padding: '0.5rem', marginRight: '0.5rem' }} title="Düzenle">
                      <Edit2 size={18} />
                    </button>
                    <button style={{ background: 'transparent', color: 'var(--danger)', padding: '0.5rem' }} title="Sil">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredInventory.length === 0 && (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                    Aradığınız kriterlere uygun ürün bulunamadı.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal - Add Product (Mock) */}
      {showAddModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50
        }}>
          <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '500px', padding: '2rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Yeni Ürün Ekle</h2>
            <div className="form-group">
              <label>Ürün Adı</label>
              <input type="text" className="form-control" placeholder="Örn: Güneş Paneli 400W" />
            </div>
            <div className="form-group">
              <label>Marka</label>
              <input type="text" className="form-control" placeholder="Örn: EcoPower" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Başlangıç Adeti</label>
                <input type="number" className="form-control" placeholder="0" />
              </div>
              <div className="form-group">
                <label>Birim Fiyatı ($)</label>
                <input type="text" className="form-control" placeholder="0.00" />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem' }}>
              <button className="btn-secondary" onClick={() => setShowAddModal(false)}>İptal</button>
              <button className="btn-primary" onClick={() => setShowAddModal(false)}>Kaydet</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Inventory;
