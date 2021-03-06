import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'login', component: () => import('pages/Index.vue') },
      // { path: 'index', component: () => import('pages/Index.vue') },
      {
        path: 'sign-up-employer',
        component: () => import('pages/sign-up-employer.vue')
      },
      {
        path: 'sign-up-jobSeeker',
        component: () => import('pages/sign-up-jobSeeker.vue')
      },
      { path: 'employer', component: () => import('pages/employer.vue') },
      { path: 'admin', component: () => import('pages/admin.vue') },
      {
        path: 'js',
        component: () => import('pages/job-seeker.vue')
      },

      {
        path: 'js-postings',
        component: () => import('pages/JSJobPostings.vue')
      },
      { path: 'js-profile', component: () => import('pages/JSProfile.vue') },
      { path: 'addjob', component: () => import('pages/addjob.vue') },
      { path: 'issues', component: () => import('pages/EIssues.vue') },
      { path: 'addpayment', component: () => import('pages/addpayment.vue') },
      { path: 'listofjobs', component: () => import('pages/listofjobs.vue') },
      {
        path: 'forgotPassword',
        component: () => import('pages/forgotPassword.vue')
      },
      {
        path: 'js-reports',
        component: () => import('pages/JSReports.vue')
      },
      {
        path: 'e-reports',
        component: () => import('pages/EReports.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
