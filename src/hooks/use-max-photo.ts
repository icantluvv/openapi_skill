import { useEffect, useState } from 'react';

function useMaxPhotos() {
    const [maxPhotos, setMaxPhotos] = useState(10);

    useEffect(() => {
        function updateMaxPhotos() {
            const width = window.innerWidth;

            if (width < 768) {
                // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
                setMaxPhotos(4);
            } else if (width < 1280) {
                // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
                setMaxPhotos(6);
            } else {
                // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
                setMaxPhotos(10);
            }
        }

        updateMaxPhotos();
        window.addEventListener('resize', updateMaxPhotos);

        return () => {
            window.removeEventListener('resize', updateMaxPhotos);
        };
    }, []);

    return maxPhotos;
}

export default useMaxPhotos;
