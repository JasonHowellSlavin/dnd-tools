import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dailyStats: [],
            dailyNav: 'daily-stats',
            overallNav: 'overall-stats',
            nav: [
                {path: '/', title: 'Home'},
                {path: '/overall-stats', title: 'Overall Stats'},
                {path: '/todays-stats', title: "Today's Stats"}
            ]
        };
    //     this.postRequest = this.postRequest.bind(this);
    //     this.createPost = this.createPost.bind(this);
    //     this.checkForEmptyFields = this.checkForEmptyFields.bind(this);
    //     this.resetFields = this.resetFields.bind(this);
    //     this.editStat = this.editStat.bind(this);
    // }
    //
    // checkForEmptyFields() {
    //     let inputs = document.querySelector('#input-form').querySelectorAll('input');
    //     let dataEntered = [];
    //
    //     inputs.forEach(input => dataEntered.push(input.value !== ""));
    //     return dataEntered.includes(false);
    // }
    //
    // resetFields () {
    //     let inputs = document.querySelector('#input-form').querySelectorAll('input');
    //
    //     inputs.forEach(input => input.value = '');
    // }
    //
    // editStat(requestObject) {
    //     console.log(requestObject);
    //     let dateObj = new Date();
    //     let dateString = `${dateObj.getUTCFullYear()}-${dateObj.getUTCMonth() + 1}-${dateObj.getDate()}`;
    //
    //     (async () => {
    //         const update = await fetch('/update/edit', {
    //             method: 'POST',
    //             headers: {
    //               'Accept': 'application/json',
    //               'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(requestObject),
    //         });
    //
    //         const dailyStats = await fetch('/stats/daily-stats', {
    //             method: 'POST',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({date: dateString}),
    //         })
    //         .then(response => response.json());
    //
    //         const stats = await fetch('/stats')
    //         .then(response => response.json())
    //         .catch(err => console.log(err));
    //
    //         this.setState({data: stats, dailyStats: dailyStats});
    //     })();
    // }
    //
    // createPost() {
    //     let postObject = {};
    //
    //     let form = document.querySelector('#input-form');
    //     let dateObj = new Date();
    //     let dateString = `${dateObj.getUTCFullYear()}-${dateObj.getUTCMonth() + 1}-${dateObj.getDate()}`;
    //     let timeString = `${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;
    //
    //     form.querySelectorAll('input').forEach((input) => {
    //         postObject[input.getAttribute('id')] = input.value;
    //     })
    //
    //     postObject['date'] = dateString;
    //     postObject['time'] = timeString;
    //
    //     return postObject;
    // }
    //
    // postRequest() {
    //     if (this.checkForEmptyFields()) {
    //         console.warn('Empty fields are present, please fill out all fields');
    //         return;
    //     } else {
    //         let postObject = this.createPost();
    //
    //         (async () => {
    //             const rawResponse = await fetch('/update', {
    //                 method: 'POST',
    //                 headers: {
    //                   'Accept': 'application/json',
    //                   'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify(postObject),
    //             });
    //
    //             const content = await rawResponse.json();
    //
    //         })().then(() => {
    //             (async () => {
    //                 let dateObj = new Date();
    //                 let dateString = `${dateObj.getUTCFullYear()}-${dateObj.getUTCMonth() + 1}-${dateObj.getDate()}`;
    //
    //                 const rawResponse = await fetch('/stats/daily-stats', {
    //                     method: 'POST',
    //                     headers: {
    //                         'Accept': 'application/json',
    //                         'Content-Type': 'application/json'
    //                     },
    //                     body: JSON.stringify({date: dateString}),
    //                 });
    //
    //                 let dailyStats = await rawResponse.json();
    //                 this.setState({dailyStats: dailyStats});
    //             })();
    //         }).then(() => {
    //             this.resetFields();
    //         });
    //     }
    }

    componentDidMount() {

        (async () => {
        //     const daily = await fetch('/stats/daily-stats', {
        //     method: 'POST',
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({date: dateString}),
        //   });
        //
            console.log('heyo')
          const stats = await fetch('/stats')
          .then(response => {
              return response.json();
          })
          .catch(err => console.log(err));

          await this.setState({data: stats});
        })();
    }

    render() {
        return (
                <div className="App">
                    <h1>Hello</h1>
                    {this.state.data.map((event) => {
                        return (
                            <div>
                                <p>{event.description}, {event.score}, {event.summary}</p>
                            </div>
                        )
                    })}
                </div>
        );
    }
}

export default App;
