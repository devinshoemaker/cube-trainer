# CubeTrainer

## Setup

Install dependencies:

```bash
npm install
```

Configure environment variables:

```bash
cp apps/cube-trainer/.env.example apps/cube-trainer/.env
cp apps/cube-trainer/.env.e2e.example apps/cube-trainer/.env.e2e
```

## Running the App

Starting a local Supabase instance will stand up all the necessary Docker containers, run the database migrations, and seed the database.

```bash
npx supabase start
```

### Web

```bash
nx serve
```

### iOS

```bash
nx build
npx cap sync ios
npx cap open ios
```

## Run Tests

```bash
nx test
```

## Database Migrations

Make database changes using [Supabase Studio](http://localhost:54323)

Generate migrations:

```bash
npx supabase db diff <migration_name> -f <migration_name>
```
