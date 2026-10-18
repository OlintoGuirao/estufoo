import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { BlockPage } from './pages/BlockPage'
import { HomePage } from './pages/HomePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bloco/:blockId" element={<BlockPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
