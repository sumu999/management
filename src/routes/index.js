import Login from '../Page/Login';
import PageNotFound from '../Page/PageNotFound';
import DashBoard from '../Page/admin/Dashboard';
import Notices from '../Page/admin/Notices';
import List from '../Page/admin/Products/List';
import Edit from '../Page/admin/Products/Edit';

export const mainRoutes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/404",
    component: PageNotFound
  },
]

export const adminRoutes = [
  {
    path: "/admin/dashboard",
    component: DashBoard,
    title: "看板"
  },
  {
    path: "/admin/notices",
    component: Notices
  },
  {
    path: "/admin/products",
    title: "商品管理",
    component: Edit,
  },
  {
    path: "/admin/products/edit/:id",
    component: List
  },
]