import Products from './components/Products/Products';
import Sidebar from './components/Sidebar/Sidebar';

export default function Home() {
  return (
    <main style={{ marginTop: '160px', display: 'flex', justifyContent: 'space-between' }}>
      <>
        <Sidebar />
        <Products />
      </>
    </main>
  )
}