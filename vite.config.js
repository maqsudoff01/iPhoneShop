import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

//
 // <div className={`${open ? "w-72" : "w-20"} h-screen bg-blue-400 relative`}>
//  <div>
//    <BiMenu onClick={() => setOpen(!open)} className=' cursor-pointer relative -right-3 top-9 w-7 '/>
//  </div>
//  </div>
//