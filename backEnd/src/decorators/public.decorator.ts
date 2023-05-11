import { SetMetadata } from '@nestjs/common';
import { IS_PUBLIC_KEY } from 'utils/consts';

export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);