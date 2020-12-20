import AsyncStorage from '@react-native-community/async-storage'

export default function getStore(callback) {
    return AsyncStorage.getAllKeys((err, keys) => {
        return AsyncStorage.multiGet(keys, (error, stores) => {

            const store = stores[1]
            let parsedStore = JSON.parse(JSON.parse(store[1]).handleUser) //handleUser is my reducer

            callback(parsedStore)
        })
    })
}