import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
   plugins: [react()],
  base: '/NLW-Journey-React-Planejador-de-viagem/', // Substitua 'nome-do-repositorio' pelo nome real do seu repositório
});
