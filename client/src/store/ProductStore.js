import { makeAutoObservable } from 'mobx';

export default class ProductStore {
    constructor() {
        this._categores = [];
        this._selectedCategory = {}
        this._products = [];
        this._page = 1
        this._totalCount = 0
        this._limit = 6
        makeAutoObservable(this);
    }

    setCategores(categores) {
        this._categores = categores
    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }


    setProducts(products) {
        this._products = products;
    }

    setSelectedCategory(category) {
        this.setPage(1)
        this._selectedCategory = category;
    }

    get categores() {
        return this._categores;
    }

    get products() {
        return this._products;
    }

    get selectedCategory() {
        return this._selectedCategory;
    }
    get totalCount() {
        return this._totalCount;
    }
    get page() {
        return this._page;
    }
    get limit() {
        return this._limit;
    }
}