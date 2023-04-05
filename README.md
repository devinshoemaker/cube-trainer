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

Start local Supabase instance:

```bash
npm run supabase:start
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

## Running E2E Tests

```bash
nx e2e
```

## Database Migrations

Make database changes using [Supabase Studio](http://localhost:54323)

Generate migrations:

```bash
npx supabase db diff <migration_name> -f <migration_name>
```
