import {defineStore} from 'pinia'

export default defineStore("introAnimationStore", {
    state: () => ({
        loading: true,
    }),
    actions: {
        setLoading(value: boolean) {
            this.loading = value;
        }
    }
})
