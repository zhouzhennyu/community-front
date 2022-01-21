import AlertComponent from './Alert.vue'

const zAlert = {}

zAlert.install = (Vue) => {
    const AlertConstructor = Vue.extend(AlertComponent)
    const instance = new AlertConstructor()
    console.log('zAlert', instance)
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)

    Vue.prototype.$zAlert = (msg, success) => {
        instance.msg = msg
        instance.isShow = true
    }

    Vue.prototype.$zConfirm = (msg, type, success, cancel) => {
        instance.type = type
        instance.msg = msg
        if (typeof success !== 'undefined') {
            instance.success = success
        }
        if (typeof cancel !== 'undefined') {
            instance.cancel = cancel
        }
        instance.isShow = true
    }
}

export default zAlert
