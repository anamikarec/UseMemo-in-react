import "./styles.css";
import WithMemo from "./WithMemo";
import WithOutMemo from "./withoutUseMemo";

export default function App() {
  return (
    <div className="App">
      <div>
        <h2>WithOut UseMemo</h2>
        <WithOutMemo />
      </div>
      <div>
        <h2>With Memo</h2>
        <WithMemo />
      </div>
    </div>
  );
}
