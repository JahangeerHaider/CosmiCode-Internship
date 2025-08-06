function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const skills = document.querySelectorAll('input[name="skills"]:checked');


  if (name === '') {
    alert('Please enter your name.');
    return false;
  }


  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

 
  if (password.length < 6) {
    alert('Password must be at least 6 characters.');
    return false;
  }


  if (!gender) {
    alert('Please select your gender.');
    return false;
  }

 
  if (skills.length === 0) {
    alert('Please select at least one skill.');
    return false;
  }

  alert('Form submitted successfully!');
  return true;
}
