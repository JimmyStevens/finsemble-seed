/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import React from "react";

/**
 * Toast component. Displays a success/failure message when an app is added/removed
 * @param {object} props Component props
 * @param {string} props.installationActionTaken String containing the action that occurred
 */
const Toast = props => {
	let classes = "toast-content";
	let icon = null, messageContent = null;

	switch (props.installationActionTaken) {
		case "add":
			messageContent = "Application Added";
			classes += " success";
			break;
		case "remove":
			messageContent = "Application Removed";
			classes += " error";
			break;
		default:
			classes += " not-shown";
			break;
	}

	if (messageContent !== null) {
		return (
			<div className={classes}>
				<span className='toast'>
					<i className={icon} />
					&nbsp;&nbsp;{messageContent}
				</span>
			</div>
		);
	} else {
		return null;
	}
}

export default Toast;