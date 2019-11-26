<template>
    <div
        data-grid-cell
        :class="{
            'hidden': initial < 1,
            'w-1/12': initial == 1,
            'w-2/12': initial == 2,
            'w-3/12': initial == 3,
            'w-4/12': initial == 4,
            'w-5/12': initial == 5,
            'w-6/12': initial == 6,
            'w-7/12': initial == 7,
            'w-8/12': initial == 8,
            'w-9/12': initial == 9,
            'w-10/12': initial == 10,
            'w-11/12': initial == 11,
            'w-full': initial > 11,

            'xs:hidden': xs < 1,
            'xs:w-1/12': xs == 1,
            'xs:w-2/12': xs == 2,
            'xs:w-3/12': xs == 3,
            'xs:w-4/12': xs == 4,
            'xs:w-5/12': xs == 5,
            'xs:w-6/12': xs == 6,
            'xs:w-7/12': xs == 7,
            'xs:w-8/12': xs == 8,
            'xs:w-9/12': xs == 9,
            'xs:w-10/12': xs == 10,
            'xs:w-11/12': xs == 11,
            'xs:w-full': xs > 11,

            'sm:hidden': sm < 1,
            'sm:w-1/12': sm == 1,
            'sm:w-2/12': sm == 2,
            'sm:w-3/12': sm == 3,
            'sm:w-4/12': sm == 4,
            'sm:w-5/12': sm == 5,
            'sm:w-6/12': sm == 6,
            'sm:w-7/12': sm == 7,
            'sm:w-8/12': sm == 8,
            'sm:w-9/12': sm == 9,
            'sm:w-10/12': sm == 10,
            'sm:w-11/12': sm == 11,
            'sm:w-full': sm > 11,

            'md:hidden': md < 1,
            'md:w-1/12': md == 1,
            'md:w-2/12': md == 2,
            'md:w-3/12': md == 3,
            'md:w-4/12': md == 4,
            'md:w-5/12': md == 5,
            'md:w-6/12': md == 6,
            'md:w-7/12': md == 7,
            'md:w-8/12': md == 8,
            'md:w-9/12': md == 9,
            'md:w-10/12': md == 10,
            'md:w-11/12': md == 11,
            'md:w-full': md > 11,

            'lg:hidden': lg < 1,
            'lg:w-1/12': lg == 1,
            'lg:w-2/12': lg == 2,
            'lg:w-3/12': lg == 3,
            'lg:w-4/12': lg == 4,
            'lg:w-5/12': lg == 5,
            'lg:w-6/12': lg == 6,
            'lg:w-7/12': lg == 7,
            'lg:w-8/12': lg == 8,
            'lg:w-9/12': lg == 9,
            'lg:w-10/12': lg == 10,
            'lg:w-11/12': lg == 11,
            'lg:w-full': lg > 11,

            'xl:hidden': xl < 1,
            'xl:w-1/12': xl == 1,
            'xl:w-2/12': xl == 2,
            'xl:w-3/12': xl == 3,
            'xl:w-4/12': xl == 4,
            'xl:w-5/12': xl == 5,
            'xl:w-6/12': xl == 6,
            'xl:w-7/12': xl == 7,
            'xl:w-8/12': xl == 8,
            'xl:w-9/12': xl == 9,
            'xl:w-10/12': xl == 10,
            'xl:w-11/12': xl == 11,
            'xl:w-full': xl > 11,
        }">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        initial: {
            default: 12,
            type: [Number, String],
        },
        xs: {
            type: [Number, String],
        },
        sm: {
            type: [Number, String],
        },
        md: {
            type: [Number, String],
        },
        lg: {
            type: [Number, String],
        },
        xl: {
            type: [Number, String],
        },
    },
};
</script>
