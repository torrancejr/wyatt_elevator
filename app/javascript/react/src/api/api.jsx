import axios from 'axios';

const baseURL = 'http://localhost:3000';

const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
if (csrfToken) {
    api.defaults.headers.common['X-CSRF-Token'] = csrfToken;
}

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwt');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// api/api.js
export const getCurrentUser = async () => {
    try {
        const response = await api.get('/api/current_user');
        return response.data; // Ensure this includes { admin: true/false } among other fields
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
        localStorage.removeItem('jwt');
        return true;
    } catch (error) {
        console.error('Error during logout:', error);
        throw error;
    }
};

export const fetchInquiries = async () => {
    try {
        const response = await api.get('/api/inquiries');
        return response.data;
    } catch (error) {
        console.error('Error fetching inquiries:', error);
        throw error;
    }
};

export default api;



