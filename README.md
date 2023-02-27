# CubeTrainer

## Setup

Install dependencies:

```bash
npm install
```

Configure environment variables:

```bash
cp apps/cube-trainer/.env.example apps/cube-trainer/.env
```

## Running the App

Start local Supabase instance:

```bash
npx supabase start
```

Serve the application:

```bash
nx serve cube-trainer
```

## Running E2E Tests

```bash
nx e2e cube-trainer-e2e
```

## Database Migrations

Make database changes using [Supabase Studio](http://localhost:54323)

Generate migrations:

```bash
supabase db diff <migration_name> -f <migration_name>
```
