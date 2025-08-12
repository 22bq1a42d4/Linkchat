import { useState, useEffect } from 'react';
import api from '../utils/api';

const useFetchUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // TEMPORARY MOCK DATA FOR TESTING DASHBOARD COMPONENTS
      // TODO: Remove this mock and restore API call after testing
      const mockUser = {
        id: 'test-user-123',
        firstName: 'Sarah',
        lastName: 'Johnson',
        email: 'sarah.johnson@example.com',
        headline: 'Senior Frontend Developer | React Specialist | AI Enthusiast',
        profilePicture: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        skills: [
          { name: 'React', level: 95, category: 'technical' },
          { name: 'JavaScript', level: 90, category: 'technical' },
          { name: 'TypeScript', level: 85, category: 'technical' },
          { name: 'Node.js', level: 80, category: 'technical' },
          { name: 'Leadership', level: 88, category: 'soft' },
          { name: 'Communication', level: 92, category: 'soft' }
        ]
      };
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser(mockUser);
      
      // Original API call (commented out for testing)
      // const response = await api.get('/api/me');
      // setUser(response.data);
    } catch (err) {
      console.error('Failed to fetch user:', err);
      setError(err.response?.data?.message || 'Failed to fetch user data');
      
      // If unauthorized, clear user data
      if (err.response?.status === 401) {
        setUser(null);
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await api.post('/api/logout');
      setUser(null);
      window.location.href = '/';
    } catch (err) {
      console.error('Logout failed:', err);
      // Force redirect even if logout fails
      window.location.href = '/';
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user,
    loading,
    error,
    refetch: fetchUser,
    logout
  };
};

export default useFetchUser;