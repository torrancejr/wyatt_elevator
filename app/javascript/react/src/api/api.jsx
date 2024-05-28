import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production'
    ? 'https://wyatt-53e54f3152e0.herokuapp.com'  // Replace with your production URL
    : 'http://localhost:3000';

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});
// Get CSRF token from meta tag
const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
if (csrfToken) {
    api.defaults.headers.common['X-CSRF-Token'] = csrfToken;
}

// Add a request interceptor to include the token
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwt');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const getCurrentUser = async () => {
    try {
        const response = await api.get('/current_user');
        return response.data;
    } catch (error) {
        console.error('Error fetching current user:', error);
        throw error;
    }
};

export const login = async (email, password) => {
    try {
        const response = await api.post('/login', {
            user: {
                email,
                password
            }
        });
        const token = response.headers['authorization'].split(' ')[1];
        localStorage.setItem('jwt', token);
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const logout = async () => {
    try {
        await api.delete('/logout', {
            headers: {
                'X-CSRF-Token': csrfToken
            }
        });
        localStorage.removeItem('jwt'); // Remove JWT from localStorage
        return true;
    } catch (error) {
        console.error('Error during logout:', error);
        throw error;
    }
};

export default api;


