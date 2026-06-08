# Cápsula 👕 — Outfits Minimalistas

App PWA que lee tu inventario desde **Vestuario_Plan** (Google Sheets) y genera outfits por ocasión. Solo lectura, instalable desde Chrome — igual que *Varios* y *mi-plan*.

## Subir a GitHub y publicar (igual que tus otras apps)

1. Creá un repo nuevo (ej. `mi-estilo`), público.
2. **Add file → Upload files** y subí estos 5 archivos:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
3. **Settings → Pages → Branch: `main` / root → Save**.
4. Esperá un minuto. Tu app queda en `https://federicojnapoli-ctrl.github.io/mi-estilo/`.

## Publicar tu hoja como CSV (una sola vez)

1. Abrí **Vestuario_Plan** en Google Sheets.
2. **Archivo → Compartir → Publicar en la Web**.
3. Elegí la pestaña del inventario y formato **.csv**.
4. **Publicar** y copiá la URL (termina en `output=csv`).

## Instalar desde Chrome

1. Abrí la URL de GitHub Pages en Chrome.
2. Aparece el botón **Instalar** (en la barra de direcciones o en el banner de la app).
3. Instalada, abrí → **Configurar hoja** (abajo) → pegá la URL CSV → **Guardar**.

## Uso

- **Filtros por ocasión**: Oficina, Casual, Invierno, Verano, Deportivo.
- Cada outfit incluye una **recomendación de abrigo** compatible.
- **Gestión**: sugiere compras para completar el armario y detecta redundancias.
- **↻** (arriba a la derecha): fuerza relectura. Por defecto cachea 24 h.

## Archivos

```
mi-estilo/
├── index.html      # app completa (UI + motor de outfits)
├── manifest.json   # metadata PWA (nombre, íconos, colores)
├── sw.js           # service worker (instalable + offline)
├── icon-192.png
└── icon-512.png
```

## Notas

- **Solo lectura**: no escribe en la hoja. El CSV publicado evita todo OAuth.
- Las prendas marcadas *SACAR*, *ropa de casa* o *nicho* quedan fuera de los outfits.
- El CSV de Google se lee siempre fresco (no se cachea offline); los archivos de la app sí, para que abra sin conexión.
