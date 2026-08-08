import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.post('/register', register);
router.post('/login', login);

// Example protected route for testing
router.get('/me', authenticate, (req, res) => {
  res.json({ message: 'You have accessed a protected route', user: (req as any).user });
});

export default router;
