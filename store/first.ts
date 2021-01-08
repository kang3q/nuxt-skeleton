import {
  Module,
  VuexModule,
  VuexMutation,
  VuexAction,
  getModule,
} from 'nuxt-property-decorator'
import { store } from '@/store'
import secondModule from '~/store/second'

@Module({
  name: 'first',
  store,
  namespaced: true,
  dynamic: true,
})
class First extends VuexModule {
  count = 0

  @VuexAction({ rawError: true })
  secondIncrement(val?: number) {
    secondModule.increment(val)
  }

  @VuexMutation
  increment(val = 1) {
    this.count += val
  }
}

export default getModule(First)
