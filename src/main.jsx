import React, { Component } from 'react';

class main extends Component {

    state = {
        string: '',
        reverseStr: '',
        pushing: '',
        poping: '',
    };

    getstring = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            pushing:'Creating queue',
            reverseStr:'',
            poping:''

        });
    }

    render() {

        const reverse = (e) => {
            let newArray;
            let unshiftstr;

            e.preventDefault();

            if (this.state.string) {

                newArray = this.state.string.split('');
                unshiftstr = newArray.shift();

                this.setState({
                    string: (newArray.join('')),
                    poping: this.state.poping + unshiftstr, 
                    pushing:'Remaining in Queue, ' + newArray.length,
                })
            }
            else {
                this.setState({
                    pushing: ': : :Queue is empty, create a new queue',
                })
            }

        }
        return (
            <main>
                <h1>Queue implimentation</h1>
                <form action="" onChange={this.getstring} onSubmit={this.captureinput}>

                    <input type="text" name='string' onChange={this.getstring} />
                </form>
                <button onClick={reverse}>click to de-queue</button>
                <p>queue content : : {this.state.string}</p>
                <p>{this.state.reverseStr}{this.state.poping}  {this.state.pushing}</p>

            </main>
        );
    }
}

export default main;