import './styles/main.scss'

import {lazy, Suspense} from 'react'
import {Route, Routes} from "react-router-dom";
import {LoaderIcon} from "lucide-react";

const IndexPage = lazy(() => import('./pages/index.tsx'));
const NotFoundPage = lazy(() => import('./pages/404.tsx'));

function App() {
  return (
    <div className="base-page-layout">
      <Suspense fallback={<LoaderIcon />}>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
