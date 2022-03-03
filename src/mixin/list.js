import { getList } from '@/api/content.js'
export default {
    data() {
        return {
            status: '',
            sort: 'created',
            tag: '',
            catalog: '',
            isTop: 0,
            page: 0,
            limit: 20,
            isEnd: false,
            lists: [],
            currentVal: ''
        }
    },
    methods: {
        _getList() {
            const params = {
                catalog: this.catalog,
                isTop: this.isTop,
                page: this.page,
                limit: this.limit,
                sort: this.sort,
                tag: this.tag,
                status: this.status
            }
            getList(params).then(res => {
                console.log('文章列表-------', res)
                if (res.data.length < 20) {
                    this.isEnd = true
                }
                if (res.code === 200) {
                    this.lists = [...this.lists, ...res.data]
                }
            }).catch(err => {
                this.$zAlert(err.message)
            })
        },
        nextPage() {
            this.page++
            this._getList()
        }
    },
    mounted() {
        const catalog = this.$route.params.catalog
        if (catalog) {
            this.catalog = catalog
        }
        this._getList()
    }
}
