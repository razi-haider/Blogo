// Purpose: Contact page component
import React, { useState, useEffect } from 'react';

// Contact page component
function Contact() {
	// Form data
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState({});

	// Handle form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		setIsSubmitting(true);
	};

	// Handle form data changes
	useEffect(() => {
		if (isSubmitting) {
			// Validate form data
			let errors = {};

			// Validate name
			if (name.trim() === '') {
				errors.name = 'Please enter your name.';
			}

			// Validate email
			if (email.trim() === '') {
				errors.email = 'Please enter your email address.';
			} else if (!isValidEmail(email)) {
				errors.email = 'Please enter a valid email address.';
			}

			// Validate message
			if (message.trim() === '') {
				errors.message = 'Please enter your message.';
			}
			setErrors(errors);
			setIsSubmitting(false);

			// If no errors, submit form data 
			if (Object.keys(errors).length === 0) {
				const formData = {
					name: name,
					email: email,
					message: message
				};

				// Send form data to server (this is dummy since we are not to implement a server side functionality)
				fetch('/submit-form', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(formData)
				})
					.then(response => {
						alert('Thank you for contacting us!');
						setName('');
						setEmail('');
						setMessage('');
					})
					.catch(error => alert(error.message));
			}
		}
	}, [isSubmitting, name, email, message]);

	// Validate email address
	const isValidEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	// Render contact page
	return (
		<>
			<p className="text-bg-dark text-center p-1"> Contact BlogO </p>
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-8 mx-auto">
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								{/* Name label & input */}
								<label htmlFor="name">Name</label>
								<input type="text" className="form-control" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
								{errors.name && <div className="invalid-feedback">{errors.name}</div>}
							</div>
							<div className="form-group">
								{/* Email label & input */}
								<label htmlFor="email">Email</label>
								<input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
								{errors.email && <div className="invalid-feedback">{errors.email}</div>}
							</div>
							<div className="form-group">
								{/* Message label & input */}
								<label htmlFor="message">Message</label>
								<textarea className="form-control" id="message" name="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
								{errors.message && <div className="invalid-feedback">{errors.message}</div>}
							</div>
							{/* Submit button */}
							<button type="submit" className="btn btn-primary mt-2">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

// Export contact page component
export default Contact;
