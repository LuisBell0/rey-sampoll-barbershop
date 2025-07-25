import {defineStore} from 'pinia'

export default defineStore("introAnimationStore", {
    state: () => ({
        loading: false,
    }),
    actions: {
        setLoading(value: boolean) {
            this.loading = value;
        }
    }
})
