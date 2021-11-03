import React from 'react'
import { send } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as htmlToImage from 'html-to-image';

function SendEmail(props) {

	function sendMessage(data) {
		send(
			'service_geuav2k',
			'template_d55x08c',
			data,
			'user_BKs8vkmJxKjXSiI2xTqya'
		)
		.then((response) => {
			toast.success('Compliance Report Sent!', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});
			console.log('SUCCESS!', response.status, response.text);
		})
		.catch((err) => {
			toast("Failed");
			console.log('FAILED...', err);
		})
	}

  const onSubmit = (e) => {
    e.preventDefault();

		let node = document.getElementById(props.view === 'teams' ? 'team-graph' : 'user-graph');

		htmlToImage.toJpeg(node, { quality: 0.40 })
  		.then(function (dataUrl)  {
				const toSend = {
					from_name: 'Surveil',
					to_name: props.view,
					message: `<img src="${dataUrl}" alt="report" />`,
					reply_to: 'compliance@surveil.com',
				};
			sendMessage(toSend);
		  })
		  .catch(function (error) {
		    console.error('oops, something went wrong!', error);
		  });
  };

	return (
		<>
			<form onSubmit={onSubmit}>
				<button className="btn btn-secondary" type="submit">
					Generate Compliance Report
				</button>
				<ToastContainer
					position="top-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					/>
			</form>
		</>
	)
}

export default SendEmail


