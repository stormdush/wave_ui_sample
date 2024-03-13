<template>
    <div>
        <h2>LOGIN</h2>
        <w-alert error outline v-if="errorAlert" type="error" position="top">
            Login faild, please check your username & password.
        </w-alert>
        <w-form @submit.prevent="login" class="wui-form">
            <w-input v-model="username" class="mb3 left-align" label="Account" inner-icon-left="mdi mdi-account"
                color="info" outline required></w-input>
            <w-input v-model="password" class="mb3 left-align" label="Password" inner-icon-left="mdi mdi-lock"
                :type="isPassword ? 'password' : 'text'"
                :inner-icon-right="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
                @click:inner-icon-right="isPassword = !isPassword" color="info" outline type="password"
                required></w-input>
            <w-button type="submit">Login</w-button>
        </w-form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import apiService from '../../utils/axios.js';

export default {
    setup() {
        const router = useRouter();
        const isPassword = ref(true);
        const username = ref('');
        const password = ref('');
        const errorAlert = ref(false);

        const login = async () => {
            const loginData = { username: username.value, password: password.value };
            const resp = await apiService.apiService.post('/login', loginData);
            console.log('----------------------', resp);
            console.log('===================>', resp.headers);
            if (resp.code === 200) {
                document.cookie = `Token=${resp.data.Token}; path=/`;
                // Set Token in request header for Axios
                // apiService.setTokenInHeader(resp.data.Token);

                // router.push('/hello');
            } else {
                errorAlert.value = true;
            }
        };

        return {
            username,
            password,
            errorAlert,
            isPassword,
            login
        };
    }
};
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
}

.wui-form {
    max-width: 300px;
    width: 100%;
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr;
}

.w-button {
    margin-top: 20px;
    justify-self: end;
}

.left-align {
    text-align: left;
}
</style>