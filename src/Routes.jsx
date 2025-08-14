import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import LoungeCollection from './pages/lounge-collection';
import ProductDetailPage from './pages/product-detail-page';
import CheckoutSanctuary from './pages/checkout-sanctuary';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Fixed: Homepage as default route */}
          <Route path="/" element={<Homepage />} />  
          <Route path="/lounge-collection" element={<LoungeCollection />} />
          <Route path="/product-detail-page" element={<ProductDetailPage />} />
          <Route path="/checkout-sanctuary" element={<CheckoutSanctuary />} />
          {/* Removed redundant "/homepage" route (use "/" instead) */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;