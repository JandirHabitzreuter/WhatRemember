import { ROLES_KEY } from 'utils/consts';

import { SetMetadata } from '@nestjs/common';
import { Type_user } from '@prisma/client';

export const Roles = (...roles: Type_user[]) => SetMetadata(ROLES_KEY, roles);
