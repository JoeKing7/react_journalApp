import React from 'react'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import { store } from './store/store'

// Reanudar en video 18 section 21
// token de depuración: FFFC7BBD-1382-47E6-8C6B-6B1BE3EC4443
// CLAVE DE SITIO WEB: 6Ld6UpcdAAAAAPtb7MKn3kaHhOGQaUS-YZCLE2GG
// CLAVE SECRETA:  6Ld6UpcdAAAAAAwAf9f3AyT9SIagHra3qI_8b2Cb
const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
export default App
