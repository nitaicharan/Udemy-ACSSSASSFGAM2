import {BREAKPOINT} from '@angular/flex-layout';

const PRINT_BREAKPOINTS = [
    {
        alias: 'xl',
        mediaQuery: 'screen and (max-width: 1200px)',
        overlapping: true
    },
    {
        alias: 'lg',
        mediaQuery: 'screen and (max-width: 1100px)',
        overlapping: true
    },
    {
        alias: 'md',
        mediaQuery: 'screen and (max-width: 900px)',
        overlapping: true
    },
    {
        alias: 'sm',
        mediaQuery: 'screen and (max-width: 600px)',
        overlapping: true
    },
    {
        alias: 'xs',
        mediaQuery: 'screen and (max-width: 500px)',
        overlapping: true
    },
];

export const CustomBreakPointsProvider = {
    provide: BREAKPOINT,
    useValue: PRINT_BREAKPOINTS,
    multi: true
};
