import Dashboard from './components/Dashboard'
import Chat from './components/Chat'
import Map from './components/Map'

function App() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 4fr", gridGap: 20 }}>
      <Dashboard />
    </div>
  );
}

export default App;
