export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { username, password } = req.body;
  
      // Perform authentication logic here
      // Verify username and password against your database or authentication service
  
      if (username === 'example' && password === 'password') {
        // Successful login
        res.status(200).json({ message: 'Login successful' });
      } else {
        // Failed login
        res.status(401).json({ message: 'Login failed' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }