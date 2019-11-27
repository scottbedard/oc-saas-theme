<template>
    <img :alt="brand" :src="src" />
</template>

<script>
import amex from '@/assets/cc_logos/amex.svg';
import diners from '@/assets/cc_logos/diners.svg';
import discover from '@/assets/cc_logos/discover.svg';
import generic from '@/assets/cc_logos/generic.svg';
import jcb from '@/assets/cc_logos/jcb.svg';
import mastercard from '@/assets/cc_logos/mastercard.svg';
import unionpay from '@/assets/cc_logos/unionpay.svg';
import visa from '@/assets/cc_logos/visa.svg';

export default {
    computed: {
        src() {
            return {
                'American Express': amex,
                'Diners Club': diners,
                Discover: discover,
                JCB: jcb,
                MasterCard: mastercard,
                UnionPay: unionpay,
                Unknown: generic,
                Visa: visa,
            }[this.brand] || generic;
        },
    },
    props: {
        brand: {
            default: 'Unknown',
            type: String,
        },
    },
};
</script>
