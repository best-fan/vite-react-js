import { createBrowserRouter } from 'react-router';
import HomeView from '../pages/Index/index';
import AboutView from '../pages/About/index';
const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeView,
  },
  {
    path: '/about',
    // element: '<div> About</div>',
    Component: AboutView,
  },
]);

export default router;
