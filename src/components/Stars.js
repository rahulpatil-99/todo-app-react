import React from 'react';

const styleForStars={
    'margin-left':'10px'
}

export class Stars extends React.Component{
    generateStars(){
        let stars=[];
        for(let i=1;i<=5;i++){
            if(i<=this.props.stars){
                stars.push(<span onClick={()=>this.updateStar(i)} >&#x2b50;</span>);
            } else {
                stars.push(<span onClick={()=>this.updateStar(i)} >&#x2606;</span>);
            };
        };
        return stars;
    }
    
    updateStar(countOfStars){
        const { captureStar } = this.props;
        this.setState({stars:countOfStars});
        captureStar(countOfStars);
    }

    render(){
        let allStars = this.generateStars();
        return (
            <span style={styleForStars}>
                {allStars}
            </span>
        );
    }
}