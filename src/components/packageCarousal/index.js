import React from 'react';
import './carousal.css';

class PackageCarousal extends React.Component {
    constructor() {
        super();
        this.counter = null;
        this.state = {
            currentActiveIndex: 1
        }
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
        this.computeNextIndex = this.computeNextIndex.bind(this);
        this.initiateSlide = this.initiateSlide.bind(this);
    }
    componentDidMount() {
        this.initiateSlide();
    }
    computeNextIndex() {
        const noOfSlides = this.props.children.length;
        const currentIndex = this.state.currentActiveIndex;
        this.setState({
            currentActiveIndex: (currentIndex === noOfSlides - 1) ? 0 : currentIndex + 1
        });
    }
    initiateSlide() {
        this.counter = setInterval(this.computeNextIndex, this.props.timer);
    }
    slideLeft() {
        clearInterval(this.counter);
        this.computeNextIndex()
        setTimeout(this.initiateSlide, this.props.timer*2);
    }
    slideRight() {
        clearInterval(this.counter);
        this.computeNextIndex()
        setTimeout(this.initiateSlide, this.props.timer*2);
    }
    render() {
        return (<div className="carousal">
            {this.props.showArrows && <div className="leftArrow" onClick={this.slideLeft}></div>}
            <div className="carousalBody">
                {this.props.children.map((slide, index) => {
                    return React.cloneElement(slide, {
                        key: index,
                        className: (this.state.currentActiveIndex === index) ? 'active' : ''
                    });
                })}
            </div>
            {this.props.showArrows && <div className="rightArrow" onClick={this.slideRight}></div>}
        </div>)
    }
};

export default PackageCarousal;
