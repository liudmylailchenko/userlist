import React from 'react';
import stc from 'string-to-color';

class App extends React.Component {
  state = {
    input: '',
    users: [],
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.input === '') {
      return;
    }
    const nextUsers = [...this.state.users, this.state.input];

    this.setState({
      users: nextUsers,
      input: '',
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <form onSubmit={this.handleSubmit}>
              <div className="input-group mb-3 input-group-lg">
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  onChange={this.handleChange}
                  value={this.state.input}
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="submit">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-6">
            {this.state.users.map((user) => (
              <div className="user">
                <div
                  className="user-avatar"
                  style={{ background: stc(user[0].toUpperCase()) }}
                >
                  {user[0].toUpperCase()}
                </div>
                {user}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
