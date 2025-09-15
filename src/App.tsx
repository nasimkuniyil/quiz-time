import { useTheme } from "./context/ThemeProvider"

function App() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <>
      <button onClick={toggleTheme}>change theme</button>
      <h1 className="text-2xl text-[var(--color-primary)] font-black p-3">Quiz <span className="text-[var(--color-secondary)]">Time</span></h1>
      <p>{isDark ? "dark" : "light"}</p>
    </>
  )
}

export default App
