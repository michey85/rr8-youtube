import type { RouteConfig } from '@react-router/dev/routes';

export default [
  {
    index: true,
    file: './pages/Landing.tsx',
  },
  {
    path: 'about',
    file: './pages/About.tsx',
  },
  {
    path: 'coins/:coinId',
    file: './pages/Details.tsx',
  },
] satisfies RouteConfig;
