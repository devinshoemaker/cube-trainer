import { createClient } from '@supabase/supabase-js';

const deleteUser = async (
  email: string,
  supabaseUrl: string,
  supabaseServiceRoleKey: string
) => {
  const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);
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

deleteUser(process.argv[2], process.argv[3], process.argv[4]);
