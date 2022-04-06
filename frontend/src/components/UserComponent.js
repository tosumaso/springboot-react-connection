import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    UserService.getUsers().then((response) => {
      console.log(response);
      this.setState({ users: response.data })
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center" >Users List</h1>
        <button type="button" className="btn btn-primary">Primary</button>
        <table className='table table-striped'>
          <tbody>
            {
              this.state.users.map((user) => {
                return (
                  <>
                    <tr>
                      <th scope="row" key={user.id}>{user.id}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                    </tr>
                  </>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserComponent