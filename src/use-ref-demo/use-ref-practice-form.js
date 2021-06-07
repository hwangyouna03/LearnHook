import React, { useState, useEffect, useRef } from "react"
import ReactDOM from "react-dom"

/*
    요구 사항
    1. 모든 input 요소에 ref 연결해주기
    2. 버튼 누르면 해당되는 input 요소에 focus() 메소드 호출해서 입력 가능 상태로 만들어주기
    3. Submit 버튼을 누르면 콘솔에 모든 input 요소의 값을 출력하도록 하기
    4. Reset 버튼을 누르면 모든 input 요소의 값을 ''로 초기화하기
*/

function Form() {
    const nameInputRef = useRef()
    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    const handleSubmit = e => {
        e.preventDefault()

        // 3. Submit 버튼을 누르면 콘솔에 모든 input 요소의 값을 출력하도록 하기
    }

    const handleReset = () => {
        // 4. Reset 버튼을 누르면 모든 input 요소의 값을 ''로 초기화하기
    }

    // 1. 모든 input 요소에 ref 연결해주기
    return (
        <>
            <label>
                Name:
                <input type="text" placeholder="name" />
            </label>
            <label>
                Email:
                <input type="text" placeholder="email" />
            </label>
            <label>
                Password:
                <input type="password" placeholder="password" />
            </label>

            <hr />

            {/* 2. 버튼 누르면 해당되는 input 요소에 focus() 메소드 호출해서 입력 가능 상태로 만들어주기 */}
            <button>
                Focus Name Input
            </button>
            <button>
                Focus Email Input
            </button>
            <button>
                Focus Password Input
            </button>

            <hr />

            <button type="submit">Submit</button>
            <button>Reset</button>
        </>
    )
}

ReactDOM.render(<Form />, document.getElementById("root"))