import { ref, onBeforeUnmount } from 'vue'
import type { Ref } from 'vue'
import { Animateable, Completeable, Copyable, Delayable, Dispatchable, Fetchable, Fullscreenable, Grantable, Listenable, Navigateable, Recognizeable, Resolveable, Sanitizeable, Searchable, Storeable } from '@baleada/logic'
import type { AnimateableKeyframe, AnimateableOptions, AnimateableStatus, AnimateFrame, AnimateFrameEffect, AnimateOptions, CompleteableOptions, CompleteableStatus, CompleteOptions, CopyableOptions, CopyableStatus, DelayableEffect, DelayableOptions, DelayableStatus, DispatchableOptions, DispatchableStatus, DispatchOptions, FetchableOptions, FetchableStatus, FetchOptions, FetchOptionsApi, FullscreenableGetElement, FullscreenableOptions, FullscreenableStatus, GrantableOptions, GrantableStatus, ListenableSupportedType, ListenableSupportedEventType, ListenableKeycombo, ListenableClickcombo, ListenablePointercombo, ListenableOptions, ListenableStatus, ListenEffect, ListenEffectParam, ListenOptions, ListenableActive, NavigateableOptions, NavigateableStatus, RecognizeableOptions, RecognizeableStatus, RecognizeableEffectApi, RecognizeOptions, ResolveableGetPromise, ResolveableOptions, ResolveableStatus, SanitizeableOptions, SanitizeableStatus, SearchableOptions, SearchableStatus, StoreableOptions, StoreableStatus } from '@baleada/logic'

export function useAnimateable (keyframes: AnimateableKeyframe[], options?: AnimateableOptions): Ref<Animateable> {
  const instance = new Animateable(keyframes, options)
  const reactiveInstance = ref(instance)
  onBeforeUnmount(() => reactiveInstance.value.stop())
  return reactiveInstance as unknown as Ref<Animateable>
}

export function useCompleteable (string: string, options?: CompleteableOptions): Ref<Completeable> {
  const instance = new Completeable(string, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as unknown as Ref<Completeable>
}

export function useCopyable (string: string, options?: CopyableOptions): Ref<Copyable> {
  const instance = new Copyable(string, options)
  const reactiveInstance = ref(instance)
  onBeforeUnmount(() => reactiveInstance.value.stop())
  return reactiveInstance as unknown as Ref<Copyable>
}

export function useDelayable (effect: DelayableEffect, options?: DelayableOptions): Ref<Delayable> {
  const instance = new Delayable(effect, options)
  const reactiveInstance = ref(instance)
  onBeforeUnmount(() => reactiveInstance.value.stop())
  return reactiveInstance as unknown as Ref<Delayable>
}

export function useDispatchable<EventType extends ListenableSupportedEventType> (type: EventType, options?: DispatchableOptions): Ref<Dispatchable<EventType>> {
  const instance = new Dispatchable<EventType>(type, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as unknown as Ref<Dispatchable<EventType>>
}

export function useFetchable (resource: string, options?: FetchableOptions): Ref<Fetchable> {
  const instance = new Fetchable(resource, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as unknown as Ref<Fetchable>
}

export function useFullscreenable<ElementType extends Element> (getElement: FullscreenableGetElement<ElementType>, options?: FullscreenableOptions): Ref<Fullscreenable<ElementType>> {
  const instance = new Fullscreenable<ElementType>(getElement, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as unknown as Ref<Fullscreenable<ElementType>>
}

export function useGrantable<DescriptorType extends PermissionDescriptor> (descriptor: DescriptorType, options?: GrantableOptions): Ref<Grantable<DescriptorType>> {
  const instance = new Grantable<DescriptorType>(descriptor, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as unknown as Ref<Grantable<DescriptorType>>
}

export function useListenable<Type extends ListenableSupportedType, RecognizeableMetadata extends Record<any, any> = Record<any, any>> (type: Type, options?: ListenableOptions<Type, RecognizeableMetadata>): Ref<Listenable<Type, RecognizeableMetadata>> {
  const instance = new Listenable<Type, RecognizeableMetadata>(type, options)
  const reactiveInstance = ref(instance)
  onBeforeUnmount(() => reactiveInstance.value.stop())
  return reactiveInstance as unknown as Ref<Listenable<Type, RecognizeableMetadata>>
}

export function useNavigateable<Item> (array: Item[], options?: NavigateableOptions): Ref<Navigateable<Item>> {
  const instance = new Navigateable<Item>(array, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as unknown as Ref<Navigateable<Item>>
}

export function useRecognizeable<Type extends ListenableSupportedType, Metadata extends Record<any, any>> (sequence: ListenEffectParam<Type>[], options?: RecognizeableOptions<Type, Metadata>): Ref<Recognizeable<Type, Metadata>> {
  const instance = new Recognizeable<Type, Metadata>(sequence, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as unknown as Ref<Recognizeable<Type, Metadata>>
}

export function useResolveable<Value> (getPromise: ResolveableGetPromise<Value>, options?: ResolveableOptions): Ref<Resolveable<Value>> {
  const instance = new Resolveable<Value>(getPromise, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as unknown as Ref<Resolveable<Value>>
}

export function useSanitizeable (html: string, options?: SanitizeableOptions): Ref<Sanitizeable> {
  const instance = new Sanitizeable(html, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as unknown as Ref<Sanitizeable>
}

export function useSearchable<Item extends string | object> (candidates: Item[], options?: SearchableOptions<Item>): Ref<Searchable<Item>> {
  const instance = new Searchable<Item>(candidates, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as unknown as Ref<Searchable<Item>>
}

export function useStoreable (key: string, options?: StoreableOptions): Ref<Storeable> {
  const instance = new Storeable(key, options)
  const reactiveInstance = ref(instance)
  return reactiveInstance as unknown as Ref<Storeable>
}
