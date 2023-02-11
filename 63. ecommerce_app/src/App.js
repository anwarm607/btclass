import AuthWrapper from "./context";
import Router from "./routes";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <div className="App">
      <AuthWrapper>
        <GlobalStyle />
        <Router />
      </AuthWrapper>
    </div>
  );
}

export default App;
