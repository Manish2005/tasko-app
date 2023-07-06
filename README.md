# Tasko

## Table of contents

- [General info](#general-info)
- [Tech Stack](#tech-stack)
- [Setup](#setup)

## General info

An app that allow users to create, edit, delete and manage their tasks.

## Tech Stack

This project is created with:

- REACT
- HTML
- CSS
- JSON Server
- Vite

## Setup

1. Make sure that [nvm](https://github.com/nvm-sh/nvm) and [npm](https://www.npmjs.com/) are installed globally

2. Install the correct version of Node running the following command in the root directory

   ```shell
   nvm install
   ```

3. Install the dependencies

   ```shell
   npm install
   ```

4. Retrieve the local data with the help of json-server

   ```shell
   npx json-server --watch data/db.json
   ```

5. Run the app locally

   ```shell
   npm run dev
   ```

Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.

The page will reload if you make any edits.<br>
You will also see any lint errors in the console.
