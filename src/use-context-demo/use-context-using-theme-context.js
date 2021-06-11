import React, { useState, useContext } from "react"
import ReactDOM from "react-dom"
import ThemeContext from "./contexts/ThemeContext"

const ThemeConsumeComponent = (props) => {
    // Context를 통해서 전달받은 값과 세터 대입
    const { theme, setTheme } = useContext(ThemeContext)

    const themeStyle = theme === 'light' ?
        { color: 'black', backgroundColor: 'white', padding: '20px' } :
        { color: 'white', backgroundColor: 'black', padding: '20px' }

    return (
        <div style={themeStyle}>
            <h1>ThemeConsumeComponent { theme === 'light' ? '🌞' : '🌙' }</h1>
            <p>currentTheme : { theme }</p>
            <button onClick={() => { setTheme('light') }}>light</button>
            <button onClick={() => { setTheme('dark') }}>dark</button>
        </div>
    )
}

function App() {
    // Provider를 통해 전달할 값과 세터 생성
    const [ theme, setTheme ] = useState('light')

    return (
        <ThemeContext.Provider value={ { theme, setTheme } }>
            {/* useState 훅을 이용하여 반환받은 값과 세터 함수를 Provider를 통해 Context 값으로 전달 */}
            <ThemeConsumeComponent />
        </ThemeContext.Provider>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));