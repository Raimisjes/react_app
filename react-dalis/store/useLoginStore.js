// useLoginStore.js
import { create } from 'zustand';

const useLoginStore = create((set) => ({
  // Initial form values
  email: '',
  password: '',

  // Initial error states
  emailError: '',
  passwordError: '',
  isSubmitted: false,

  // Actions to update form fields
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
    let emailError = '';
    let passwordError = '';

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
            emailError: '',
            passwordError: '',
            isSubmitted: true
        };
    } else {
        return {
            emailError,
            passwordError,
            isSubmitted: false
        };
    }
  }),
}));

export default useLoginStore;
