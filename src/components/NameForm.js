import React, { Component } from 'react';

class NameForm extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    textOnChange (e) {
        alert('The value is: ' + e.target.value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.name2.value);
        //alert('The value is: ' + this.name.value);
    }

    render() {
        return (
            <div className="post-container">
                <form onSubmit={this.handleSubmit}>
                    <label>Name1x</label>
                    <input type="text" ref={(name2) => this.name2 = name2} />
                    <input type="submit" value="Submit" />
                </form>

                <br/>

                <input placeholder="Ex. bind" type="text" onChange={this.textOnChange}/>
            </div>
        );
    }
}

export default NameForm;