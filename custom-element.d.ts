/**
 * JSX type augmentation so React (and other JSX-based) consumers can use
 * <imkit-chat-room> with attribute autocompletion and type checking.
 *
 * We deliberately don't import from 'react' so this file remains usable in
 * projects that don't have @types/react installed. The shim props type accepts
 * arbitrary HTML attributes plus our element's known attributes, which is
 * sufficient for both React and other JSX runtimes that merge into the global
 * JSX.IntrinsicElements namespace.
 */
export interface IMKitChatRoomAttributes {
  token?: string
  'api-base-url'?: string
  'client-key'?: string
  'room-id'?: string
  theme?: 'light' | 'dark' | (string & {})
  // Allow any other HTML/JSX attribute (event handlers, ref, key, style, etc.)
  // without requiring @types/react to be present.
  [key: string]: unknown
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'imkit-chat-room': IMKitChatRoomAttributes
    }
  }
}

export {}
