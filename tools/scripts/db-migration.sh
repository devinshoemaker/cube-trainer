# Generate a migration file from the current DB schema

echo What is the name of the migration?

read MIGRATION_NAME

npx supabase db diff "$MIGRATION_NAME" -f "$MIGRATION_NAME"
