import { faker } from '@faker-js/faker';
import { rest } from 'msw';

export const signupHandler = () => {
  return rest.post('/auth/v1/signup', (_, response, context) =>
    response(
      context.delay(500),
      context.status(200),
      context.json({
        access_token: faker.datatype.string(542),
        token_type: 'bearer',
        expires_in: 3600,
        refresh_token: faker.datatype.string(23),
        user: {
          id: faker.datatype.uuid(),
          aud: 'authenticated',
          role: 'authenticated',
          email: faker.internet.email(),
          email_confirmed_at: faker.date.past(),
          phone: '',
          last_sign_in_at: faker.date.past(),
          app_metadata: { provider: 'email', providers: ['email'] },
          user_metadata: {},
          identities: [
            {
              id: faker.datatype.uuid(),
              user_id: faker.datatype.uuid(),
              identity_data: {
                email: faker.internet.email(),
                sub: faker.datatype.uuid(),
              },
              provider: 'email',
              last_sign_in_at: faker.date.past(),
              created_at: faker.date.past(),
              updated_at: faker.date.past(),
            },
          ],
          created_at: faker.date.past(),
          updated_at: faker.date.past(),
        },
      })
    )
  );
};

export const authHandlers = [signupHandler()];
