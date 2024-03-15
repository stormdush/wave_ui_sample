<template>
    <div class="container">
        <h2>Hello Page</h2>
        <p>Welcome to the Hello page!</p>
        <w-table :headers="table.headers" :items="table.items" v-model:sort="table.sort">
        </w-table>
    </div>
</template>

<script>
import { defineComponent, onMounted, reactive } from 'vue'; // import reactive
import { apiGet } from '../../utils/axios.js';

export default defineComponent({
    name: 'Hello',
    setup() {
        const table = reactive({ // Creating reactive objects using reactive
            headers: [
                { label: 'ID', key: 'id' },
                { label: 'Name', key: 'username' },
                { label: 'Password', key: 'password' },
                { label: 'Tel', key: 'tel' }
            ],
            items: [] // Initially an empty array
        });

        onMounted(async () => {
            try {
                const response = await apiGet('/user');
                table.items = response.data.users.map((user, index) => ({
                    id: index + 1,
                    username: user.username,
                    password: user.password,
                    tel: user.tel || 'N/A'
                }));

            } catch (error) {
                console.error('Failed to fetch user information:', error);
            }
        });

        return {
            table
        };
    }
});
</script>

<style scoped>
.container {
    padding: 10%;
}

.table-container {
    margin: 0 auto;
    max-width: 1000px;
}
</style>
