import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { PageView } from './pages/PageView';
import { ArticleView } from './pages/ArticleView';
import { MigrationReportView } from './pages/MigrationReportView';
import './styles.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<PageView />} />
            <Route path="/kampagne" element={<PageView />} />
            <Route path="/artikel/:id" element={<ArticleView />} />
            <Route path="/migration-report" element={<MigrationReportView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
