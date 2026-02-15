import type { Gallery } from '~/api/models/types';

import { mockGallery } from '~/api/mocks/data';

function getGallery(): Promise<Gallery[]> {
    return Promise.resolve(mockGallery);
}

export default getGallery;
