import { useEffect } from 'react';

import { useHeaderStore } from '@/store/header-store';

export const useHeaderScroll = () => {
    const setIsScroll = useHeaderStore(state => state.setIsScroll);

    useEffect(() => {
        function handleScroll() {
            setIsScroll(window.scrollY > 30);
        }

        function checkWidthAndBind() {
            if (window.innerWidth >= 1280) {
                window.addEventListener('scroll', handleScroll);
                // Проверим сразу при добавлении слушателя
                handleScroll();
            } else {
                setIsScroll(false); // сбросим состояние, если ширина меньше 1280
            }
        }

        // Навешиваем слушатель только если ширина >=1280
        checkWidthAndBind();

        // Для обновления слушателя при ресайзе — удалим и добавим заново
        function handleResize() {
            window.removeEventListener('scroll', handleScroll);
            checkWidthAndBind();
        }

        window.addEventListener('resize', handleResize);

        // Очистка
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsScroll]);
};
