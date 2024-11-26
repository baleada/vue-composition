import { reactive, shallowReactive, onScopeDispose, type Reactive, type ShallowReactive } from 'vue'
import { Animateable, Broadcastable, Compareable, Completeable, Copyable, Delayable, Drawable, Fetchable, Fullscreenable, Grantable, Listenable, Navigateable, Pickable, Recognizeable, Resolveable, Shareable, Storeable } from '@baleada/logic'
import type { AnimateableKeyframe, AnimateableOptions, AnimateableStatus, AnimateFrame, AnimateFrameEffect, AnimateOptions, BroadcastableOptions, BroadcastableStatus, CompareableOptions, CompareableStatus, CompleteableOptions, CompleteableStatus, CompleteOptions, CopyableOptions, CopyableStatus, DelayableEffect, DelayableOptions, DelayableStatus, DrawableStroke, DrawableOptions, DrawableStatus, FetchableOptions, FetchableStatus, FullscreenableGetElement, FullscreenableOptions, FullscreenableStatus, GrantableOptions, GrantableStatus, ListenableSupportedType, ListenableSupportedEventType, ListenableKeycombo, ListenableMousecombo, ListenablePointercombo, ListenableOptions, ListenableStatus, ListenEffect, ListenEffectParam, ListenOptions, ListenableActive, NavigateableOptions, NavigateableStatus, PickableOptions, PickableStatus, PickOptions, RecognizeableOptions, RecognizeableStatus, RecognizeableEffect, RecognizeableEffectConfig, RecognizeableStopTarget, RecognizeOptions, ResolveableOptions, ResolveableStatus, ShareableOptions, ShareableStatus, StoreableOptions, StoreableStatus } from '@baleada/logic'

export function useAnimateable<Value extends string | number | any[]> (keyframes: AnimateableKeyframe<Value>[], options?: AnimateableOptions): ShallowReactive<Animateable<Value>> {
  const instance = new Animateable<Value>(keyframes, options)
  const reactiveInstance = shallowReactive(instance)
  onScopeDispose(() => reactiveInstance.stop())
  return reactiveInstance
}

export function useBroadcastable<State> (state: State, options?: BroadcastableOptions): ShallowReactive<Broadcastable<State>> {
  const instance = new Broadcastable<State>(state, options)
  const reactiveInstance = shallowReactive(instance)
  onScopeDispose(() => reactiveInstance.stop())
  return reactiveInstance
}

export function useCompareable (string: string, options?: CompareableOptions): ShallowReactive<Compareable> {
  const instance = new Compareable(string, options)
  const reactiveInstance = shallowReactive(instance)
  return reactiveInstance
}

export function useCompleteable (string: string, options?: CompleteableOptions): ShallowReactive<Completeable> {
  const instance = new Completeable(string, options)
  const reactiveInstance = shallowReactive(instance)
  return reactiveInstance
}

export function useCopyable (string: string, options?: CopyableOptions): ShallowReactive<Copyable> {
  const instance = new Copyable(string, options)
  const reactiveInstance = shallowReactive(instance)
  onScopeDispose(() => reactiveInstance.stop())
  return reactiveInstance
}

export function useDelayable (effect: DelayableEffect, options?: DelayableOptions): ShallowReactive<Delayable> {
  const instance = new Delayable(effect, options)
  const reactiveInstance = shallowReactive(instance)
  onScopeDispose(() => reactiveInstance.stop())
  return reactiveInstance
}

export function useDrawable (stroke: DrawableStroke, options?: DrawableOptions): ShallowReactive<Drawable> {
  const instance = new Drawable(stroke, options)
  const reactiveInstance = shallowReactive(instance)
  return reactiveInstance
}

export function useFetchable<ResolveableValue> (resource: string, options?: FetchableOptions): Reactive<Fetchable<ResolveableValue>> {
  const instance = new Fetchable<ResolveableValue>(resource, options)
  const reactiveInstance = reactive(instance)
  return reactiveInstance
}

export function useFullscreenable<ElementType extends Element> (getElement: FullscreenableGetElement<ElementType>, options?: FullscreenableOptions): ShallowReactive<Fullscreenable<ElementType>> {
  const instance = new Fullscreenable<ElementType>(getElement, options)
  const reactiveInstance = shallowReactive(instance)
  return reactiveInstance
}

export function useGrantable (descriptor: PermissionDescriptor, options?: GrantableOptions): ShallowReactive<Grantable> {
  const instance = new Grantable(descriptor, options)
  const reactiveInstance = shallowReactive(instance)
  return reactiveInstance
}

export function useListenable<Type extends ListenableSupportedType, RecognizeableMetadata extends Record<any, any> = Record<any, any>> (type: Type, options?: ListenableOptions<Type, RecognizeableMetadata>): ShallowReactive<Listenable<Type, RecognizeableMetadata>> {
  const instance = new Listenable<Type, RecognizeableMetadata>(type, options)
  const reactiveInstance = shallowReactive(instance)
  onScopeDispose(() => reactiveInstance.stop())
  return reactiveInstance
}

export function useNavigateable<Item> (array: Item[], options?: NavigateableOptions): ShallowReactive<Navigateable<Item>> {
  const instance = new Navigateable<Item>(array, options)
  const reactiveInstance = shallowReactive(instance)
  return reactiveInstance
}

export function usePickable<Item> (array: Item[], options?: PickableOptions): ShallowReactive<Pickable<Item>> {
  const instance = new Pickable<Item>(array, options)
  const reactiveInstance = shallowReactive(instance)
  return reactiveInstance
}

export function useRecognizeable<Type extends ListenableSupportedType, Metadata extends Record<any, any>> (sequence: ListenEffectParam<Type>[], options?: RecognizeableOptions<Type, Metadata>): ShallowReactive<Recognizeable<Type, Metadata>> {
  const instance = new Recognizeable<Type, Metadata>(sequence, options)
  const reactiveInstance = shallowReactive(instance)
  return reactiveInstance
}

export function useResolveable<Value> (getPromise: () => Promise<Value>, options?: ResolveableOptions): ShallowReactive<Resolveable<Value>> {
  const instance = new Resolveable<Value>(getPromise, options)
  const reactiveInstance = shallowReactive(instance)
  return reactiveInstance
}

export function useShareable (shareData: ShareData, options?: ShareableOptions): ShallowReactive<Shareable> {
  const instance = new Shareable(shareData, options)
  const reactiveInstance = shallowReactive(instance)
  return reactiveInstance
}

export function useStoreable<String extends string> (key: string, options?: StoreableOptions): ShallowReactive<Storeable<String>> {
  const instance = new Storeable<String>(key, options)
  const reactiveInstance = shallowReactive(instance)
  return reactiveInstance
}
