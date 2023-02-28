create table "public"."user" (
    "id" uuid not null,
    "created_at" timestamp with time zone default now(),
    "email" text not null
);


alter table "public"."user" enable row level security;

CREATE UNIQUE INDEX user_email_key ON public."user" USING btree (email);

CREATE UNIQUE INDEX user_pkey ON public."user" USING btree (id);

alter table "public"."user" add constraint "user_pkey" PRIMARY KEY using index "user_pkey";

alter table "public"."user" add constraint "user_email_key" UNIQUE using index "user_email_key";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
begin
  insert into public.user (id, email)
  -- Reference the newly created `id`
  values (new.id, new.email);
  return new;
end;

-- Return the function
$function$
;

CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION handle_new_user();

create policy "Users can insert their own profile"
on "public"."user"
as permissive
for insert
to public
with check ((auth.uid() = id));



