import {defineStore} from 'pinia'
import {fetchIndexInfo} from "@/service/module/list.js";

const useIndexStore = defineStore('list', {
  state: () => ({
    locationList: [],
    infoList: [],
    totalPages: 0,
    pageNum: 0
  }),
  actions: {
    async getInitInfo() {
      const result = await fetchIndexInfo()
      this.locationList = result.data.list
      this.infoList = result.data.page.list
      this.totalPages = result.data.page.pages
      this.pageNum = result.data.page.pageNum
    }
  }
})

export default useIndexStore
