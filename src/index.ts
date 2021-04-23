import { ref, onBeforeUnmount } from 'vue'
import type { Ref } from 'vue'
import { Animateable, Completeable, Copyable, Delayable, Dispatchable, Fetchable, Fullscreenable, Grantable, Listenable, Navigateable, Recognizeable, Resolveable, Sanitizeable, Searchable, Storeable, ListenableSupportedType, RecognizeableSupportedEvent } from '@baleada/logic'
import type { AnimateableKeyframe, AnimateableOptions, CompleteableOptions, CopyableOptions, DelayableFunction, DelayableOptions, DispatchableOptions, FetchableOptions, FullscreenableGetElement, FullscreenableOptions, GrantableOptions, ListenableOptions, NavigateableOptions, RecognizeableOptions, ResolveableGetPromise, ResolveableOptions, SanitizeableOptions, SearchableOptions, StoreableOptions } from '@baleada/logic'

export function useAnimateable (keyframes: AnimateableKeyframe[], options?: AnimateableOptions): Ref<Animateable> {
  const instance = new Animateable(keyframes, options)
  const reactiveInstance = ref(instance)
  onBeforeUnmount(() => reactiveInstance.value.stop())
  return reactiveInstance as Ref<Animateable>
}


export function useCompleteable (string: string, options?: CompleteableOptions): Ref<Completeable> {
  const instance = new Completeable(string, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as Ref<Completeable>
}


export function useCopyable (string: string, options?: CopyableOptions): Ref<Copyable> {
  const instance = new Copyable(string, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as Ref<Copyable>
}


export function useDelayable (fn: DelayableFunction, options?: DelayableOptions): Ref<Delayable> {
  const instance = new Delayable(fn, options)
  const reactiveInstance = ref(instance)
  onBeforeUnmount(() => reactiveInstance.value.stop())
  return reactiveInstance as Ref<Delayable>
}


export function useDispatchable (type: string, options?: DispatchableOptions): Ref<Dispatchable> {
  const instance = new Dispatchable(type, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as Ref<Dispatchable>
}


export function useFetchable (resource: string, options?: FetchableOptions): Ref<Fetchable> {
  const instance = new Fetchable(resource, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as Ref<Fetchable>
}


export function useFullscreenable<ElementType extends Element> (getElement: FullscreenableGetElement<ElementType>, options?: FullscreenableOptions): Ref<Fullscreenable<ElementType>> {
  const instance = new Fullscreenable<ElementType>(getElement, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as Ref<Fullscreenable<ElementType>>
}


export function useGrantable<DescriptorType extends PermissionDescriptor> (descriptor: DescriptorType, options?: GrantableOptions): Ref<Grantable<DescriptorType>> {
  const instance = new Grantable<DescriptorType>(descriptor, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as Ref<Grantable<DescriptorType>>
}


export function useListenable<EventType extends ListenableSupportedType> (type: string, options?: ListenableOptions<EventType>): Ref<Listenable<EventType>> {
  const instance = new Listenable<EventType>(type, options)
  const reactiveInstance = ref(instance)
  onBeforeUnmount(() => reactiveInstance.value.stop())
  return reactiveInstance as Ref<Listenable<EventType>>
}


export function useNavigateable<Item> (array: Item[], options?: NavigateableOptions): Ref<Navigateable<Item>> {
  const instance = new Navigateable<Item>(array, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as Ref<Navigateable<Item>>
}


export function useRecognizeable<EventType extends RecognizeableSupportedEvent> (sequence: EventType[], options?: RecognizeableOptions<EventType>): Ref<Recognizeable<EventType>> {
  const instance = new Recognizeable<EventType>(sequence, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as Ref<Recognizeable<EventType>>
}


export function useResolveable<Value> (getPromise: ResolveableGetPromise<Value>, options?: ResolveableOptions): Ref<Resolveable<Value>> {
  const instance = new Resolveable<Value>(getPromise, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as Ref<Resolveable<Value>>
}


export function useSanitizeable (html: string, options?: SanitizeableOptions): Ref<Sanitizeable> {
  const instance = new Sanitizeable(html, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as Ref<Sanitizeable>
}


export function useSearchable<Item extends string | object> (candidates: Item[], options?: SearchableOptions<Item>): Ref<Searchable<Item>> {
  const instance = new Searchable<Item>(candidates, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as Ref<Searchable<Item>>
}


export function useStoreable (key: string, options?: StoreableOptions): Ref<Storeable> {
  const instance = new Storeable(key, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as Ref<Storeable>
}

