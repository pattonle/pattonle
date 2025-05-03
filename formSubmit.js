    document.getElementById('feedback-form').addEventListener('submit', async function (e) {
        e.preventDefault(); // Prevent the default form submission

        const form = e.target;
        const formData = new FormData(form);

        try {
            // Send the form data to Formspree
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            // If the submission is successful, reload the page
            if (response.ok) {
                window.location.reload(); // This will refresh the current page
            }
        } catch (error) {
            console.error('Submission error:', error);
        }
    });
