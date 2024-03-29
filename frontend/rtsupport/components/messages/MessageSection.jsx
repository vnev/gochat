import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import MessageForm from './MessageForm.jsx';

class MessageSection extends Component {
	render() {
		let activeChannel = this.props.activeChannel;
		return (
			<div className='message-container panel panel-default' style={{'width': "100%"}}>
				<div className='panel-heading'>
					<strong>{activeChannel.name}</strong>
				</div>
				<div className='panel-body messages'>
					<MessageList {...this.props} />
					<MessageForm {...this.props} />
				</div>
			</div>
		)
	}
}

MessageSection.propTypes = {
	messages: React.PropTypes.array.isRequired,
	activeChannel: React.PropTypes.object.isRequired,
	addMessage: React.PropTypes.func.isRequired
}

export default MessageSection