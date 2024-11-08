import express from 'express';

const router = express.Router();

const modulesRoute = [
  {
    path: '/auth',
    route: userRoutes,
  },
];
modulesRoute.forEach((route) => router.use(route.path, route.route));

export default router;
