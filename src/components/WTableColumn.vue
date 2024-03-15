<template>
    <th>{{ label }}</th>
</template>

<script>
export default {
    name: 'WTableColumn',
    props: {
        label: {
            type: String,
            required: true
        }
    }
};
</script>