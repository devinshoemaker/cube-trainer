import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  process.env.SUPABASE_URL!,
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
export const deleteUser = async (email: string) => {
  const result = await supabaseAdmin
    .from('user')
    .select('id')
    .eq('email', email);

  if (result.error) {
    throw new Error(result.error.message);
  }

  if (!result.data || result.data.length === 0) {
    return;
  }

  const user = result.data[0];
  await supabaseAdmin.auth.admin.deleteUser(user.id);
  await supabaseAdmin.from('user').delete().eq('id', user.id);
};
