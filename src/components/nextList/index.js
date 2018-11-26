import React from 'react';
import './nextlist.css';

class NextList extends React.Component {
    constructor() {
        super();
        this.state = {
            currentNumber: 1
        };
        this.content = [
            "",
            ["POINT1", "POINT1"],
            ["POINT1", "POINT1"],
            ["POINT1", "POINT4"],
            ["POINT1", "POINT1"],
            ["POINT1", "POINT1"],
            ["POINT1", "POINT1"],
            ["POINT1", "POINT1"],
        ]

    }
    changeSelectedIndex(index) {
        this.setState({
            currentNumber: index
        });
    }
    computePagination() {
        let index = 1;
        let pagination = [];

        while (index < this.props.max) {
            if (index === this.state.currentNumber) {
                pagination.push(<p key={index} className="active" onClick={this.changeSelectedIndex.bind(this, index)}><span>Day</span><span>{index}</span></p>)
            } else {
                pagination.push(<p key={index} onClick={this.changeSelectedIndex.bind(this, index)}><span>Day</span><span>{index}</span></p>)
            }
            index++;
        }
        return pagination;
    }

    render(props) {
        return (<div className="listing">
            <div className="listingTabs">
                {this.computePagination()}
            </div>

            <div className="listingDetails">
                <ul>
                    {this.content[this.state.currentNumber].map((point, index) => <li key={index}>{point}</li>)}
                </ul>
            </div>
        </div>)
    }
};

export default NextList;
