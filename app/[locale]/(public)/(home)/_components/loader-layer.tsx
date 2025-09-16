'use client';

import { useLoadingLayerBackground } from '#/hooks/use-loading-layer-background';

function LoaderLayer() {
    const isLoading = useLoadingLayerBackground();

    if (!isLoading) {
        return null;
    }

    return (
        <div className="bg-background fixed inset-0 z-[10000] flex items-center justify-center">
            <div className="border-primary h-12 w-12 animate-spin rounded-full border-4 border-solid border-t-transparent"></div>
        </div>
    );
}

export default LoaderLayer;
