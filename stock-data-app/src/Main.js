import React from 'react';

class Main extends React.Component {
    render() {

        return (
            <div>
                <h1>Stock Data for Today</h1>
                <ul>
                    <li>Microsoft: {this.props.microsoftvalue}</li>
                    <li>Twitter: {this.props.twittervalue}</li>
                    <li>Amazon: {this.props.amazonvalue}</li>
                    <button onClick={this.props.increase}>Increase Stock Values</button>
                    <button onClick={this.props.decrease}>Decrease Stock Values</button>
                    <button onClick={this.props.jumble}>Jumble The Values</button>
                </ul>
                <ul>
                    {
                        this.props.values.map((items) => {
                            if (items.value <= 100) {
                                return <li className="Low">{items.company}: {items.value}</li>
                            }
                            else if (items.value > 100 && items.value <= 300) {
                                return <li className="Medium">{items.company}: {items.value}</li>
                            }
                            else {
                                return <li className="High">{items.company}: {items.value}</li>
                            }
                        })
                    }
                    <button onClick={this.props.increase2}>Increase Stock Values</button>
                    <button onClick={this.props.decrease2}>Decrease Stock Values</button>
                    <button onClick={this.props.jumble2}>Jumble The Values</button>
                </ul>
            </div>
        )
    }
}

export default Main;