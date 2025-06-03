document.getElementById('biodataForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {
    name: formData.get('name'),
    dob: formData.get('dob'),
    email: formData.get('email'),
    degree: formData.get('degree'),
    institution: formData.get('institution'),
    year: formData.get('year'),
    hobbies: formData.getAll('hobbies')
  };

  console.log('Form Data Submitted:', data);
  alert('Form submitted successfully!');
});
