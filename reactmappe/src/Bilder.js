import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import logo from './logo.svg';
import './Bilder.css';

function formatName(user){
    return user.firstName + ' ' + user.lastName;
}
const petter = {
    firstName: 'Petter',
    lastName: 'Foss'
}
const header = React.createElement(
    'h1',
    {className: 'Greeting'},
    'Hello World'
)
$(window).on('scroll', function () {
    console.log("A-yU");
});


function tick() {
    const element = (
        <div>
            <h1>
                Klokke
            </h1>
            <h2>
                It is {new Date().toLocaleTimeString()}
            </h2>
        </div>
    );
    return element;
}

class BildeLinje extends Component
{

    render()
    {
        if(this.props.type==0)
        {
            return <div className="blueLine">
                <img src={this.props.url} alt="k"/>
                <p>{this.props.desc}</p>
            </div>
        }
        else
        {
            return <div className={"purpleLine"}>
                <img src={this.props.url} alt="a" />
                <p>{this.props.desc}</p>
            </div>
        }

    }
}
const picsData=[["Bernt.jpg","Bernt"], ["Bernt1.jpg", "The beautiful machine"],["Bernt2.jpg", "Razor sharp blades"],["Bernt3.png","Fast as lightning"], ["Bernt4.jpg", "Not afraid to get naked"]];
var index=0;
const pics = picsData.map((data)=> <BildeLinje  url={data[0]} desc={data[1]} type={(index++)%2} />);
class Bilder extends Component {
    constructor(){
        super()
        this.state = {klipper: "Nei"}
    }
    handleButtonClick(){
        if (this.state.klipper === "Ja") {
            this.setState({klipper: "Nei"})
        }else {
            this.setState({klipper: "Ja"})
        }
    }
    render() {

        return (

            <div className="App">
                <div className="App-header">

                    <h2>Bilder </h2><h3>av</h3><h1><b>Bernt</b></h1><h3>Scroll down for nudes</h3>
                </div>
                <div className="Body">
                    {pics}
                </div>

            </div>
        );
    }
}

export default Bilder;