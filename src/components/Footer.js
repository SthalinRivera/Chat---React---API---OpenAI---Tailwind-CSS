import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm">Desarrollado por <a href="https://github.com/SthalinRivera/" className="underline">Sthalin Rivera</a></p>
        <p className="text-sm mt-2">
          Ver más proyectos similares en{' '}
          <a href="https://my-proyects-dev.vercel.app/" className="underline">mi sitio</a>
        </p>
      </div>
    </footer>
  );
}
