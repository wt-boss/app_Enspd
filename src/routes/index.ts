import { lazy } from 'react';
const Listusers = lazy(() => import('../pages/ListingUsers'));
const ListingdetailRessourceUtilisation= lazy(() => import('../pages/detailRessourceUtilisation'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const ReserverRessource = lazy(() => import('../pages/AddElements/ReserverRessource'));
const editPension = lazy(() => import('../pages/EditElements/pension'));
const editRessource = lazy(() => import('../pages/EditElements/Ressource'));
const editUser = lazy(() => import('../pages/EditElements/user'));
const Settings = lazy(() => import('../pages/Settings'));
const user = lazy(() => import('../pages/AddElements/user'));
const Ressource = lazy(() => import('../pages/AddElements/Sanction'));
const TableRessources= lazy(() => import('../pages/ListingSanction'));
const ListingPresence = lazy(() => import('../pages/ListingPresence'));

const coreRoutes = [
  {
    path: '/ListingUsers',
    title: 'ListingUsers',
    component: Listusers,
  },
  {
    path: '/AddElements/user',
    title: 'Add User',
    component: user,
  },
  {
    path: '/AddElements/ReserverRessource',
    title: 'Add ReserverRessource',
    component: ReserverRessource,
  },
  {
    path: '/pages/EditElements/pension',
    title: 'Edit Pension',
    component: editPension,
  },
  {
    path: '/pages/EditElements/Ressource',
    title: 'Edit Ressource',
    component: editRessource,
  },
  {
    path: '/pages/EditElements/user',
    title: 'Edit User',
    component: editUser,
  },
  {
    path: '/AddElements/Ressource',
    title: 'Add Ressource',
    component: Ressource,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/ListingRessources',
    title: 'ListingRessources',
    component: TableRessources,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/pages/detailRessourceUtilisation',
    title: 'detailRessourceUtilisation',
    component: ListingdetailRessourceUtilisation,
  },
  {
    path: '/ListingPresence',
    title: 'ListingPresence',
    component: ListingPresence,
  },
];

const routes = [...coreRoutes];
export default routes;
