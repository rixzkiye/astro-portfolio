import * as React from 'react';
import { Grid, List } from 'lucide-react'; // Menggunakan ikon dari lucide-react

interface ViewToggleProps {
  // Properti jika Anda perlu mengkomunikasikan perubahan tampilan ke komponen induk
  onViewChange?: (view: 'grid' | 'list') => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ onViewChange }) => {
  // State untuk menyimpan tampilan saat ini, default ke 'grid'
  const [currentView, setCurrentView] = React.useState<'grid' | 'list'>(() => {
      // Ambil preferensi tampilan dari localStorage jika ada
      if (typeof window !== 'undefined') {
          return (localStorage.getItem('cardViewPreference') as 'grid' | 'list') || 'grid';
      }
      return 'grid';
  });


  // Efek samping untuk menyimpan preferensi tampilan ke localStorage
  React.useEffect(() => {
      if (typeof window !== 'undefined') {
          localStorage.setItem('cardViewPreference', currentView);
          // Anda juga bisa memancarkan event kustom atau memanggil prop onViewChange di sini
          // untuk memberi tahu komponen Astro induk atau elemen lain tentang perubahan tampilan.
           if (onViewChange) {
               onViewChange(currentView);
           } else {
               // Jika tidak ada prop onViewChange, kita perlu cara lain untuk memberi tahu elemen di Astro
               // Misalnya, memanipulasi kelas pada elemen DOM global
               document.documentElement.classList.toggle('list-view', currentView === 'list');
               // Atau memancarkan event kustom
               const event = new CustomEvent('cardviewchange', { detail: { view: currentView } });
               window.dispatchEvent(event);
           }
      }
  }, [currentView, onViewChange]); // Jalankan efek ini setiap kali currentView atau onViewChange berubah


  const toggleView = () => {
    setCurrentView((prevView) => (prevView === 'grid' ? 'list' : 'grid'));
  };

  return (
    <div className="flex items-center space-x-2 p-1 border border-light-border dark:border-dark-border rounded-lg">
      <button
        onClick={() => setCurrentView('grid')}
        className={`p-2 rounded-md transition-colors ${
          currentView === 'grid'
            ? 'bg-light-accent text-white dark:bg-dark-accent'
            : 'text-light-muted hover:text-light-text dark:text-dark-muted dark:hover:text-dark-text hover:bg-light-surface dark:hover:bg-dark-surface'
        }`}
        aria-label="Show as Grid"
        disabled={currentView === 'grid'}
      >
        <Grid className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrentView('list')}
        className={`p-2 rounded-md transition-colors ${
          currentView === 'list'
            ? 'bg-light-accent text-white dark:bg-dark-accent'
            : 'text-light-muted hover:text-light-text dark:text-dark-muted dark:hover:text-dark-text hover:bg-light-surface dark:hover:bg-dark-surface'
        }`}
         aria-label="Show as List"
         disabled={currentView === 'list'}
      >
        <List className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ViewToggle;
