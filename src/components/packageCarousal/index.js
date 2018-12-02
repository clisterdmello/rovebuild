import React from 'react';
import './carousal.css';

class PackageCarousal extends React.Component {
    constructor() {
        super();
        this.counter = null;
        this.state = {
            currentActiveIndex: 0
        }
        this.computeNextIndex = this.computeNextIndex.bind(this);
        this.initiateSlide = this.initiateSlide.bind(this);
        this.pauseSlider = this.pauseSlider.bind(this);
    }
    componentDidMount() {
       if(this.props.timer>0){
           this.initiateSlide();
       }
    }
    computeNextIndex(side = 'right') {
    const noOfSlides = this.props.children.length;
    let currentActiveIndex = this.state.currentActiveIndex;

    if (side === 'left') {
        currentActiveIndex--;        
    } else {
        currentActiveIndex++;        
    }
    if (currentActiveIndex === -1) {
        currentActiveIndex = noOfSlides - 1;
    }
    if (currentActiveIndex === noOfSlides) {
        currentActiveIndex = 0;
    }
    this.setState({currentActiveIndex});
}
initiateSlide() {
    if(!this.counter){
        this.counter = setInterval(this.computeNextIndex, this.props.timer);
    }
}
slideTo(direction) {    
    if(this.props.timer>0){
        this.pauseSlider();
        setTimeout(this.initiateSlide, this.props.timer * 2);
    }
    this.computeNextIndex(direction);
}
pauseSlider(){
    clearInterval(this.counter);
    this.counter = null;
}
render() {
    return (<div className="carousal">
        {this.props.showArrows && <div className="leftArrow" onClick={this.slideTo.bind(this,'left')}><span>{'<'}</span></div>}
        {this.props.showArrows && <div className="rightArrow" onClick={this.slideTo.bind(this,'right')}><span>{'>'}</span></div>}
        <div className="carousalBody">
            {this.props.children.map((slide, index) => {
                return React.cloneElement(slide, {
                    key: index,
                    className: (this.state.currentActiveIndex === index) ? 'active' : ''
                });
            })}
        </div>
    </div>)
}
};

export default PackageCarousal;
