// Add new feature to the app

const app = Vue.createApp({
    data() {
        return {
            title: 'Vue 3 App',
            showBooks: true,
            books: [    ]   ,
            book: {
                title: '',
                author: '',
                year: 0,
                isFav: false
            }
            }
        }
})

