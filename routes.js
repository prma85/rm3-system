// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';
import Forum from '@material-ui/icons/Forum';
import BubbleChart from '@material-ui/icons/BubbleChart';
import People from '@material-ui/icons/People';
import Notifications from '@material-ui/icons/Notifications';
import Settings from '@material-ui/icons/Settings';
import PostAdd from '@material-ui/icons/PostAdd';
import Folder from '@material-ui/icons/FolderOpen';

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: Dashboard,
    layout: '/admin',
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    icon: Person,
    layout: '/admin',
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: Notifications,
    layout: '/admin',
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    icon: Folder,
    layout: '/admin',
  },
  {
    path: '/risks',
    name: 'Risks',
    icon: BubbleChart,
    layout: '/admin',
  },
  {
    path: '/change-requests',
    name: 'Change Requests',
    icon: PostAdd,
    layout: '/admin',
  },
  {
    path: '/messages',
    name: 'Messages',
    icon: Forum,
    layout: '/admin',
  },
  {
    path: '/team-members',
    name: 'Team Members',
    icon: People,
    layout: '/admin',
  },

  {
    path: '/settings',
    name: 'Settings',
    icon: Settings,
    layout: '/admin',
  },
];

export default dashboardRoutes;
