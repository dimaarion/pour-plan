import './App.css';

function App() {
  return (
    <div className="container">
      <table className = "table">
        <thead>
          <tr>
            <td colSpan="5"><textarea placeholder = "Название организации" className = "form-control"/></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
