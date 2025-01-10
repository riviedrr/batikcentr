import { makeAutoObservable } from "mobx";
import ID3 from '../img/Silver Reed LK 150.png';

export default class ProductStore {
    constructor() {
        this._types = [ // Типы продукции
            {id: 1, name: 'Вязальные машины'},
            {id: 2, name: 'Аксессуары'},
            {id: 3, name: 'Мебель'},
            {id: 4, name: 'Другое'},
            // Заполнить 
        ]
        this._brands = [ // Бренды
            {id: 1, name: 'ALPES', img: 'placeholder.svg', description: 'Итальянская пряжа'},
            {id: 2, name: 'Brother', img: 'placeholder.svg', description: 'Брат 2'},
            {id: 3, name: 'DesignaKnit9', img: 'placeholder.svg', description: 'Английская вязальная программа'},
            {id: 4, name: 'Fittingly Sew', img: 'placeholder.svg', description: 'Английская швейная программа'},
            // {id: 5, name: 'Hemming'},
            // {id: 6, name: 'Koton'},
            // Заполнить 
        ]
        this._products = [ // Сами продукты, изображения добавить 
            {id: 1, name: 'Silver Reed SK840/SRP60N', price: '1.000.000', img: 'placeholder.svg', description: 'Двухфонтурная компьютерная машина 5-го класса'},
            {id: 2, name: 'Silver Reed SK280/SRP60N', price: '1.000.000', img: 'placeholder.svg', description: 'Двухфонтурная перфокарточная машина 5-го класса'},
            {id: 3, name: 'Silver Reed LK 150', price: '1.000.000', img: ID3, description: 'Однофонтурная ручная вязальная машина 4-го класса'},
            {id: 4, name: 'Silver Reed SK840', price: '1.000.000', img: 'placeholder.svg', description: 'Двухфонтурная компьютерная машина 5-го класса'},
            {id: 5, name: 'Silver Reed SK280/SRP60N', price: '1.000.000', img: 'placeholder.svg', description: 'Двухфонтурная перфокарточная машина 5-го класса'},
            {id: 6, name: 'Silver Reed SK280/SRP60N', price: '1.000.000', img: 'placeholder.svg', description: 'Двухфонтурная перфокарточная машина 5-го класса'},


            // Заполнить 
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setProducts(products) {
        this._products = products
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get products() {
        return this._products
    }
}