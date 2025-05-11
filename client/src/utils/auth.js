export async function checkAuth() {
    const response = await fetch('http://localhost:5000/check-auth', {
      method: 'GET',
      credentials: 'include',
    });
    const data = await response.json();
    return data.authenticated;
  }
  