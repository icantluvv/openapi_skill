import type { Gallery } from '../../models/types';

import { mockGallery } from '../../mocks/data';

function getGallery(): Promise<Gallery[]> {
    return Promise.resolve(mockGallery);
}

export default getGallery;
