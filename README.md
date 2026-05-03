# Seesaw Simulation — Ahmet Serhat Şahin

A physics-based seesaw simulation built with pure HTML, CSS, and JavaScript.

### File Structure

The project is split into four JavaScript files, each with a single responsibility:

- `seesaw.js` — physics calculations only (torque, angle)
- `ui.js` — DOM manipulation only (rendering objects, rotating plank, updating info panel)
- `storage.js` — localStorage read/write only
- `main.js` — wires everything together, handles user events

### State Management

All placed objects are stored in `leftObjects` and `rightObjects` arrays. On every click, the state is saved to localStorage so the simulation persists across page refreshes.

### UX Details

- A preview ball follows the cursor to show the next object's weight and color before placing it
- Objects fall onto the plank with a drop animation
- The plank rotates after the object lands, not instantly, to make the cause and effect clear
- A reset button clears the board without removing the plank label

## Trade-offs & Limitations

- **Preview alignment** — when the plank is tilted at steep angles, the preview ball's position may slightly misalign since it lives in a non-rotating container.
- **Performance** — with many objects, the DOM will grow. No object limit is enforced.
- **Fixed plank width** — the pivot is assumed to be at exactly 250px (center of 500px plank). This is hardcoded in a few places.

## AI Assistance

This project was developed with the assistance of Claude Code (Anthropic). The AI helped with:

- Explaining JavaScript concepts (event listeners, DOM manipulation, localStorage, CSS transforms)
- Reviewing code for bugs and inconsistencies

All code was written and typed by me. The AI acted as a teaching assistant and code reviewer throughout the process.

## How to Run

Open `index.html` in any modern browser. No build tools or dependencies required.
