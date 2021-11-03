import React from 'react'
import { send } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SendEmail(props) {

	const toSend = {
		from_name: 'Surveil',
    to_name: props.view,
    message: props.view ==='teams' ? `teams` : `users`,
    reply_to: 'compliance@surveil.com',
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_geuav2k',
      'template_d55x08c',
      toSend,
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


