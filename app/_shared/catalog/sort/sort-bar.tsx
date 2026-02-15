'use client';
import { useCallback, useEffect } from 'react';

import type { DeepNonNullable } from '@/types/utilities';
import type { CategoryProps } from '~/lib/models/types';

import DefaultSortBar from '@/_shared/catalog/sort/default-sort-bar';
import MobileSortBar from '@/_shared/catalog/sort/mobile-sort-bar';
import { useSortStore } from '@/store/sort-bar-store';

function SortBar({ categories }: DeepNonNullable<CategoryProps>) {
    const { setCategories } = useSortStore();

    const saveCategories = useCallback(() => {
        setCategories(categories);
    }, [categories, setCategories]);

    useEffect(() => {
        saveCategories();
    }, [saveCategories]);

    return (
        <>
            <DefaultSortBar />
            <MobileSortBar />
        </>
    );
}

export default SortBar;
