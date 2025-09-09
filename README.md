UrbanMart (Next.js + DummyJSON)
===============================

Project Structure
-----------------
The codebase is refactored for clarity and scalability:
- Main source code is under `src/` (components, hooks, layouts, lib, pages, store, styles, types)
- Next.js routing and entry points are under `app/` (including `/cart`, `/products/[id]`, error/loading/layout files)
- Shared UI components exist in both `components/` and `src/components/` for migration compatibility
- Redux store and slices are in `store/` and `src/store/`
- Type definitions are in `types/` and `src/types/`
- Static assets are in `public/`

Refactoring Notes
-----------------
- All business logic, UI, and Redux code moved to `src/` for maintainability
- Next.js 13+ app directory structure (`app/`) is used for routing and layouts
- Legacy files may exist in root folders for compatibility

How to run locally

1. Install dependencies:

```bash
Yarn is used for dependency management. If you don't have Yarn installed, run:

```bash
npm install --global yarn
```

Then install dependencies:

```bash
yarn
```

2. Start the dev server:

```bash
yarn dev
```

3. Open http://localhost:3000.

Features
--------

- Home lists products from https://dummyjson.com/products.
- Product details at /products/[id] with add-to-cart.
- Cart at /cart with remove and totals.
- Cart persists via localStorage using Redux Toolkit store subscription.
- Header shows navigation and live cart count.

Trade-offs and notes
--------------------

- Tailwind CSS for styling with simple utility classes.
- Next Image configured for i.dummyjson.com.
- State managed with Redux Toolkit; minimal slice and localStorage persistence.

Known limitations
-----------------

- No search/pagination.
- Adds quantity in steps of 1.
- No SSR caching; fetches are uncached.
