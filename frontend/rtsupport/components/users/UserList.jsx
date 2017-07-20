import React, {Component} from 'react';
import User from './User.jsx';

class UserList extends Component {
	render() {
		return (
			<ul>{
				this.props.users.map( user => {
					return (
						<User 
							key={user.id}
							user={user}
						/>
					)
				})
			}</ul>
		)
	}
}

React.propTypes = {
	users: React.PropTypes.array.isRequired
}

export default UserList