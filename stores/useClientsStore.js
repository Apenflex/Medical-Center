export const useClientsStore = defineStore('useClientsStore', {
    state: () => ({
        clients: [
            {
                id: 1,
                name: 'John Doe',
                category: "Категорія 1",
                phone: "380123456789",
                updatedAt: "15/08/2024 18:13",
            },
            {
                id: 2,
                name: 'John Doe',
                category: "Категорія 1",
                phone: "380123456789",
                updatedAt: "15/08/2024 18:13",
            },
        ],
    }),
    getters: {
        GET_CLIENTS: (state) => state.clients,
        FILTERED_CLIENTS: (state) => (searchTerm) => {
            if (!searchTerm) {
                return state.clients;
            }
            return state.clients.filter(client =>
                client.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        },
        SORTED_CLIENTS: (state) => (sortCategory) => {
            if (!sortCategory) return state.clients;
            return state.clients.filter(client => client.category === sortCategory);
        },
    },
    actions: {
        ACT_DELETE_CLIENT(id) {
            this.clients = this.clients.filter((client) => client.id !== id);
        },
        ACT_ADD_CLIENT() {
            const newId = this.clients.length ? this.clients[this.clients.length - 1].id + 1 : 1;
            const randomClient = {
                id: newId,
                name: `Random User ${newId}`,
                category: `Категорія ${Math.floor(Math.random() * 5) + 1}`,
                phone: `380${Math.floor(100000000 + Math.random() * 900000000)}`,
                updatedAt: new Date().toLocaleString(),
            };
            this.clients.push(randomClient);
        },
    },
    persist: true,
});