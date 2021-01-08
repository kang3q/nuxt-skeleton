import {
  Module,
  VuexModule,
  VuexAction,
  VuexMutation,
  getModule,
} from 'nuxt-property-decorator'
import firstModule from '~/store/first'
import { store } from '~/store/index'

@Module({
  name: 'second',
  store,
  namespaced: true,
  dynamic: true,
})
class second extends VuexModule {
  count = 0

  @VuexAction({ rawError: true })
  lazyAllIncrement(val = 1) {
    setTimeout(() => {
      firstModule.increment(val)
      this.increment(val)
    }, 500)
  }

  @VuexMutation
  increment(val = 1) {
    this.count += val
  }
}

export default getModule(second)
