<template>
    <table class="w-table">
        <thead>
            <tr>
                <slot name="columns"></slot>
            </tr>
        </thead>
        <tbody>
            <slot></slot>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'WTable'
};
</script>
