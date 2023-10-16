import NotFound from "../../pages/public/NotFound";
import Dashboard from "../../pages/public/Dashboard";
import Settings from "../../pages/public/Settings";
import Unauthorized from "../../pages/public/Unauthorized";
import EcommerceProductsPage from "../../pages/e-commerce/products";

export default function PublicRoutes() {
  return [
    {
      name: 'Dashboard',
      path: '/',
      components: <Dashboard />
    },
      {
      name: 'Product',
      path: '/product',
      components: <EcommerceProductsPage />
    },
        {
      name: 'Settings',
      path: '/settings',
      components: <Settings/>
    },
      {
      name: 'not found',
      path: '/not-found',
      components: <NotFound />
    },
        {
      name: 'not found',
      path: '*',
      components: <NotFound/>
    }

,
   {
      name: 'unauthorized',
      path: '/unauthorized',
      components: <Unauthorized />
    }

  ]
}