// useRegistrationStore.js
import { create } from 'zustand';

const useRegistrationStore = create((set) => ({
  // Initial form values
  name: '',
  email: '',
  password: '',

  // Initial error states
  nameError: '',
  emailError: '',
  passwordError: '',
  isSubmitted: false,

  // Actions to update form fields
  setName: (name) => set(() => ({ name })),
  setEmail: (email) => set(() => ({ email })),
  setPassword: (password) => set(() => ({ password })),

  // Validate email
  validateEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Form validation and submission
  submitForm: () => set((state) => {
    let valid = true;

    // Reset errors
    let nameError = '';
    let emailError = '';
    let passwordError = '';

    // Validate name
    if (!state.name) {
      nameError = 'Name is required.';
      valid = false;
    }

    // Validate email
    if (!state.email) {
      emailError = 'Email is required.';
      valid = false;
    } else if (!state.validateEmail(state.email)) {
      emailError = 'Please enter a valid email address.';
      valid = false;
    }

    // Validate password
    if (!state.password) {
      passwordError = 'Password is required.';
      valid = false;
    } else if (state.password.length < 6) {
      passwordError = 'Password must be at least 6 characters long.';
      valid = false;
    }

    // Set errors and mark form as submitted if valid
    if (valid) {
        return {
            nameError: '',
            emailError: '',
            passwordError: '',
            isSubmitted: true
        };
    } else {
        return {
            nameError,
            emailError,
            passwordError,
            isSubmitted: false
        };
    }
  }),
}));

export default useRegistrationStore;
