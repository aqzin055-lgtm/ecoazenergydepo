import { History } from 'lucide-react';

const Logs = () => {
  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>İşlem Kayıtları</h1>
        <p style={{ color: 'var(--text-muted)' }}>Sistemdeki tüm giriş-çıkış ve değişiklik hareketleri.</p>
      </header>

      <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
        <History size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
        <h2>Kayıtlar Yükleniyor...</h2>
        <p>Tüm geçmiş işlemler burada listelenecektir.</p>
      </div>
    </div>
  );
};

export default Logs;
