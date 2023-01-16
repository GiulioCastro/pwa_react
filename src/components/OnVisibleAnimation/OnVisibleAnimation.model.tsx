import React from 'react';

import { MotionProps } from "framer-motion";

export interface IOnVisibleAnimationViewProps extends MotionProps {
    children: React.ReactNode;
    setRef: (ref: React.Ref<unknown> | HTMLDivElement | null) => void;
    isVisible: boolean;
}

export interface IOnVisibleAnimationProps extends MotionProps {
    children: React.ReactNode;
    rootMargin?: string;
}