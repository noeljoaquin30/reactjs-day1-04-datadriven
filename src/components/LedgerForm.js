import React, { Component } from 'react';

class LedgerForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            date: "",
            title: "",
            amount2: 0
        };
    }
    submitLedger = React.createClass({
        //let dataItems = props.items.data;
        getInitialState:function() {
            return {
              rows: ['credit', 'debit', 'balance']};
            //return {companylist:this.props.companies};
            
        },
        render: function() {
            return (
                <div className="post-container">
                <form onSubmit={this.submitLedger}>
                    <input
                        className="input"
                        type="text"
                        name="debit"
                        placeholder="Debit"
                    //value={this.state.fullname}
                    />

                    <input
                        className="input"
                        type="text"
                        name="credit"
                        placeholder="Credit"
                    //value={this.state.fullname}
                    />

                    <input
                        className="input"
                        type="text"
                        name="balance"
                        placeholder="Balance"
                    //value={this.state.fullname}
                    />

                    <div className="field">
                        <div className="control">
                            <input
                                className="input"
                                type="date"
                                ref={(date) => this.date = date}
                                //name="date"
                                placeholder="Date"
                                //value={this.state.date}
                            />
                            <input
                                className="input"
                                type="text"
                                ref={(title) => this.title = title}
                               // name="title"
                                placeholder="Title"
                                //value={this.state.title}
                            />
                            <input
                                className="input"
                                type="text"
                                ref={(amount2) => this.amount2 = amount2}
                               // name="Amount"
                                placeholder="Amount"
                            />
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                    <br></br><br></br>
                    <div className="field">
                        {/* <table className="tableLedger">
                            <td width="130">Date</td>
                            <td width="130">Title</td>
                            <td width="130">Amount</td>
                            <td width="130">Actions</td>
                            <tr></tr>

                        </table> */}
                    </div>
                    <table>
                        {dataItems.map((r) => (
                            <tr>
                                <td>{r}</td>
                            </tr>
                        ))}
                    </table>
                    </form>
                    </div>
                
            )
        },
        addRow: function() {
            var rows = this.state.rows
            rows.push('new row')
            this.setState({ rows: rows })
        }

    }
    
    {/* render() {
        return (
            <div className="post-container">
                <form onSubmit={this.submitLedger}>
                    <input
                        className="input"
                        type="text"
                        name="debit"
                        placeholder="Debit"
                    //value={this.state.fullname}
                    />

                    <input
                        className="input"
                        type="text"
                        name="credit"
                        placeholder="Credit"
                    //value={this.state.fullname}
                    />

                    <input
                        className="input"
                        type="text"
                        name="balance"
                        placeholder="Balance"
                    //value={this.state.fullname}
                    />

                    <div className="field">
                        <div className="control">
                            <input
                                className="input"
                                type="date"
                                ref={(date) => this.date = date}
                                //name="date"
                                placeholder="Date"
                                //value={this.state.date}
                            />
                            <input
                                className="input"
                                type="text"
                                ref={(title) => this.title = title}
                               // name="title"
                                placeholder="Title"
                                //value={this.state.title}
                            />
                            <input
                                className="input"
                                type="text"
                                ref={(amount2) => this.amount2 = amount2}
                               // name="Amount"
                                placeholder="Amount"
                            />
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                    <br></br><br></br>
                    <div className="field">
                        {/* <table className="tableLedger">
                            <td width="130">Date</td>
                            <td width="130">Title</td>
                            <td width="130">Amount</td>
                            <td width="130">Actions</td>
                            <tr></tr>

                        </table> */}
                    </div>

                </form>
            </div>
        )
    } */}
}

export default LedgerForm;