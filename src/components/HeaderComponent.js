import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                   
                    <div className="bg-black text-white text-center"><h1>Student Management App</h1></div>
                   
                </header>
            </div>
        )
    }
}

export default HeaderComponent