import { IS_PUBLIC_KEY } from 'utils/consts';

import { SetMetadata } from '@nestjs/common';

export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
