import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from "./App.tsx";
import { assert, isDefined } from './shared';
import './index.css'

const root = document.getElementById('root')
assert(isDefined(root), 'no root')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
