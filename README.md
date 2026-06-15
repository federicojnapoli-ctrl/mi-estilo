# Cápsula — Reglas de estilo y combinaciones de color

> Documento de referencia para alimentar la app de outfits. Contiene: identidad de estilo, paleta, reglas de combinación de color y reglas de vestimenta. Listo para pegar en el chat de desarrollo.

---

## 1. Identidad de estilo

- **Estilo:** minimalista, oscuro, monocromático, comfort-forward.
- **Fórmula diaria:** polo/remera + jeans + buzo o canguro + zapatillas.
- **Calzado formal:** solo para ocasiones especiales.
- **Contexto oficina:** casual (3 días oficina, 2 home office).

---

## 2. Paleta

**Colores permitidos:**
`navy` · `carbón` · `negro` · `gris medio` · `oliva profundo` · `off-white` · `denim índigo`

**Excluidos (no usar nunca):**
camel, marrón, blazers, botas, calces entallados, estampas, logos, rayas, cualquier cosa estridente.

---

## 3. Reglas de combinación de color

Formato pensado para lógica de app (`base → compatibles`).

| Color base | Combina con |
|---|---|
| Negro | carbón, gris, off-white, oliva, denim |
| Carbón | negro, gris, off-white, navy, oliva, denim |
| Gris medio | todo |
| Off-white | todo |
| Navy | gris, off-white, carbón, denim |
| Oliva | negro, carbón, gris, off-white, denim |
| Denim | todo (salvo denim del mismo tono) |

**Comodines (van con todo):** gris medio, off-white, denim.

**Combinaciones a evitar / mirar con cuidado:**
- `navy + negro` → se ven como "casi combina pero no". No pegarlos arriba/abajo directo.
- `navy + oliva` → dos oscuros que compiten. Usable, no preferido.
- `denim + denim` mismo tono → efecto canadian tuxedo.

### Versión estructurada (para código)

```json
{
  "combinaciones": {
    "negro":     ["carbon", "gris", "offwhite", "oliva", "denim"],
    "carbon":    ["negro", "gris", "offwhite", "navy", "oliva", "denim"],
    "gris":      ["negro", "carbon", "offwhite", "navy", "oliva", "denim"],
    "offwhite":  ["negro", "carbon", "gris", "navy", "oliva", "denim"],
    "navy":      ["gris", "offwhite", "carbon", "denim"],
    "oliva":     ["negro", "carbon", "gris", "offwhite", "denim"],
    "denim":     ["negro", "carbon", "gris", "offwhite", "navy", "oliva"]
  },
  "evitar": [
    ["navy", "negro"],
    ["navy", "oliva"],
    ["denim", "denim"]
  ]
}
```

---

## 4. Reglas de vestimenta minimalistas

1. **Máximo 3 colores por outfit.** Idealmente 2 + un neutro.
2. **Anclar en un neutro.** Cada conjunto lleva al menos una pieza de negro, carbón, gris u off-white.
3. **Un solo color de carácter por outfit.** El oliva es el único acento; nunca dos acentos juntos.
4. **Capas de oscuro a off-white, no al revés.** Las capas exteriores van iguales o más oscuras que las internas (o off-white como excepción limpia).
5. **Nada de estampas, logos visibles, rayas ni calces entallados.** Siempre.
6. **Outerwear obligatorio en cada conjunto** (canguro, buzo o campera según ocasión).
7. **Zapatillas por defecto.** Zapato formal solo si la ocasión lo pide explícitamente.
8. **Si dudás, restá.** Menos piezas, menos colores, más neutro.
9. **Denim cuenta como neutro**, pero nunca denim sobre denim del mismo tono.
10. **Repetir está bien.** Un buen conjunto se usa muchas veces; la rotación prioriza cobertura, no novedad.

---

*Fin del documento de referencia.*
