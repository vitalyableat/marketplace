import { FC, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { RouteNames } from './router.types';

const CatalogPage = lazy(() => import('@pages/catalog'));
const ProductPage = lazy(() => import('@pages/product'));
const OrdersPage = lazy(() => import('@pages/orders'));

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteNames.CATALOG} element={<CatalogPage />} />
        <Route path={RouteNames.PRODUCT} element={<ProductPage />} />
        <Route path={RouteNames.ORDERS} element={<OrdersPage />} />
        <Route path="*" element={<Navigate to={RouteNames.CATALOG} replace />} />
      </Routes>
    </BrowserRouter>
  );
};
