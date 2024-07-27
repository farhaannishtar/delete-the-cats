# Trash the Cats

## Screenshot

<img width="1440" alt="Screenshot 2024-07-27 at 2 20 53 PM" src="https://github.com/user-attachments/assets/17e4cd79-9669-4ff2-9a59-229e0fe1eb76">

## About

This application fetches 10 cat images and stores them in client-side state. Users can delete images by clicking the trash icon.

Live site: https://trash-the-cats.vercel.app/

Loom: https://www.loom.com/share/d2a41e0661c04a3cbe74f826f97b0766

## Technology Stack

- **Frontend**: React, Vite, TypeScript, TailwindCSS
- **Data Fetching and State Management**: Tanstack Query (f.k.a. React Query)
- **Backend**: N/A
- **APIs**: [The Cat API](https://api.thecatapi.com/v1/images/search?limit=10)
- **Version Control**: GitHub
- **Code Editor**: VSCode

## Features and Functionality

- Used useFetchCats.ts custom hook for fetching and state management with Tanstack Query.
- App and trashcan backgrounds change colors automatically in sync.
- Trashcan icon rotates 45 degrees slowly on hover.
- Clicking trashcan icon deletes cat images from client-side state
  
## Installation and Setup Instructions

### Clone the project repository by running:
```
git clone https://github.com/your-username/trash-the-cats.git
cd trash-the-cats
```
### Inside the project directory, install the required npm packages:

```
npm install
```

### Then run 

```
npm run dev
```
