import React from 'react'

export class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <p>
              Your name is: {this.props.name}, your age is: {this.props.age}
            </p>
            <div>
              <h4>Hoobies:</h4>
              <ul>
                {
                  this.props.user.hobbies.map(
                    (hobby, i) => <li key={i}>{hobby}</li>
                  )
                }
              </ul>
            </div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
